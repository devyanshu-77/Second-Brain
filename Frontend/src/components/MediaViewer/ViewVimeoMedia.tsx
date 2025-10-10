import React from "react";
import ErrorFallback from "../ErrorFallback";

const ViewVimeoMedia = ({ postLink }: { postLink: string }) => {
  const url = postLink;
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(\d+)/);
  if (!match) return <ErrorFallback />;
  const videoId = match[1];
  return (
    <iframe
      className="w-full"
      title="vimeo-player"
      src={`https://player.vimeo.com/video/${videoId}`}
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    ></iframe>
  );
};

export default ViewVimeoMedia;
