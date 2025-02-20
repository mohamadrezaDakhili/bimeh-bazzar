import CustomNavbar from "@/components/common/customNavbar";
import CarSvg from "@/components/svg/carSvg";
import React from "react";
import RegisterForm from "./PersonalInformationForm";

const CarOwnerDetails = () => {
  return (
    <>
      <CustomNavbar text="مشخصات مالک خودرو" icon={<CarSvg />} />
      <RegisterForm />
    </>
  );
};

export default CarOwnerDetails;
