import express from "express";
const app = express();
import userModel from "./models/userModel.js";

app.use(express.json());

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const newUser = await userModel.create({
    name,
    email,
  });
  res.status(200).json({
    message: "Signup sucessfully",
    User: {
      newUser,
    },
  });
});

export default app;
