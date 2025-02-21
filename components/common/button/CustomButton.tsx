import React from "react";
import cn from "classnames";

type ButtonVariant = "default" | "loading" | "selected" | "disabled" | "yellow";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "w-full py-3 flex items-center justify-center",
        {
          "bg-white text-black border-2 border-black": variant === "default",
          "bg-[#FFC453] text-black border-black font-semibold text-base":
            variant === "yellow",
          "bg-gray-400 text-gray-600 border-gray-400 cursor-not-allowed relative":
            variant === "loading",
          "bg-black text-white border-black": variant === "selected",
          "bg-[#DAD8D8] text-[#858484] cursor-not-allowed":
            variant === "disabled",
        },
        props.className
      )}
    >
      {variant === "loading" ? (
        <span className="animate-spin">⏳</span>
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
