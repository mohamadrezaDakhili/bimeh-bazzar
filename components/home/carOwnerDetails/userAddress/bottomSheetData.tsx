import React from "react";
import { useQuery } from "@tanstack/react-query";
import CustomCheckbox from "@/components/common/checkbox";

const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://front-end-task.bmbzr.ir";

async function fetchData() {
  const res = await fetch(`${baseURL}/my-addresses/`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

const BottomSheetData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["my-address"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5,
  });

  console.log({ data, error, isLoading });
  return (
    <section className="px-3 py-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <CustomCheckbox label="آدرس شماره 1" />
          <button
            className="text-[#FFA5A5] text-sm font-medium"
            onClick={() => {}}
          >
            ✕
          </button>
        </div>
        <div className="mx-6">
          <p className="text-[12px] font-normal text-[#757575]">
            فارس، شیراز، خیابان جمهوری، بالاتر از فلان، پلاک ۶، واحد ۲۳۴
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <CustomCheckbox label="آدرس شماره 1" />
          <button
            className="text-[#FFA5A5] text-sm font-medium"
            onClick={() => {}}
          >
            ✕
          </button>
        </div>
        <div className="mx-6">
          <p className="text-[12px] font-normal text-[#757575]">
            فارس، شیراز، خیابان جمهوری، بالاتر از فلان، پلاک ۶، واحد ۲۳۴
          </p>
        </div>
      </div>
    </section>
  );
};

export default BottomSheetData;
