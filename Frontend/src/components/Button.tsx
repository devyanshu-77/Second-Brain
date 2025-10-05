import type { ReactElement } from "react";

interface ButtonUI {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: String;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  gap?: String;
  hoverVariant?: string;
  fullWidth?: boolean;
  onClick: () => void;
}

const sizeStyles = {
  sm: "py-1 px-3 rounded-xl text-sm",
  md: "py-2 px-4 rounded-md text-md",
  lg: "py-2 px-6 rounded-md text-xl",
};

const variantStyles = {
  primary: "bg-btnPrimary text-white",
  secondary: "bg-btnSecondary text-black",
};

const Button = (props: ButtonUI) => {
  const StartIcon = props.startIcon;

  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${
        sizeStyles[props?.size!] || sizeStyles["sm"]
      } 
      } cursor-pointer flex justify-evenly gap-2 items-center w-fit`}
    >
      {StartIcon}
      {props.text}
      {props.endIcon}
    </button>
  );
};

export default Button;
