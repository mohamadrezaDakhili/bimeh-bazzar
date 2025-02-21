"use client";
import CustomButton from "@/components/common/button/CustomButton";
import Loading from "@/components/common/loading";
import { orderComplition } from "@/services";
import { useStore } from "@/zustand/store/store";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import UserAddress from "../userAddress";
import { validationSchema } from "./validationSchema";

export default function RegisterForm() {
  const { activeAddress } = useStore();

  const handleSubmit = async (
    values: { nationalCode: string; phone: string },
    formikHelpers: FormikHelpers<{ nationalCode: string; phone: string }>
  ) => {
    const { setFieldError } = formikHelpers;
    //  Send request to national code validation API
    try {
      const res = await fetch("/api/validate-national-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nationalCode: values.nationalCode }),
      });

      const data = await res.json();
      if (!data.valid) {
        // Instead of showing alert, set the error message
        setFieldError("nationalCode", "کد ملی وارد شده معتبر نمی‌باشد!");
        return;
      }
      orderComplition({
        nationalId: values.nationalCode,
        phoneNumber: values.phone,
        addressId: activeAddress?.id,
      }).then((res) => {
        console.log(res);
      });
    } catch {
      alert("❌ An error occurred!");
    }
  };

  const formFields = [
    {
      name: "nationalCode",
      placeholder: "کد ملی",
    },
    { name: "phone", placeholder: "شماره تلفن همراه" },
  ];

  return (
    <div>
      <h2 className="text-[16px] font-medium mb-[6px]">
        لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
      </h2>
      <Formik
        initialValues={{ nationalCode: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik: FormikProps<{ nationalCode: string; phone: string }>) => {
          return (
            <Form className="flex flex-col">
              {formFields.map(({ name, placeholder }) => (
                <div key={name} className="text-[#757575] relative">
                  <Field
                    name={name}
                    placeholder={placeholder}
                    className={`w-full p-2 border h-[48px] placeholder:text-[#757575] text-sm text-[#404040]
                ${
                  formik.errors[name as keyof typeof formik.errors] &&
                  formik.touched[name as keyof typeof formik.touched]
                    ? "border-[#E61F10] text-[#E61F10] placeholder:text-[#E61F10] "
                    : "border-[#B4B4B4]"
                }`}
                  />
                  <div className="h-[28px]">
                    <ErrorMessage
                      name={name}
                      component="p"
                      className="text-[#E61F10] text-sm pt-[4px]"
                    />
                  </div>
                </div>
              ))}
              <UserAddress />
              {/* Submit button */}
              <div className="w-full flex justify-end mt-[18px]">
                <CustomButton
                  variant={
                    formik.isSubmitting ||
                    !formik.isValid ||
                    !formik.dirty ||
                    !activeAddress
                      ? "disabled"
                      : "selected"
                  }
                  className="!w-[131px]"
                  type="submit"
                  disabled={
                    formik.isSubmitting ||
                    !formik.isValid ||
                    !formik.dirty ||
                    !activeAddress
                  }
                >
                  {formik.isSubmitting ? <Loading /> : "تایید و ادامه"}
                </CustomButton>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
