import type { Request, Response, NextFunction } from "express";
import LinkModel from "../../models/linkModel.js";
import { v4 as uuid } from "uuid";
import { success } from "zod";

async function createShareLink(req: Request, res: Response) {
  const share = req.body.share;
  const { id } = req.user!;
  const randomHash = uuid();

  if (share) {
    const existingLink = await LinkModel.findOne({ userId: id });
    if (existingLink) {
      res.status(409).json({
        success: true,
        message:
          "Resource with the provided identifier already exists. Returning the existing resource.",
        data: existingLink.hash,
      });
      return;
    }
    const link = await LinkModel.create({
      userId: id,
      hash: randomHash,
    });
    res.status(201).json({
      success: true,
      message: "Generated sharable link",
      data: link.hash,
    });
  } else {
    await LinkModel.deleteOne({ userId: id });
    res.status(200).json({
      success: true,
      message: "Deleted sharable link",
    });
  }
}

export default createShareLink;
