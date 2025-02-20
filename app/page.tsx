import CustomNavbar from "@/components/common/navbar";
import CarSvg from "@/components/svg/carSvg";
import Image from "next/image";

export default function Home() {
  return <CustomNavbar text="مشخصات بیمه نامه" icon={<CarSvg />} />;
}
