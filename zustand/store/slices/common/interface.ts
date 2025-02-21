import { IUserAddressProps } from "@/components/home/carOwnerDetails/userAddress/interface";

export interface ICommonSlice {
  activeAddress: IUserAddressProps | undefined;
  ownerInfo:{
    nationalId: string;
    phoneNumber: string;
  }
  setActiveAddress: (activeAddress: IUserAddressProps) => void;
  setOwnerInfo: (ownerInfo: { nationalId: string; phoneNumber: string;}) => void;
}
