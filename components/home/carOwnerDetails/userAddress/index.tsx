"use client";

import BottomSheet from "@/components/common/buttomSheet";
import CustomButton from "@/components/common/button/CustomButton";
import { useRouter } from "next/navigation";
import React from "react";

const UserAddress = () => {
  const router = useRouter();
  const openSheet = () => router.replace("?sheet=open", { scroll: false });
  return (
    <div className="mt-6 flex flex-col gap-[6px]">
      <h2 className="text-base font-medium">آدرس جهت درج روی بیمه‌نامه</h2>
      <p className="text-[14px] font-normal">
        لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
      </p>
      <CustomButton onClick={openSheet} variant="yellow">
        انتخاب از آدرس‌های من
      </CustomButton>

      <BottomSheet />
    </div>
  );
};

export default UserAddress;
