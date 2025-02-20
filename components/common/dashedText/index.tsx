import { IDashedTextProps } from "./interface";

export const DashedText = ({ start, end }: IDashedTextProps) => {
  return (
    <div className="flex items-center">
      <span className="text-gray-900 text-[14px] font-normal">{start}</span>
      <span className="flex-1 border-t border-dashed mx-2"></span>
      <span className="text-black text-[14px] font-normal">{end}</span>
    </div>
  );
};
