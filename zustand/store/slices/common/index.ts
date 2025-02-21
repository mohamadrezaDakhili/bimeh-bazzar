import { StateCreator } from "zustand";
import { ICommonSlice } from "./interface";

export const commonSlice: StateCreator<ICommonSlice> = (set) => ({
  activeAddress: undefined,
  //state handler functions
  setActiveAddress: (activeAddress) => {
    set({
      activeAddress: activeAddress,
    });
  },
});
