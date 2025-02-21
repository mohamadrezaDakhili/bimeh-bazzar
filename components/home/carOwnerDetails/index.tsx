import CustomNavbar from "@/components/common/customNavbar";
import CarSvg from "@/components/svg/carSvg";
import RegisterForm from "./PersonalInformation/PersonalInformationForm";

const CarOwnerDetails = () => {
  return (
    <>
      <CustomNavbar text="مشخصات مالک خودرو" icon={<CarSvg />} />
      <div className="py-6 px-5">
        <RegisterForm />
      </div>
    </>
  );
};

export default CarOwnerDetails;
