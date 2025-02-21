import { NextResponse } from "next/server";

function isValidNationalCode(code: string): boolean {
  if (!/^\d{10}$/.test(code)) return false;
  const digits = code.split("").map(Number);
  const checkDigit = digits.pop()!;
  const sum = digits.reduce((acc, digit, i) => acc + digit * (10 - i), 0);
  const remainder = sum % 11;
  return remainder < 2 ? checkDigit === remainder : checkDigit === 11 - remainder;
}

export async function POST(req: Request) {
  const { nationalCode } = await req.json();
  if (!nationalCode || !isValidNationalCode(nationalCode)) {
    return NextResponse.json({ valid: false, message: "کد ملی نامعتبر است" }, { status: 400 });
  }
  return NextResponse.json({ valid: true, message: "کد ملی معتبر است" });
}
