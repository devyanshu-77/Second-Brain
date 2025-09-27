import type { Request, Response } from "express";
import contentModel from "../../models/contentModel.js";
import logger from "../../config/logger.js";

async function getAllContent(req: Request, res: Response) {
  try {
    const { id } = req?.user!;
    const content = await contentModel
      .find({ user: id })
      .populate("user", "username");
    res.send(content);
    logger.info(`Sent all content to userId - ${id}`);
  } catch (error) {
    logger.error("Error while fetching all content");
    throw new Error("Internal server error");
  }
}

export default getAllContent;
