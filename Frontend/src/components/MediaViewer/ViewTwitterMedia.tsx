import React from "react";

function ViewTwitterMedia({ postLink }: { postLink: string }) {
  const link = postLink.replace("x", "twitter");

  return (
    <blockquote className="twitter-tweet w-full h-fit">
      <a href={`https://twitter.com/${link}`}></a>
    </blockquote>
  );
}

export default ViewTwitterMedia;
