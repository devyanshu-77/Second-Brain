import React, { useEffect, useRef } from "react";
import Button from "./Button";
import FormIntupt from "./Input";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { shareContent } from "../store/content/contentThunk";

interface Props {
  isOpen: boolean;
  setOpen: Function;
}

const GenerateLink = ({ isOpen, setOpen }: Props) => {
  if (!isOpen) return null;
  const dispatch: AppDispatch = useDispatch();
  const linkContainer = useRef<HTMLInputElement>(null);
  const { link } = useSelector((state: RootState) => state.user);
  const htmlElem = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleOutSideClick(e) {
      console.log("Reached outside");
      if (htmlElem.current && !htmlElem.current.contains(e.target)) {
        console.log("Reached inside");
        setOpen();
      }
    }
    document.addEventListener("click", handleOutSideClick, true);
    return () => {
      document.removeEventListener("click", handleOutSideClick, true);
    };
  });
  function handleClick() {
    dispatch(shareContent());
  }
  if (link) {
    console.log("If statement link - ", link);
    linkContainer.current!.value = `http://localhost:5173/share/${link}`;
  }
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
      <div
        ref={htmlElem}
        className="w-95 py-5 px-4 bg-white flex flex-col items-center gap-5"
      >
        <p className="text-xl font-semibold text-center">Generate Link</p>
        <div className="w-full flex flex-col gap-5">
          <FormIntupt
            type="text"
            inputRef={linkContainer}
            placeholder="Get your link..."
          />
          <Button
            onclick={handleClick}
            type="submit"
            text={"Generate Share link"}
            size="md"
            fullWidth={true}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default GenerateLink;
