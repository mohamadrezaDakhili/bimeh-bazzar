import React from "react";
import BottomSheet from "../common/buttomSheet";
import CustomButton from "../common/button/CustomButton";

const ErrorPopup = ({ isOpen, onRetry, onClose, isLoading }: any) => (
  <BottomSheet isOpen={isOpen}>
    <div className="text-[14px] font-medium gap-2 px-3 py-4 flex flex-col">
      <span>متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.</span>
      <span>مجددا، تلاش کنید.</span>
    </div>
    <div
      className="p-[10px] grid grid-cols-2 gap-[10px]"
      style={{ boxShadow: "0px 3px 10px 1px #2222221A" }}
    >
      <CustomButton
        variant={isLoading ? "loading" : "selected"}
        onClick={onRetry}
      >
        تلاش مجدد
      </CustomButton>
      <CustomButton variant="default" onClick={onClose}>
        بازگشت
      </CustomButton>
    </div>
  </BottomSheet>
);

export default ErrorPopup;
