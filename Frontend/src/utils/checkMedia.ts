import type React from "react";
import ViewTwitterMedia from "../components/MediaViewer/ViewTwitterMedia";
import viewYoutbeMedia from "../components/MediaViewer/viewYoutbeMedia";

type MediaComponentType = React.ComponentType<{postLink: string}>;

function checkMedia(mediaTye: string): MediaComponentType | null {
  if (mediaTye === "x")  return ViewTwitterMedia;
  if (mediaTye === "youtube") return viewYoutbeMedia;
  return null;
}

export default checkMedia;
