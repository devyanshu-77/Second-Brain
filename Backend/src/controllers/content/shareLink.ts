import type { Request, Response } from "express";
import LinkModel from "../../models/linkModel.js";
import userModel from "../../models/userModel.js";
import contentModel from "../../models/contentModel.js";


async function getSharedContent(req: Request, res: Response) {
  const link = req.params.shareId;
  const sharedContent = await LinkModel.findOne({ hash: link });
  if (!sharedContent) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid or expired share link." });
  }
  const user = await userModel.findOne({ _id: sharedContent.userId });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "The user who shared this content no longer exists.",
    });
  }
  const content = await contentModel.find({ user: sharedContent.userId });
  if (!content) {
    return res.status(404).json({
      success: false,
      message: "No content found for this shared link.",
    });
  }
  res.status(200).json({
    success: true,
    message: "Shared content retrieved successfully.",
    data: content,
  });
}

export default getSharedContent;
