'use client';

import { useYearStore } from '@/store/YearStore';
import { useDriverRankingData } from '../api/f1/ranking/driverRanking';
import { useState } from 'react';
import SeasonChangeButton from '../components/common/SeasonChangeButton';

export default function Page() {
  const [opened, setOpened] = useState(false);
  const selectedYear = useYearStore((s) => s.selectedYear);
  const setSelectedYear = useYearStore((s) => s.setSelectedYear);
  const years = [2023, 2024, 2025, 2026];
  const { data: DriverRanking, isPending } = useDriverRankingData(selectedYear);
  if (DriverRanking) {
    console.log('드라이버랭킹:', DriverRanking);
  }

  return (
    <>
      <section className="w-full sm:px-10 lg:px-15">
        <SeasonChangeButton
          opened={opened}
          setOpenedAction={setOpened}
          years={years}
          selectedYear={selectedYear}
          setSelectedYearAction={setSelectedYear}
        />
        <h1>page Component</h1>
      </section>
    </>
  );
}
