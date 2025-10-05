interface IconProps {
  size: "sm" | "md" | "lg"
}

const sizeVariants = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
};


const PlusIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="yellow"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={sizeVariants[props.size]}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default PlusIcon;
