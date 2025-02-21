import { create } from "zustand";
import { persist } from "zustand/middleware"; // Import persist middleware
import { commonSlice } from "./slices";
import { ICommonSlice } from "./slices/interface";

export type IUseStore = ICommonSlice 

export const useStore = create<IUseStore>()(
  persist(
    (...a) => ({
      ...commonSlice(...a),
    }),
    {
      name: "zustand-storage", // Name of the storage key (you can change this to any string)
      partialize: (state) => ({
        // activeAddress: state.activeAddress,
        // Add any other slices you want to persist
      }),
      // Optionally, you can specify the storage type:
      // storage: createJSONStorage(() => sessionStorage), // For sessionStorage instead of localStorage
    }
  )
);
