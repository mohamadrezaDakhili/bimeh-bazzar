import CustomButton from "@/components/common/button/CustomButton";
import CustomCheckbox from "@/components/common/checkbox";
import Loading from "@/components/common/loading";
import { fetchAddressData } from "@/services";
import { useStore } from "@/zustand/store/store";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IUserAddressProps } from "./interface";

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

  const handleRemoveAddress = (item: IUserAddressProps) => {
    const newQuery = new URLSearchParams(searchParams);
    newQuery.set("remove", item.id);
    router.push(`?${newQuery.toString()}`, { scroll: false });
  };

  return (
    <>
      <section className="px-3 py-4 flex flex-col gap-4">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data?.map((item: IUserAddressProps) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <CustomCheckbox
                    label={item.name}
                    checked={selectedItem?.id === item.id}
                    onChange={() => handleSelect(item)}
                  />
                  <button
                    className="text-[#FFA5A5] text-sm font-medium"
                    onClick={() => handleRemoveAddress(item)}
                    type="button"
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
          type="button"
          onClick={handleSubmit}
        >
          انتخاب
        </CustomButton>
      </div>
    </>
  );
};

export default ChooseAddress;
