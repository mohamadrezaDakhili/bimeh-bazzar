"use client";
import CustomButton from "@/components/common/button/CustomButton";
import InputField from "@/components/common/inputField";
import ErrorPopup from "@/components/popup/errorPopup";
import { orderComplition } from "@/services";
import { useStore } from "@/zustand/store/store";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import UserAddress from "../userAddress";
import { validationSchema } from "./validationSchema";

export default function RegisterForm() {
  const router = useRouter();
  const { activeAddress, setOwnerInfo, ownerInfo } = useStore();
  const searchParams = useSearchParams();
  const isOpenError = searchParams.get("error") === "open";
  const [isloadingRetry, setIsloadingRetry] = useState(false);
  const formikRef = useRef<FormikProps<{
    nationalCode: string;
    phone: string;
  }> | null>(null);

  const handleSubmit = async (
    values: { nationalCode: string; phone: string },
    { setFieldError }: FormikHelpers<{ nationalCode: string; phone: string }>
  ) => {
    setIsloadingRetry(true);
    try {
      const res = await fetch("/api/validate-national-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nationalCode: values.nationalCode }),
      });

      const data = await res.json();
      if (!data.valid) {
        setFieldError("nationalCode", "کد ملی وارد شده معتبر نمی‌باشد!");
        return;
      }

      await orderComplition({
        nationalId: values.nationalCode,
        phoneNumber: values.phone,
        addressId: activeAddress?.id,
      });

      setOwnerInfo({
        nationalId: values.nationalCode,
        phoneNumber: values.phone,
      });
      router.push("/order-success");
    } catch {
      router.push("?error=open", { scroll: false });
    } finally {
      setIsloadingRetry(false);
    }
  };

  return (
    <div>
      <h2 className="text-[16px] font-medium mb-[6px]">
        لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
      </h2>

      <Formik
        innerRef={formikRef}
        initialValues={{
          nationalCode: ownerInfo.nationalId,
          phone: ownerInfo.phoneNumber,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="flex flex-col">
            <InputField name="nationalCode" placeholder="کد ملی" />
            <InputField name="phone" placeholder="شماره تلفن همراه" />
            <UserAddress />
            <div className="w-full flex justify-end mt-[18px]">
              <CustomButton
                variant={
                  !formik.isValid || !formik.dirty || !activeAddress
                    ? "disabled"
                    : isloadingRetry
                    ? "loading"
                    : "selected"
                }
                className="!w-[131px]"
                type="submit"
                disabled={!formik.isValid || !formik.dirty || !activeAddress}
              >
                تایید و ادامه
              </CustomButton>
            </div>
          </Form>
        )}
      </Formik>

      <ErrorPopup
        isOpen={isOpenError}
        onRetry={() => formikRef.current?.submitForm()}
        onClose={() => router.push(window.location.pathname)}
        isLoading={isloadingRetry}
      />
    </div>
  );
}
