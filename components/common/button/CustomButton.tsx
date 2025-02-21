import cn from "classnames";
import React from "react";

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
          "bg-[#ACACAC] text-[#525252] cursor-not-allowed relative":
            variant === "loading",
          "bg-black text-white border-black": variant === "selected",
          "bg-[#DAD8D8] text-[#858484] cursor-not-allowed":
            variant === "disabled",
        },
        props.className
      )}
    >
      {variant === "loading" ? (
        <div className="flex w-full justify-center gap-2">
          <div className="flex justify-center items-center w-fit">
            <div className="w-4 h-4 border-2 border-black/50 border-t-[#D1D2D2] rounded-full animate-spin"></div>
          </div>
          <span>{children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
