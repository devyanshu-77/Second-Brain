import type { Request, Response } from "express";

import contentModel from "../../models/contentModel.js";
import logger from "../../config/logger.js";

async function createContent(req: Request, res: Response) {
  try {
    console.log("end point reached 1");
    const { id } = req.user!;
    const { title, link, tags, type } = req.body;
    console.log("DATA - ", title, link, tags, type);
    const newContent = await contentModel.create({
      title,
      link,
      user: id,
      tags,
      type,
    });
    console.log("end point reached 2");
    res.status(201).json({
      success: true,
      data: {
        contents: [newContent],
      },
      message: "Created new content",
    });
    logger.info(`Created new content for userId - ${id}`);
  } catch (error) {
    logger.error("Error while creating content", error);
    throw new Error("Internal server error");
  }
}

export default createContent;
