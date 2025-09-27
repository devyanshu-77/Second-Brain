import type { Request, Response } from "express";

import contentModel from "../../models/contentModel.js";
import logger from "../../config/logger.js";

async function createContent(req: Request, res: Response) {
  try {
    const { id } = req?.user!;
    const { title, link, tags } = req.body;
    const newContent = await contentModel.create({
      title,
      link,
      user: id,
      tags,
    });
    res.status(201).json({
      success: true,
      data: newContent,
      message: "Created new content",
    });
    logger.info(`Created new content for userId - ${id}`);
  } catch (error) {
    logger.error("Error while creating content", error);
    throw new Error("Internal server error");
  }
}

export default createContent;
