const User = require("../../models/User");
const argon2 = require("argon2");
const config = require("config");
const jwtSecret = config.get("jwtSecret");
const jwt = require("jsonwebtoken");
const { validateRegisterInput } = require("../../util/validators");
const { UserInputError } = require("apollo-server-errors");

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
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) {
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
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
