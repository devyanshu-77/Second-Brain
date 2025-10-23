import type { UseFormRegisterReturn } from "react-hook-form";

function FormIntupt({
  type,
  placeholder,
  ...props
}: {
  type: string;
  placeholder: string;
}) {
  return (
    <input
      className="w-full px-4 py-2 border-2 border-slate-300 outline-0 focus:border-slate-500 rounded-lg"
      type={`${type}`}
      placeholder={`${placeholder}`}
      {...props}
    />
  );
}

export default FormIntupt;
