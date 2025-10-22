import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Card from "./Card";
import Button from "./Button";

const ShowYTPost = ({ setYTPost }) => {
  const { contents } = useSelector((state: RootState) => state.user);
  const ytContent = contents?.filter((content) => content.type === "youtube");
  return (
    <div className="min-h-screen w-full px-5 bg-[#f7f7f7]">
      {!ytContent || ytContent.length === 0 ? (
        <p className="text-xl font-semibold mb-8 mt-6">Add new content</p>
      ) : (
        <div className="flex justify-between items-center mt-4 py-4 bg-white px-2 border-b-2 border-slate-200 rounded-lg">
          <p className="text-xl font-semibold ">Your YouTube posts</p>
          <Button
            variant="primary"
            text="Go back"
            size="md"
            onclick={setYTPost}
          />
        </div>
      )}
      <div className="columns-4 mt-6">
        {ytContent?.map((content) => (
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
    </div>
  );
};

export default ShowYTPost;
