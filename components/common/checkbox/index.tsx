import { ICustomCheckboxProps } from "./interface";

export default function CustomCheckbox(props: ICustomCheckboxProps) {
  const { label } = props;
  return (
    <label className="flex items-center cursor-pointer w-fit">
      <input type="checkbox" className="hidden peer" />
      <div
        className="w-4 h-4 border-2 border-[#C2C2C2] rounded-full
       peer-checked:bg-black transition-all"
      ></div>
      <span className="text-black text-sm font-medium mr-[6px]">{label}</span>
    </label>
  );
}
