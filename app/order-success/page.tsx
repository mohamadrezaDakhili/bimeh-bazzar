"use client";
import { InsurancePolicyDetails } from "@/components/home";
import Image from "next/image";
import React from "react";
import validationSuccess from "@/public/images/validation_form.png";
import CustomButton from "@/components/common/button/CustomButton";
import { useRouter } from "next/navigation";
const Success = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <div>
        <InsurancePolicyDetails isShowOrderSuccess={true} />
      </div>
      <div className="flex justify-end px-4 py-3">
        <CustomButton
          variant="selected"
          className="w-[140px]"
          onClick={handleBack}
        >
          بازگشت
        </CustomButton>
      </div>
    </div>
  );
};

export default Success;
