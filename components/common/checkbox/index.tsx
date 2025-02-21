import { ICustomCheckboxProps } from "./interface";

export default function CustomCheckbox({
  label,
  checked,
  onChange,
}: ICustomCheckboxProps) {
  return (
    <label className="flex items-center cursor-pointer w-fit">
      <input
        type="checkbox"
        className="hidden peer"
        checked={checked}
        onChange={onChange}
      />

      <div
        className="w-4 h-4 border-2 border-[#C2C2C2] rounded-full 
       peer-checked:bg-black transition-all"
        onClick={onChange}
      ></div>

      <span className="text-black text-sm font-medium mr-[6px]">{label}</span>
    </label>
  );
}
