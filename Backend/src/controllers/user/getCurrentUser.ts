import type { Request, Response } from "express";

import { findUser } from "../../services/findUser.js";

import contentModel from "../../models/contentModel.js";

async function getCurrentUser(req: Request, res: Response) {
  const username: string | undefined = req.user?.username;
  const existingUser = await findUser(username);
  if (!existingUser) {
    return res.status(401).json({
      success: false,
      message:
        "Authentication required. Please sign in to access this resource.",
    });
  }
  const contents = await contentModel.find({ user: existingUser._id });
  console.log("Content in backend - ", contents);
  const user = {
    username: existingUser.username,
    id: existingUser.id,
  };
  return res.status(200).json({
    success: true,
    message: "User is authenticated",
    data: {
      user,
      contents,
    },
  });
}

export default getCurrentUser;
