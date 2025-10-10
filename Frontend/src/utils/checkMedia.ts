import type React from "react";
import ViewTwitterMedia from "../components/MediaViewer/ViewTwitterMedia";
import viewYoutbeMedia from "../components/MediaViewer/ViewYoutbeMedia";
import ViewVimeoMedia from "../components/MediaViewer/ViewVimeoMedia";

type MediaComponentType = React.ComponentType<{ postLink: string }>;

function checkMedia(mediaTye: string): MediaComponentType | null {
  if (mediaTye === "x") return ViewTwitterMedia;
  if (mediaTye === "youtube") return viewYoutbeMedia;
  if (mediaTye === "vimeo") return ViewVimeoMedia;
  return null;
}

export default checkMedia;
