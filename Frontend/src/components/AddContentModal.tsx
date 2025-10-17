import React, { useEffect, useRef } from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import FormIntupt from "./Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { AddContentData } from "../store/content/contentType";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { createContent, getContents } from "../store/content/contentThunk";

interface AddContentModalPros {
  isOpen: boolean;
  setOpen: () => void;
}


const AddContentModal = ({ isOpen, setOpen }: AddContentModalPros) => {
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<AddContentData>({
    defaultValues: {
      type: "youtube",
    },
  });
  if (!isOpen) return null;
  const contentDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    1;
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
  const onSubmit: SubmitHandler<AddContentData> = async(data) => {
    await dispatch(createContent(data)).unwrap();
    await dispatch(getContents()).unwrap();
    reset();
    setOpen();
  }
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-[rgb(0,0,0,0.6)] z-10 flex justify-center items-center">
      <div
        ref={contentDiv}
        className="py-10 w-100 bg-white px-5 rounded-md flex flex-col items-center"
      >
        <div className="w-full h-fit flex justify-end">
          <button onClick={setOpen} className="h-fit w-fit cursor-pointer">
            <CrossIcon size="md" color="dark" />
          </button>
        </div>
        <p className="mt-4 text-2xl font-medium">Add new content</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mt-4 flex flex-col items-center gap-3"
        >
          <FormIntupt
            register={{ ...register("title", { required: true }) }}
            type="text"
            placeholder="Title"
          />
          <FormIntupt
            register={{ ...register("link", { required: true }) }}
            type="text"
            placeholder="Link"
          />
          <FormIntupt
            register={{ ...register("tags", { required: true }) }}
            type="text"
            placeholder="Tag"
          />
          <div className="w-full flex justify-evenly items-center">
            <p className="text-[1.1rem] text-gray-600">Select link type:-</p>
            <select
              {...register("type", { required: true })}
              className="bg-slate-700 text-white px-3 py-2 w-fit rounded-full"
            >
              <option value="youtube">YouTube</option>
              <option value="x">X</option>
            </select>
          </div>
          <Button
            variant="primary"
            text="Submit"
            size="lg"
            type="submit"
            fullWidth={true}
          />
        </form>
      </div>
    </div>
  );
};

export default AddContentModal;
