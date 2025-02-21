"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CustomCheckbox from "@/components/common/checkbox";
import { IUserAddressProps } from "./interface";
import Loading from "@/components/common/loading";
import { useSearchParams } from "next/navigation";
import { baseURL } from "@/utils";
import CustomButton from "@/components/common/button/CustomButton";

async function fetchData() {
  const res = await fetch(`${baseURL}/my-addresses/`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

const BottomSheetData = () => {
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("sheet") === "open";
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { data, error, isLoading } = useQuery({
    queryKey: ["my-address"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5,
    enabled: isOpen,
  });

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  return (
    <>
      <section className="px-3 py-4 flex flex-col gap-4">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data?.map((item: IUserAddressProps) => (
              <div key={item.id}>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <CustomCheckbox
                      label={item.name}
                      checked={selectedId === item.id}
                      onChange={() => handleSelect(item.id)}
                    />
                    <button
                      className="text-[#FFA5A5] text-sm font-medium"
                      onClick={() => {}}
                    >
                      ✕
                    </button>
                  </div>
                  <div className="mx-6">
                    <p className="text-[12px] font-normal text-[#757575]">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </section>
      <div
        className="p-[10px]"
        style={{ boxShadow: "0px 3px 10px 1px #2222221A" }}
      >
        <CustomButton variant={selectedId ? "selected" : "disabled"}>
          انتخاب
        </CustomButton>
      </div>
    </>
  );
};

export default BottomSheetData;
