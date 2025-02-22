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
  const [removeItem, setRemoveItem] = useState<IUserAddressProps | null>(null);
  const { data, isLoading } = useQuery<IUserAddressProps[]>({
    queryKey: ["my-address"],
    queryFn: fetchAddressData,
    staleTime: 1000 * 60 * 5,
    enabled: id !== null,
  });

  const handleBack = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("remove");
    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  const handleRemoveItem = async () => {
    if (id && data) {
      queryClient.setQueryData(["my-address"], (oldData: IUserAddressProps[]) =>
        oldData.filter((item) => item.id !== id)
      );
      handleBack();
    }
  };

  useEffect(() => {
    if (data) {
      const item = data.find((item) => item.id === id);
      if (item) {
        setRemoveItem(item);
      }
    }
  }, [data, id]);

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
            {removeItem ? (
              <div className="bg-[#F2F2F2] p-2">
                <span className="text-[14px] font-medium">
                  {removeItem.name}
                </span>
                <p className="text-[#757575] text-[12px] font-normal">
                  {removeItem.details}
                </p>
              </div>
            ) : (
              <span>آدرس پیدا نشد.</span>
            )}
          </>
        )}
      </section>
      <div
        className="p-[10px] grid grid-cols-2 gap-[10px]"
        style={{ boxShadow: "0px 3px 10px 1px #2222221A" }}
      >
        <CustomButton
          variant={!removeItem ? "disabled" : "selected"}
          onClick={handleRemoveItem}
          type="button"
          disabled={!removeItem}
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
