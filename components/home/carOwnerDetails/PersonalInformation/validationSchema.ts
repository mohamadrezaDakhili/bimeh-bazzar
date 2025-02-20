import * as Yup from "yup";

//  Phone number validation method
const isValidPhoneNumber = (phone: string) => /^(09\d{9}|9\d{9})$/.test(phone);


//  Validation schema using `Yup`
export const validationSchema = Yup.object({
    nationalCode: Yup.string()
      .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
      .required("کدملی وارد شده معتبر نیست."),
    phone: Yup.string()
      .test("isValidPhone", "شماره تلفن همراه معتبر نیست", (value) =>
        isValidPhoneNumber(value || "")
      )
      .required("شماره موبایل الزامی است"),
  });