"use client";
import { useSearchParams } from "next/navigation";
import ChooseAddress from "./chooseAddress";
import RemoveAddress from "./removeAddress";

const BottomSheetData = () => {
  const searchParams = useSearchParams();
  const isOpenRemoveAddress = searchParams.get("remove") !== null;

  return <>{isOpenRemoveAddress ? <RemoveAddress /> : <ChooseAddress />}</>;
};

export default BottomSheetData;
