interface TagProps {
  color?: "primary" | "secondary" | "accent" | "error" | "success" | "warning";
  variant?: "deafult" | "outline";
  children?: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({
  color = "primary",
  variant = "deafult",
  children,
}) => {
  return (
    <button
      style={
        variant === "outline"
          ? {
              borderColor: `var(--${color})`,
              borderWidth: 1,
              borderStyle: "solid",
              color: `var(--${color})`,
            }
          : { backgroundColor: `var(--${color})` }
      }
      className={`px-4 py-1 text-sm rounded-full text-white filter hover:brightness-125 active:brightness-75`}
    >
      {children || "Button"}
    </button>
  );
};

export default Tag;
