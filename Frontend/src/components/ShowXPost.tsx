import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Card from "./Card";

const ShowXPost = ({}) => {
  const { contents } = useSelector((state: RootState) => state.user);
  const xContent = contents?.filter((content) => content.type === "x");
  return (
    <div className="h-full w-full">
      {!xContent || xContent.length === 0 ? (
        <p className="text-xl font-semibold mb-8 mt-6">Add new content</p>
      ) : (
        <p className="text-xl font-semibold mb-8 mt-6">Your X posts</p>
      )}
      {xContent?.map((content) => (
        <Card
          key={content._id}
          title={content.title}
          type={content.type}
          tags={content.tags}
          id={content._id}
          link={content.link}
        />
      ))}
    </div>
  );
};

export default ShowXPost;
