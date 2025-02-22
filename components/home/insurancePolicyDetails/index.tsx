import CustomNavbar from "@/components/common/customNavbar";
import CarSvg from "@/components/svg/carSvg";
import Image from "next/image";
import carPlate from "@/public/images/car_plate.png";
import { staticData } from "./STATIC_DATA.ts";
import { DashedText } from "@/components/common/dashedText";
import validationSuccess from "@/public/images/validation_form.png";

const InsurancePolicyDetails = ({
  isShowOrderSuccess = false,
}: {
  isShowOrderSuccess?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <CustomNavbar text="مشخصات بیمه نامه" icon={<CarSvg />} />
      {isShowOrderSuccess && (
        <div className="flex flex-col items-center mt-6">
          <Image
            src={validationSuccess}
            alt="ثبت موفق اطلاعات بیمه"
            priority
            width={60}
            height={67}
          />
          <span className="text-[16px] font-medium mt-4">
            ثبت اطلاعات شما، با <span className="text-[#34A862]">موفقیت</span>{" "}
            انجام شد.
          </span>
        </div>
      )}

      <div className="pt-6 pb-8 flex flex-col items-center">
        <div className="flex flex-col gap-6">
          <Image
            src={carPlate}
            alt="پلاک خودرو"
            priority
            width={280}
            height={50}
          />
          <div className="gap-2 flex flex-col">
            {staticData.map(({ start, end }, index) => (
              <DashedText
                key={`${start}-${end}-${index}`}
                start={start}
                end={end}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePolicyDetails;
