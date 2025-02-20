import CustomNavbar from "@/components/common/customNavbar";
import CarSvg from "@/components/svg/carSvg";
import React from "react";
import RegisterForm from "./PersonalInformation/PersonalInformationForm";
import CustomButton from "@/components/common/button/CustomButton";

const CarOwnerDetails = () => {
  return (
    <>
      <CustomNavbar text="مشخصات مالک خودرو" icon={<CarSvg />} />
      <div className="py-6 px-5">
        <RegisterForm />
        <div className="mt-6 flex flex-col gap-[6px]">
          <h2 className="text-base font-medium">آدرس جهت درج روی بیمه‌نامه</h2>
          <p className="text-[14px] font-normal">
            لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
          </p>
          <CustomButton variant="yellow">انتخاب از آدرس‌های من</CustomButton>

          <div className="w-full flex justify-end mt-[18px]">
            <CustomButton variant="selected" className="w-[131px]">
              تایید و ادامه
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarOwnerDetails;
