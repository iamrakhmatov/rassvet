import { create } from "zustand";
import { UserRole } from "@/convex/schema";

type UserStore = {
  role?: UserRole;
  actions: {
    setUserRole: (role: UserRole) => void;
  };
};

const useUserStore = create<UserStore>((set) => ({
  role: undefined,
  actions: {
    setUserRole: (role) => set({ role }),
  },
}));

export const useUserRole = () => useUserStore((state) => state.role);
export const useUserActions = () => useUserStore((state) => state.actions);
