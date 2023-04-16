import { create } from 'zustand';
import { UserStatus } from '../../convex/schema';

interface AppState {
  userStatus: UserStatus | undefined;
  setUserStatus: (status: UserStatus) => void;
}

export const useAppStore = create<AppState>((set) => ({
  userStatus: undefined,
  setUserStatus: (status) => set(() => ({ userStatus: status })),
}));
