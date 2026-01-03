import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GrandPrix {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

export const useYearStore = create<GrandPrix>()(
  persist(
    (set) => ({
      selectedYear: 2025,
      setSelectedYear: (year) => set({ selectedYear: year }),
    }),
    {
      name: 'grand-prix-year',
    },
  ),
);
