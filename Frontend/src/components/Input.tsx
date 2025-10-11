import type { UseFormRegisterReturn } from "react-hook-form";

function FormIntupt({
  type,
  placeholder,
  register,
}: {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}) {
  return (
    <input
      className="w-full px-4 py-2 border-2 border-slate-300 outline-0 focus:border-slate-500 rounded-lg"
      type={`${type}`}
      placeholder={`${placeholder}`}
      {...register}
    />
  );
}

export default FormIntupt;
