import CustomNavbar from "@/components/common/customNavbar";
import CarSvg from "@/components/svg/carSvg";
import Image from "next/image";
import React from "react";
import carPlate from "@/public/images/car_plate.png";
import { staticData } from "./STATIC_DATA.ts";
import { DashedText } from "@/components/common/dashedText";
import validationSuccess from "@/public/images/validation_form.png";

const InsurancePolicyDetails = (props: { isShowOrderSuccess?: boolean }) => {
  const { isShowOrderSuccess = false } = props;
  return (
    <>
      <CustomNavbar text="مشخصات بیمه نامه" icon={<CarSvg />} />
      {isShowOrderSuccess && (
        <>
          <div className="w-full justify-center items-center flex mt-6 flex-col">
            <Image src={validationSuccess} alt="validation form" />
            <span className="text-[16px] font-medium mt-4">
              ثبت اطلاعات شما، با <span className="text-[#34A862]">موفقیت</span>{" "}
              انجام شد.
            </span>
          </div>
        </>
      )}

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
