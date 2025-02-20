import CustomNavbar from "@/components/common/customNavbar";
import CarSvg from "@/components/svg/carSvg";
import React from "react";
import RegisterForm from "./PersonalInformation/PersonalInformationForm";
import CustomButton from "@/components/common/button/CustomButton";
import UserAddress from "./userAddress";

const CarOwnerDetails = () => {
  return (
    <>
      <CustomNavbar text="مشخصات مالک خودرو" icon={<CarSvg />} />
      <div className="py-6 px-5">
        <RegisterForm />
        <UserAddress />
        <div className="w-full flex justify-end mt-[18px]">
          <CustomButton variant="selected" className="w-[131px]">
            تایید و ادامه
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default CarOwnerDetails;
