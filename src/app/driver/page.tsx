'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSeasonDrivers } from '@/hooks/SeasonDrivers';
import SeasonDriverCard from '../components/driver/SeasonDriverCard';
import SeasonChangeButton from '../components/common/SeasonChangeButton';

export default function Page() {
  const [opened, setOpened] = useState(false);
  const years = [2023, 2024, 2025, 2026];
  const [selectedYear, setSelectedYear] = useState(2026);
  const { data, isPending, isError } = useSeasonDrivers(selectedYear);
  return (
    <>
      <div className="mx-auto w-full px-5 sm:px-30">
        <SeasonChangeButton
          opened={opened}
          setOpenedAction={setOpened}
          years={years}
          selectedYear={selectedYear}
          setSelectedYearAction={setSelectedYear}
        />
        <section className="grid grid-cols-4 gap-5">
          {data &&
            !isPending &&
            data.map((d) => (
              <SeasonDriverCard
                key={d.driver_profile_id}
                year={selectedYear}
                driver={d}
              />
            ))}
        </section>
      </div>
    </>
  );
}
