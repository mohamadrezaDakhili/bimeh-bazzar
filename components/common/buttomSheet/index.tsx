"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import CustomButton from "../button/CustomButton";

interface BottomSheetProps {
  children: React.ReactNode;
  title: string;
}

export default function BottomSheet({ children, title }: BottomSheetProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("sheet") === "open";

  const closeSheet = () => {
    router.replace("/", { scroll: false });
  };

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
          <span className="text-base font-medium">{title}</span>
          <button
            className="text-[#C2C2C2] text-lg font-medium"
            onClick={closeSheet}
            type="button"
          >
            ✕
          </button>
        </header>
        {children}
      </div>
    </>
  );
}
