"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//  Phone number validation method
const isValidPhoneNumber = (phone: string) => /^(09\d{9}|9\d{9})$/.test(phone);

//  Validation schema using `Yup`
const validationSchema = Yup.object({
  nationalCode: Yup.string()
    .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
    .required("کدملی وارد شده معتبر نیست."),
  phone: Yup.string()
    .test("isValidPhone", "شماره تلفن همراه معتبر نیست", (value) =>
      isValidPhoneNumber(value || "")
    )
    .required("شماره موبایل الزامی است"),
});

export default function RegisterForm() {
  const handleSubmit = async (values: {
    nationalCode: string;
    phone: string;
  }) => {
    console.log(" Form values:", values);

    //  Send request to national code validation API
    try {
      const res = await fetch("/api/validate-national-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nationalCode: values.nationalCode }),
      });

      const data = await res.json();
      if (!data.valid) {
        alert("❌ Invalid national code!");
        return;
      }

      alert("✅ Registration successful!");
    } catch (error) {
      alert("❌ An error occurred!");
    }
  };

  return (
    <div className="py-6 px-[19px]">
      <h2 className="text-[16px] font-medium mb-[6px]">
        لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
      </h2>

      <Formik
        initialValues={{ nationalCode: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="flex flex-col">
            {/*  National code field */}
            <div className="text-[#757575] relative">
              <Field
                name="nationalCode"
                className={`w-full p-2 border border-[#B4B4B4] h-[48px] placeholder:text-[#757575]
            ${
              errors.nationalCode && touched.nationalCode
                ? "border-red-500"
                : "border-gray-300"
            }`}
                placeholder="کد ملی"
              />

              <div className="h-[28px]">
                <ErrorMessage
                  name="nationalCode"
                  component="p"
                  className="text-red-500 text-sm pt-[4px]"
                />
              </div>
            </div>
            {/*  Phone number field */}
            <div className="text-[#757575] ">
              <Field
                name="phone"
                className={`w-full p-2 border border-[#B4B4B4] h-[48px] placeholder:text-[#757575]
            ${
              errors.phone && touched.phone
                ? "border-red-500"
                : "border-gray-300"
            }`}
                placeholder="شماره تلفن همراه"
              />
              <div className="h-[28px]">
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-500 text-sm pt-[4px]"
                />
              </div>
            </div>

            {/*  Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
