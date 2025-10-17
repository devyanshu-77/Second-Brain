import type { UseFormRegisterReturn } from "react-hook-form";

function FormIntupt({
  type,
  placeholder,
  register,
  inputRef,
}: {
  type: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  inputRef?: React.Ref<HTMLInputElement>;
}) {
  return (
    <input
      className="w-full px-4 py-2 border-2 border-slate-300 outline-0 focus:border-slate-500 rounded-lg"
      type={`${type}`}
      placeholder={`${placeholder}`}
      ref={inputRef}
      {...register}
    />
  );
}

export default FormIntupt;
