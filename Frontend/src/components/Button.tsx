interface ButtonUI {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  text: String;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

const buttonVariants = {
  primary: "bg-purple-600",
  secondary: "bg-purple-300",
};

const Button = (props: ButtonUI) => {
  return <div className={buttonVariants[props.variant]}>{props.text}</div>;
};

export default Button;
