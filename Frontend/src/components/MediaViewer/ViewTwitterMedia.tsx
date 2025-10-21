import React, {useEffect} from "react";
import "./twitterMedia.css"

function ViewTwitterMedia({ postLink }: { postLink: string }) {
  const link = postLink.replace("x", "twitter");
  useEffect(() => {
    // @ts-ignore
    if (window.twttr && window.twttr.widgets) {
      // @ts-ignore
      window.twttr.widgets.load();
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [link]);
  return (
    <blockquote className="twitter-tweet max-w-full h-fit">
      <a href={`https://twitter.com/${link}`}></a>
    </blockquote>
  );
}

export default ViewTwitterMedia;
