require("dotenv").config();
const express = require("express");
const mainApp = express();
const port = process.env.SERVER_PORT;

const rootRouter = express.Router();

mainApp.use(express.json());

rootRouter.get("/", async (req, res) => {
  return res.status(200).send({
    status: "success",
    message: "root api accessed",
  });
});

const userServices = require("./user/userController");

rootRouter.use("/users", userServices);

mainApp.use("/api/v1/dashboard-konsultan", rootRouter);

mainApp.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
