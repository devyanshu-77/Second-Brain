import React from "react";

type LinkType = string | null;

const viewYoutbeMedia = ({ postLink }: { postLink: string }) => {
  const shortRegex = /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i;
  const videoRegex = /youtu\.be\/([a-zA-Z0-9_-]{11})/i;
  let videoId: LinkType = null;
  if (shortRegex.test(postLink)) {
    const id = postLink.match(shortRegex)![1];
    videoId = id;
  } else if (videoRegex.test(postLink)) {
    const id = postLink.match(videoRegex)![1];
    videoId = id;
  } else {
    videoId = null;
  }
  console.log(videoId);
  if (!videoId)
    return (
      <>
        <h1>Testing </h1>
      </>
    );
  return (
    <iframe
      className="w-full"
      src={`https://www.youtube.com/embed/${videoId}`}
    ></iframe>
  );
};

export default viewYoutbeMedia;
