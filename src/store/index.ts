import { create } from 'zustand';

interface AppState {
  isLoggedIn: boolean;
  setLoginStatus: (status: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLoggedIn: false,
  setLoginStatus: (status) => set(() => ({ isLoggedIn: status })),
}));
