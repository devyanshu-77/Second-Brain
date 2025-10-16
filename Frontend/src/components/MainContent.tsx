import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";
import AddContentModal from "./AddContentModal";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  function toggleModal() {
    setModalOpen((prev) => !prev);
  }
  const { contents } = useSelector((state: RootState) => state.user);
  console.log(contents);
  return (
    <div className="bg-[#f7f7f7] min-h-screen flex flex-col gap-5 flex-1 pl-4">
      {isModalOpen && (
        <AddContentModal isOpen={isModalOpen} setOpen={toggleModal} />
      )}
      {/* Main section Header */}
      <div className="h-15 pl-2 pr-2 w-full flex items-center justify-between">
        <h1 className="text-[1.45rem] font-semibold">All Notes</h1>
        <div className="flex gap-4">
          <Button
            variant="secondary"
            size="md"
            text="Share Brain"
            onclick={() => {
              console.log("Hello");
            }}
            startIcon={<ShareIcon size="sm" color="dark" />}
          />
          <Button
            onclick={toggleModal}
            variant="primary"
            size="md"
            text="Add Content"
            startIcon={<PlusIcon size="sm" color="light" />}
          />
        </div>
      </div>
      {/* Main section Main */}
      <div className="h-full w-full">
        <div className="columns-4">
          {contents && contents.length <= 0 && <p className="text-xl">Add new content</p>}
          {contents &&
            contents.length > 0 &&
            contents.map((content) => {
              {
                console.log(content.tag);
              }
              return (
                <Card
                  key={content._id}
                  title={content.title}
                  tags={content.tags.map((tag) => tag)}
                  type={content.type}
                  link={content.link}
                />
              );
            })}

        </div>
      </div>
    </div>
  );
};

export default Main;
