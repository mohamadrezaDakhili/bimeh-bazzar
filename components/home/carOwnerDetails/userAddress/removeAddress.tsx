"use client";
import CustomButton from "@/components/common/button/CustomButton";
import { fetchAddressData } from "@/services";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IUserAddressProps } from "./interface";
import Loading from "@/components/common/loading";

const RemoveAddress = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const id = searchParams.get("remove");
  const [removeItem, setRemoveItem] = useState<IUserAddressProps>();
  const { data, isLoading } = useQuery({
    queryKey: ["my-address"],
    queryFn: fetchAddressData,
    staleTime: 1000 * 60 * 5,
    enabled: id !== null,
  });

  const handleBack = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("remove");
    const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`;
    router.push(newUrl, { scroll: false });
  };

  const handleRemoveItem = () => {
    queryClient.setQueryData(["my-address"], (oldData: IUserAddressProps[]) => {
      return oldData.filter((item) => item.id !== id);
    });
    handleBack();
  };

  useEffect(() => {
    if (data) {
      const item = data.filter((item: IUserAddressProps) => item.id === id);
      if (item.length > 0) {
        setRemoveItem(item[0]);
      } else {
        handleBack();
      }
    } else {
      handleBack();
    }
  }, [data]);

  return (
    <>
      <section className="px-3 py-4 flex flex-col gap-4">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <span className="text-[14px] font-medium">
              آیا از حذف آدرس خود، مطمین هستید؟
            </span>
            <div className="bg-[#F2F2F2] p-2">
              <span className="text-[14px] font-medium">
                {removeItem?.name}
              </span>
              <p className="text-[#757575] text-[12px] font-normal">
                {removeItem?.details}
              </p>
            </div>
          </>
        )}
      </section>
      <div
        className="p-[10px] grid grid-cols-2 gap-[10px]"
        style={{ boxShadow: "0px 3px 10px 1px #2222221A" }}
      >
        <CustomButton
          variant={"selected"}
          onClick={handleRemoveItem}
          type="button"
        >
          تایید
        </CustomButton>
        <CustomButton variant={"default"} onClick={handleBack} type="button">
          بازگشت
        </CustomButton>
      </div>
    </>
  );
};

export default RemoveAddress;
