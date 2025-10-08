import type { Request, Response } from "express";

async function embedLink(req: Request, res: Response) {
  const { url } = req.query;

  if (!url) {
    return res
      .status(404)
      .json({ success: false, message: "Please provide url" });
  }
  const providers = [
    { pattern: "youtu.be", endPoint: "https://www.youtube.com/oembed" },
    { pattern: "x.com", endPoint: "https://publish.twitter.com/oembed" },
    { pattern: "instagram.com", endPoint: "https://www.youtube.com/oembed" },
    { pattern: "docs.chaicode", endPoint: "https://docs.chaicode.com/ombeb" },
  ];
  const provider = providers.find((p) => url.includes(p.pattern));
  if (!provider)
    return res
      .status(400)
      .json({ success: false, message: "Can't load link content" });

  const response = await await fetch(
    `${provider.endPoint}?url=${url}&format=json`
  );
  if (!response.ok) {
    if (response.status >= 400 && response.status < 500) {
      return res.status(400).json({
        success: false,
        message: "Invalid link or content not found.",
      });
    } else {
      return res.status(502).json({
        success: false,
        message: "Failed to fetch embed from external service.",
      });
    }
  }
  const data = await response.json();
  let link = data.html;
  let newLink = null;
  if (link.includes("blockquote") && link.includes("<br>")) {
    newLink = link.replace(/<br>/gi, "<br/>");
    newLink = newLink.replace("class", "className")
  }

  if (newLink) {
    return res.send(newLink);
  }
  res.send(link);
}

export default embedLink;
