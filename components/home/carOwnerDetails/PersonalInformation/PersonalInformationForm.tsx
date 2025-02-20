"use client";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { validationSchema } from "./validationSchema";

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

  const formFields = [
    {
      name: "nationalCode",
      placeholder: "کد ملی",
    },
    { name: "phone", placeholder: "شماره تلفن همراه" },
  ];

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
        {(formik: FormikProps<{ nationalCode: string; phone: string }>) => (
          <Form className="flex flex-col">
            {formFields.map(({ name, placeholder }) => (
              <div key={name} className="text-[#757575] relative">
                <Field
                  name={name}
                  placeholder={placeholder}
                  className={`w-full p-2 border h-[48px] placeholder:text-[#757575] 
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

            {/* Submit button */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
