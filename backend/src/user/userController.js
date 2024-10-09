const express = require("express");
const prisma = require("../db/index");
const { hashPassword } = require("../utils/passwordHasher");
const router = express.Router();

router.get("/", async (req, res) => {
  const user = await prisma.user.findMany();

  return res.status(200).send({
    status: "success",
    message: "User retrieved",
    data: user,
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
