import { baseURL } from "@/utils";

export async function fetchAddressData() {
  const res = await fetch(`${baseURL}/my-addresses/`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
