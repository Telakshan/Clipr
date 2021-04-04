const express = require("express");
const userControllers = require("../controllers/user-controllers");
const { body } = require("express-validator");
const router = express.Router();

router.post(
  "/register",
  [
    body("email").normalizeEmail().isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  userControllers.register
);

module.exports = router;
