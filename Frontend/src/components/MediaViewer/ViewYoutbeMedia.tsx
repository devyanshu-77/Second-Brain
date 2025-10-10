import React from "react";
import ErrorFallback from "../ErrorFallback";

type LinkType = string | null;

const viewYoutbeMedia = ({ postLink }: { postLink: string }) => {
  const shortRegex = /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i;
  const videoRegex = /youtu\.be\/([a-zA-Z0-9_-]{11})/i;
  const liveRegex = /(?:v=|\/live\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  let videoId: LinkType = null;
  if (shortRegex.test(postLink)) {
    const id = postLink.match(shortRegex)![1];
    videoId = id;
  } else if (videoRegex.test(postLink)) {
    const id = postLink.match(videoRegex)![1];
    videoId = id;
  } else if(liveRegex.test(postLink)) {
    const id = postLink.match(liveRegex)![1];
    videoId = id;
  } 
  else {
    videoId = null;
  }
  if(!videoId) return <ErrorFallback />
  return (
    <iframe
      className="w-full h-fit"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
      src={`https://www.youtube.com/embed/${videoId}`}
    ></iframe>
  );
};

export default viewYoutbeMedia;
