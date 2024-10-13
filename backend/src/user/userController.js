const express = require("express");
const prisma = require("../db/index");
const { hashPassword } = require("../utils/passwordHasher");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", async (req, res) => {
  const user = await prisma.user.findMany();

  return res.status(200).send({
    status: "success",
    message: "User retrieved",
    data: user,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).send({
        status: "failed",
        message: "Incorrect credentials",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).send({
        status: "failed",
        message: "Incorrect credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        nama: user.nama,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.setHeader(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`
    );

    return res.status(200).send({
      status: "success",
      message: "Login successfull",
      token: token,
    });
  } catch (err) {
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

router.post("/logout", async (req, res) => {
  res.setHeader(
    "Set-Cookie",
    "token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict"
  );
  return res.status(200).send({
    status: "success",
    message: "Logout successfull",
  });
});

router.post("/change-password/:id", async (req, res) => {
  const id = req.params.id;
  const { oldPassword, newPassword } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(404).send({
        status: "failed",
        message: "User not found",
      });
    }

    const validateOldPassword = await bcrypt.compare(
      oldPassword,
      user.password
    );

    if (!validateOldPassword) {
      return res.status(404).send({
        status: "failed",
        message: "Invalid credentials",
      });
    }

    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: await hashPassword(newPassword),
      },
    });

    return res.status(200).send({
      status: "success",
      message: "Change password successfull",
    });
  } catch (err) {
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

module.exports = router;
