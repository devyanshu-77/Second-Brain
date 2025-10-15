import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";
import AddContentModal from "./AddContentModal";

interface MainProps {
  username: string | null;
  id: string | null;
}

const Main = ({ username, id }: MainProps) => {
  console.log(username, id)
  const [isModalOpen, setModalOpen] = useState(false);
  function toggleModal() {
    setModalOpen((prev) => !prev);
  }
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
          <Card
            title="Tweet render test"
            tags="testing"
            type="x"
            link="https://x.com/AbhinavXJ/status/1976274486178795693"
          />
          <Card
            title="Youtube render test"
            tags="testing"
            type="youtube"
            link="https://www.youtube.com/live/r_DyB4QjGjU?si=pWc9DNElKyHU0Cnp"
          />

          <Card
            title="Tweet render test"
            tags="testing"
            type="x"
            link="https://x.com/rohit_negi9/status/1976593745656352874"
          />
          <Card
            title="Youtube render test"
            tags="testing"
            type="youtube"
            link="https://youtu.be/AjvxmJdHipo?si=fmuZHc6CFfz6WZnV"
          />

          <Card
            title="Tweet render test"
            tags="testing"
            type="x"
            link="https://x.com/ramxcodes/status/1976604081784492355"
          />
          <Card
            title="Youtube render test"
            tags="testing"
            type="youtube"
            link="https://youtu.be/54w5Okqb4c0?si=IzXp9PlkJc6GKz1b"
          />
          <Card title="Youtube render test" tags="testing" type="youtube" />
        </div>
      </div>
    </div>
  );
};

export default Main;
