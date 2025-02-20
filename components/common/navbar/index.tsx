import React from "react";
import { ICustomNavbarProps } from "./interface";

const CustomNavbar = (props: ICustomNavbarProps) => {
  const { icon, text } = props;
  return (
    <div className="w-full h-[56px] px-2 py-3 flex items-center gap-[6px] shadow-custom">
      <div>{icon}</div>
      <span className="text-[18px]">{text}</span>
    </div>
  );
};

export default CustomNavbar;
