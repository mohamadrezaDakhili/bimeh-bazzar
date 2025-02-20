import CustomNavbar from "@/components/common/customNavbar";
import CarSvg from "@/components/svg/carSvg";
import React from "react";

const CarOwnerDetails = () => {
  return (
    <>
      <CustomNavbar text="مشخصات مالک خودرو" icon={<CarSvg />} />
    </>
  );
};

export default CarOwnerDetails;
