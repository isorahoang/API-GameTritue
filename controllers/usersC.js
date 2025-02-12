const UserModel = require('../models/UserModel');
const mongoose = require('mongoose');

//đăng ký tài khoản

const register = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ message: "vui lòng nhập đủ các ô" });
    }
    
    const user = await UserModel.findOne({ email: email});
    if (user) {
      return res.status(400).json({ status: false, message: "Emai đã tồn tại" });
    }
    const newUser = new UserModel({ email, password, username });
    await UserModel.create(newUser);
    return res
      .status(200)
      .json({
        status: true,
        message: "Tạo tài khoản thành công",
        data: newUser,
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//đăng nhập
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email hoặc mật khẩu đang để trống" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(402).json({ status: false, message: "tài khoản không tồn tại" });
    }
    if (user.password !== password) {
      return res
        .status(401)
        .json({ status: false, message: "Email hoặc mật khẩu bị sai" });
    } else {
      res.json({
        status: true,
        message: "Đăng nhập thành công",
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { register,login }; 