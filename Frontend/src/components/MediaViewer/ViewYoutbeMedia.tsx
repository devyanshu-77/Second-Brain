import React from "react";
import ErrorFallback from "../ErrorFallback";

interface ViewYoutubeMediaProps {
  postLink: string;
}

const ViewYoutbeMedia: React.FC<ViewYoutubeMediaProps> = ({ postLink }) => {
  console.log(postLink)
  const regex =
    /(?:youtube\.com\/(?:shorts\/|live\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = postLink.match(regex);
  const videoId = match ? match[1] : null;
  console.log(videoId)
  if (!videoId) return <ErrorFallback />;
  return (
    <iframe
      title="YouTube video"
      className="w-full h-fit"
      loading="lazy"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
      src={`https://www.youtube.com/embed/${videoId}`}
    ></iframe>
  );
};

export default ViewYoutbeMedia;
