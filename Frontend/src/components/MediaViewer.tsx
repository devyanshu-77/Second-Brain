import React from "react";

interface MediaViewerInterface {
  link: string;
  title?: string;
}

const MediaViewer = (props: MediaViewerInterface) => {
  return (
    <div className="w-full">
      <iframe
        className="w-full"
        src={props.link}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MediaViewer;
