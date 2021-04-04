const HttpError = require("../models/HttpError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

const secret = config.get("jwtSecret");
const { validationResult } = require("express-validator");

const register = async (req, res, next) => {
  const errors = validationResult(req);

  const { email, username, password } = req.body;
  const user = {
    email: email,
    username: username,
    password: password,
  };

  try {
    res.status(200).json("User created");
    //res.status(200).json({'msg': 'User created...'});
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.register = register;
