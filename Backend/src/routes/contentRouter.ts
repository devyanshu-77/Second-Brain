import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
const contentRouter = Router();


contentRouter.get("/getall", authMiddleware, (req,res) => {
  res.send("Ok")
})




export default contentRouter;