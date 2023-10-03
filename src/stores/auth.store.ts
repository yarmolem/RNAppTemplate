import {create} from 'zustand';

import type {User} from '@/interface/user';

export interface AuthStateValues {
  user: User | null;
  isSignout: boolean;
  isLoading: boolean;
}

export interface AuthState extends AuthStateValues {
  logoutAction: () => void;
  loginAction: (payload: User) => void;
  setLoadingAction: (isLoading: boolean) => void;
}

const initialState: AuthStateValues = {
  user: null,
  isLoading: true,
  isSignout: false,
};

export const useAuthStore = create<AuthState>(set => ({
  ...initialState,
  loginAction: user => set({user, isSignout: false}),
  logoutAction: () => set({...initialState, isSignout: true}),
  setLoadingAction: isLoading => set({isLoading}),
}));
