"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CustomCheckbox from "../checkbox";

export default function BottomSheet() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isOpen = searchParams.get("sheet") === "open"; // بررسی باز بودن شیت

  // تابع برای بستن شیت
  const closeSheet = () => {
    router.replace("/", { scroll: false });
  };

  // بستن با کلید ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSheet();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSheet}
      />

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white
        transition-transform duration-300 max-w-[360px]
          ${isOpen ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <header className="flex justify-between py-4 border-b border-[#E0E0E0] px-3">
          <span className="text-base font-medium">انتخاب آدرس</span>
          <button
            className="text-[#C2C2C2] text-lg font-medium"
            onClick={closeSheet}
          >
            ✕
          </button>
        </header>
        <section className="px-3 py-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <CustomCheckbox label="آدرس شماره 1" />
              <button
                className="text-[#FFA5A5] text-sm font-medium"
                onClick={() => {}}
              >
                ✕
              </button>
            </div>
            <div className="mx-6">
              <p className="text-[12px] font-normal text-[#757575]">
                فارس، شیراز، خیابان جمهوری، بالاتر از فلان، پلاک ۶، واحد ۲۳۴
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <CustomCheckbox label="آدرس شماره 1" />
              <button
                className="text-[#FFA5A5] text-sm font-medium"
                onClick={() => {}}
              >
                ✕
              </button>
            </div>
            <div className="mx-6">
              <p className="text-[12px] font-normal text-[#757575]">
                فارس، شیراز، خیابان جمهوری، بالاتر از فلان، پلاک ۶، واحد ۲۳۴
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
