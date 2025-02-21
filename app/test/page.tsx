"use client";
import { fetchAddressData, orderComplition } from "@/services";
import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    fetchAddressData().then((res) => {
      console.log(res, "res");
      orderComplition({
        nationalId: "0017227828",
        phoneNumber: "09384010471",
        addressId: res[0].id,
      });
    });
  }, []);

  const testFunc = () => {
    orderComplition({
      nationalId: "0017227828",
      phoneNumber: "09384010471",
      addressId: "b796891f-801e-4408-a288-37f7a5eb11f6",
    });
  };
  return <div onClick={() => testFunc()}>Test</div>;
};

export default Test;
