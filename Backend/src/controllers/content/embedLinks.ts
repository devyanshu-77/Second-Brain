import type { Request, Response } from "express";
import extractYouTubeId from "../../utils/extractYouTubeId.js";
import { success } from "zod";

async function embedLink(req: Request, res: Response) {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ success: false, message: "URL is missing" });
  }
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = extractYouTubeId(url);
    if (!videoId) {
      res
        .status(400)
        .json({ success: false, message: "Failed to verify link" });
    }
    res
      .status(200)
      .json({
        success: true,
        type: "YouTube",
        linkId: videoId,
        message: "Verified link ",
      });
  }
  if(url.includes("x.com")) {
    const response = await fetch(`https://publish.twitter.com/oembed?url=${url}`);
    console.log(response)
    const data = await response.json();
    const link = data.html;
    console.log(data)
    return res.status(200).json({success: true, message: "Verified link", link: link })
  }
}

export default embedLink;
