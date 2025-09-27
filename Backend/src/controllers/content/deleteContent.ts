import type { Request, Response } from "express";
import contentModel from "../../models/contentModel.js";
import logger from "../../config/logger.js";

async function deleteController(req: Request, res: Response) {
  try {
    const contentId = req.params.contentId;
    const { id } = req.user!;
    const deleteResult = await contentModel.findOneAndDelete({
      _id: contentId,
      user: id,
    });
    if (!deleteResult) {
      return res.status(404).json({
        success: false,
        message: "Content not found or you don't have permission to delete it",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Deleted content successfully!" });
    logger.info(`Deleted content for userId - ${id}`);
  } catch (error) {
    logger.error("Error while deleting content!");
    throw new Error("Internal server error");
  }
}

export default deleteController;
