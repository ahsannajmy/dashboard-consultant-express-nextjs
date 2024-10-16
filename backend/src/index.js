require("dotenv").config();
const express = require("express");
const mainApp = express();
const port = process.env.SERVER_PORT;
const cors = require("cors");

const rootRouter = express.Router();

mainApp.use(express.json());
mainApp.use(
  cors({
    origin: process.env.FE_ORIGIN,
    credentials: true,
  })
);

rootRouter.get("/", async (req, res) => {
  return res.status(200).send({
    status: "success",
    message: "root api accessed",
  });
});

const userServices = require("./user/userController");
const employeeServices = require("./employee/employeeController");

rootRouter.use("/users", userServices);
rootRouter.use("/employees", employeeServices);

mainApp.use("/api/v1/dashboard-konsultan", rootRouter);

mainApp.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
