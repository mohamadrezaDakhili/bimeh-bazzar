import { IUserAddressProps } from "@/components/home/carOwnerDetails/userAddress/interface";

export interface ICommonSlice {
  activeAddress: IUserAddressProps | undefined;
  setActiveAddress: (activeAddress: IUserAddressProps) => void;
}
