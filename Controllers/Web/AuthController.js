const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../Modals/User");
const { env } = require("../../Environments/env");
exports.userSignup = async (req, res, next) => {
  try {
    const data = req.body;
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const registration = new User({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role:'User',
      created_on: new Date(),
    });

    const user = await registration.save();
    user.password = null;

    res.send({
      status: 201,
      message: "Add User Successfully",
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};
