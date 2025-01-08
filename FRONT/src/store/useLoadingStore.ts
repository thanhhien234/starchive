import { create } from 'zustand';

type LoadingState = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
};

const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: true,
  setIsLoading: (state) => set({ isLoading: state }),
}));

export default useLoadingStore;
