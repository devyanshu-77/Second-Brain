import React, { type MouseEventHandler } from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";

interface AddContentModalPros {
  isOpen: boolean;
  setOpen: MouseEventHandler;
}

const AddContentModal = ({ isOpen, setOpen }: AddContentModalPros) => {
  if (!isOpen) return null;
  function handleSubmit() {
    console.log("Hello")
  }
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-[rgb(0,0,0,0.6)] z-10 flex justify-center items-center">
      <div className="h-130 w-100 bg-white p-2 flex flex-col items-center">
        <div className="w-full h-fit flex justify-end">
          <button onClick={setOpen} className="h-fit w-fit cursor-pointer">
            <CrossIcon size="md" color="dark" />
          </button>
        </div>
        <p className="mt-4 text-2xl font-medium">Add new content</p>
        <div className="w-full mt-4 flex flex-col items-center gap-3">
          <FormIntupt type="text" placeholder="Title" />
          <FormIntupt type="text" placeholder="Link" />
          <p className="text-lg">Or</p>
          <FormIntupt type="text" placeholder="Description" />
          <Button variant="primary" text="Submit" size="lg" onclick={handleSubmit} fullWidth={true} />
        </div>
      </div>
    </div>
  );
};

function FormIntupt({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) {
  return (
    <input
      className="w-[90%] px-4 py-2 border-2 border-slate-300 outline-0 focus:border-slate-500 rounded-lg"
      type={`${type}`}
      placeholder={`${placeholder}`}
    />
  );
}

export default AddContentModal;
