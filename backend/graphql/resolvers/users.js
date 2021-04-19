const User = require("../../models/User");
const argon2 = require("argon2");
const config = require("config");
const jwtSecret = config.get("jwtSecret");
const jwt = require("jsonwebtoken");
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../util/validators");
const { UserInputError } = require("apollo-server-errors");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    jwtSecret,
    { expiresIn: "1h" }
  );
};

module.exports = {
  Query: {
    async getUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async login(_, { loginInput: { email, password } }) {
      const { errors, valid } = validateLoginInput(email, password);
      const user = await User.findOne({ email });

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("Email is not associated with any users", {
          errors,
        });
      }

      const match = await argon2.verify(user.password, password);

      if (!match) {
        errors.general = "Invalid credentials";
        throw new UserInputError("Invalid credentials", { errors });
      }

      const token = generateToken(user);
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) {
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ email });
      if (user) {
        throw new UserInputError("Email is already in use", {
          errors: {
            email: "This email is already in use",
          },
        });
      }
      const hashedPassword = await argon2.hash(password);
      const newUser = new User({
        email,
        username,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      });
      const res = await newUser.save();
      const token = jwt.sign(
        {
          id: res.id,
          email: res.email,
          username: res.username,
        },
        jwtSecret,
        { expiresIn: "1h" }
      );
      return {
        ...res._doc,
        id: res._id,
        email,
        username,
        token,
      };
    },
  },
};
