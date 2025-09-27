import { Router } from "express";
const contentRouter = Router();

import { authMiddleware } from "../middlewares/auth.js";
import contentSchema from "../schemas/contentSchema.js";
import { validateInput } from "../middlewares/validateRequest.js";

import getAllContent from "../controllers/content/getAllContent.js";
import createContent from "../controllers/content/createContent.js";
import deleteController from "../controllers/content/deleteContent.js";

contentRouter.post(
  "/create",
  authMiddleware,
  validateInput(contentSchema),
  createContent
);
contentRouter.get("/all", authMiddleware, getAllContent);
contentRouter.delete("/delete/:contentId", authMiddleware, deleteController)

export default contentRouter;
