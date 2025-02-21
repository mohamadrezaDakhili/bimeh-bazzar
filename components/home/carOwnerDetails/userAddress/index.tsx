"use client";

import BottomSheet from "@/components/common/buttomSheet";
import CustomButton from "@/components/common/button/CustomButton";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import BottomSheetData from "./bottomSheetData";
import { useStore } from "@/zustand/store/store";

const UserAddress = () => {
  const router = useRouter();
  const { activeAddress } = useStore();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("sheet") === "open";
  const isOpenRemoveAddress = searchParams.get("remove") !== null;
  const openSheet = () => router.push("?sheet=open", { scroll: false });

  return (
    <div className="mt-6 flex flex-col gap-[6px]">
      <h2 className="text-base font-medium">آدرس جهت درج روی بیمه‌نامه</h2>
      {activeAddress?.details ? (
        <p className="text-[#757575] text-[12px] font-normal mt-4">
          {activeAddress?.details}
        </p>
      ) : (
        <>
          <p className="text-[14px] font-normal">
            لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
          </p>
          <CustomButton onClick={openSheet} variant="yellow" type="button">
            انتخاب از آدرس‌های من
          </CustomButton>
        </>
      )}

      <BottomSheet
        title={isOpenRemoveAddress ? "حذف آدرس" : "انتخاب آدرس"}
        isOpen={isOpen}
      >
        <BottomSheetData />
      </BottomSheet>
    </div>
  );
};

export default UserAddress;
