import React, {
  useEffect,
  useRef,
} from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import FormIntupt from "./Input";

interface AddContentModalPros {
  isOpen: boolean;
  setOpen: () => void;
}

const AddContentModal = ({ isOpen, setOpen }: AddContentModalPros) => {
  if (!isOpen) return null;
  const contentDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {1
    function handleOutSideClick(e) {
      if (contentDiv.current && !contentDiv.current.contains(e.target)) {
        setOpen();
      }
    }
    document.addEventListener("click", handleOutSideClick, true);
    return () => {
      document.removeEventListener("click", handleOutSideClick, true);
    };
  }, [isOpen]);
  function handleSubmit() {
    console.log("Hello");
  }
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-[rgb(0,0,0,0.6)] z-10 flex justify-center items-center">
      <div
        ref={contentDiv}
        className="h-130 w-100 bg-white py-2 px-5 rounded-md flex flex-col items-center"
      >
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
          <Button
            variant="primary"
            text="Submit"
            size="lg"
            onclick={handleSubmit}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
};


export default AddContentModal;
