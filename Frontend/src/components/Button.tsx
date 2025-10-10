import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: String;
  size: "sm" | "md" | "lg";
  fullWidth?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onclick: () => void;
}

const varinatStyles = {
  primary: "bg-[var(--color-btnPrimary)] text-white",
  secondary: "bg-[var(--color-btnSecondary)] text-black",
};

const sizeStyles = {
  sm: "px-2 py-1 rounded-xl text-[1rem] gap-2",
  md: "px-4 py-2 rounded-lg text-[1.1rem] gap-3",
  lg: "px-8 py-2 rounded-md text-[1.25rem] gap-4",
};

const Button = ({
  variant,
  text,
  size,
  startIcon,
  endIcon,
  onclick,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      className={`${varinatStyles[variant]} ${sizeStyles[size]} ${
        fullWidth ? "w-full " : "w-fit"
      } flex items-center cursor-pointer`}
    >
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};

export default Button;
