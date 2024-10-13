const express = require("express");
const prisma = require("../db/index");
const { hashPassword } = require("../utils/passwordHasher");
const { generatePassword } = require("../utils/passwordRandomGen");
const { sendEmail } = require("../utils/sendEmail");
const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  const genPassword = generatePassword();
  const status_kuasa_hukum = body.status_kuasa_hukum === "true";

  try {
    await prisma.$transaction(async (prisma) => {
      await prisma.employer.create({
        data: {
          nama: body.nama,
          status_registrasi: "PENDING",
          jabatan: body.jabatan,
          status_sertifikasi: body.status_sertifikasi,
          status_kuasa_hukum: status_kuasa_hukum,
          izin_berlaku_konsultan: new Date(body.izin_berlaku_konsultan),
          izin_berlaku_pengacara: new Date(body.izin_berlaku_pengacara),
        },
      });
      if (body.jabatan === "ADMIN") {
        await prisma.user.create({
          data: {
            nama: body.nama,
            email: body.email,
            password: await hashPassword(genPassword),
            role: "ADMIN",
          },
        });
      } else {
        await prisma.user.create({
          data: {
            nama: body.nama,
            email: body.email,
            password: await hashPassword(genPassword),
            role: "BASE",
          },
        });
      }
      await sendEmail(body.email, genPassword);
    });

    return res.status(201).send({
      status: "success",
      message: "Employee created",
    });
  } catch (err) {
    if (err.code === "P2002") {
      return res.status(500).send({
        status: "failed",
        message: `Employee with field ${err.meta.target[0]} already exist`,
      });
    }
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  const page = req.query.page;
  const limit = 8;
  const skip = (page - 1) * 8;
  try {
    const employeePaginationRes = await prisma.employer.findMany({
      skip: skip,
      take: limit,
      orderBy: {
        nama: "asc",
      },
    });

    const totalEmployees = await prisma.employer.count();

    return res.status(200).send({
      status: "success",
      message: "employee retrieved",
      data: employeePaginationRes,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalEmployees / limit),
        totalItems: totalEmployees,
      },
    });
  } catch (err) {
    return res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
});

module.exports = router;
