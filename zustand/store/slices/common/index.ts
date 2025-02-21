import { StateCreator } from "zustand";
import { ICommonSlice } from "./interface";

export const commonSlice: StateCreator<ICommonSlice> = (set) => ({
  activeAddress: undefined,
  ownerInfo:{
    nationalId: "",
    phoneNumber: "",
  },
  //state handler functions
  setActiveAddress: (activeAddress) => {
    set({
      activeAddress: activeAddress,
    });
  },
  setOwnerInfo: (ownerInfo) => {
    set({
      ownerInfo: ownerInfo,
    });
  },
});
