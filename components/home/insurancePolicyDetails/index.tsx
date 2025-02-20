import CustomNavbar from "@/components/common/customNavbar";
import CarSvg from "@/components/svg/carSvg";
import Image from "next/image";
import React from "react";
import carPlate from "@/public/images/car_plate.png";
import { staticData } from "./STATIC_DATA.ts";
import { DashedText } from "@/components/common/dashedText";

const InsurancePolicyDetails = () => {
  return (
    <>
      <CustomNavbar text="مشخصات بیمه نامه" icon={<CarSvg />} />
      <div className="pt-6 pb-8 flex flex-col items-center justify-center w-full">
        <div className="w-fit flex flex-col gap-6">
          <Image src={carPlate} alt="مشخصات بیمه نامه" />
          <div className="gap-2 flex flex-col">
            {staticData.map((item) => (
              <DashedText key={item.end} start={item.start} end={item.end} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InsurancePolicyDetails;
