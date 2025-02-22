import { baseURL } from "@/utils";

export async function fetchAddressData() {
  const res = await fetch(`${baseURL}/my-addresses/`, {
    headers: {
      "Content-Type": "application/json",
      Connection: "keep-alive",
    },
  });
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
      Accept: "*/*",
      Connection: "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
