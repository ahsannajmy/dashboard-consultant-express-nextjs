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

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        nama: body.nama,
        email: body.email,
        password: await hashPassword(body.password),
        role: body.role,
      },
    });
    return res.status(201).send({
      status: "success",
      message: "User created",
      data: {
        nama: user.nama,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    if (err.code === "P2002") {
      return res.status(500).send({
        status: "failed",
        message: `User with field ${err.meta.target[0]} already exist`,
      });
    }
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

module.exports = router;
