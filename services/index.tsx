import { baseURL } from "@/utils";

export async function fetchAddressData() {
  const res = await fetch(`${baseURL}/my-addresses/`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export type PostDataParams = {
  nationalId: string;
  phoneNumber: string;
  addressId?: string;
};

export const orderComplition = async (data: PostDataParams) => {
  const response = await fetch(`${baseURL}/order/completion/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
