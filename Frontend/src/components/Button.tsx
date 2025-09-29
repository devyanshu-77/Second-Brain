interface ButtonUI {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  text: String;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

const sizeStyles = {
  sm: "w-24 py-1 px-2 rounded-xl",
  md: "w-fit py-2 px-6 rounded-xl",
  lg: "w-fit py-2 px-12 rounded-xl",
  xl: "w-fit py-2 px-14 rounded-xl",
  "2xl": "w-fit py-2 px-16 rounded-xl",
};

const variantStyles = {
  primary: "bg-btnPrimary",
  secondary: "bg-btnSecondary",
};

const Button = (props: ButtonUI) => {
  console.log((variantStyles[props.variant], sizeStyles[props.size]));
  return (
    <div
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${sizeStyles[props.size]}`}
    >
      {props.text}
    </div>
  );
};

export default Button;
