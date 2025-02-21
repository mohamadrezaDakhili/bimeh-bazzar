import Loading from "@/components/common/loading";
import { baseURL } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { IUserAddressProps } from "./interface";
import CustomCheckbox from "@/components/common/checkbox";
import { useStore } from "@/zustand/store/store";
import CustomButton from "@/components/common/button/CustomButton";
import { fetchAddressData } from "@/services";

const ChooseAddress = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setActiveAddress } = useStore();
  const isOpen = searchParams.get("sheet") === "open";
  const [selectedItem, setSelectedItem] = useState<IUserAddressProps | null>(
    null
  );
  const { data, isLoading } = useQuery({
    queryKey: ["my-address"],
    queryFn: fetchAddressData,
    staleTime: 1000 * 60 * 5,
    enabled: isOpen,
  });

  const handleSelect = (item: IUserAddressProps) => {
    setSelectedItem(item);
  };

  const handleSubmit = () => {
    if (selectedItem) {
      setActiveAddress(selectedItem);
      router.replace("/", { scroll: false });
    }
  };

  const openRemoveAddress = (item: IUserAddressProps) => {
    const newQuery = new URLSearchParams(searchParams);
    newQuery.set("remove", item.id);
    const newUrl = `${window.location.pathname}?${newQuery.toString()}`;

    router.replace(newUrl, undefined);
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
                      checked={selectedItem?.id === item.id}
                      onChange={() => handleSelect(item)}
                    />
                    <button
                      className="text-[#FFA5A5] text-sm font-medium"
                      onClick={() => openRemoveAddress(item)}
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
        <CustomButton
          variant={selectedItem ? "selected" : "disabled"}
          onClick={handleSubmit}
        >
          انتخاب
        </CustomButton>
      </div>
    </>
  );
};

export default ChooseAddress;
