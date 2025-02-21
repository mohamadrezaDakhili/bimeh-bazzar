import { ErrorMessage, Field } from "formik";
import React from "react";

const InputField = ({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) => (
  <div className="text-[#757575] relative">
    <Field
      name={name}
      placeholder={placeholder}
      className="w-full p-2 border h-[48px] placeholder:text-[#757575] text-sm text-[#404040] border-[#B4B4B4]"
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
    />
    <div className="h-[28px]">
      <ErrorMessage
        name={name}
        component="p"
        className="text-[#E61F10] text-sm pt-[4px]"
      />
    </div>
  </div>
);

export default InputField;
