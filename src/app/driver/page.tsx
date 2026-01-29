'use client';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { useSeasonDrivers } from '@/hooks/SeasonDrivers';
import SeasonDriverCard from '../components/driver/SeasonDriverCard';
// import SeasonChangeButton from '../components/common/SeasonChangeButton';
import { teams2026 } from '@/images/team';

export default function Page() {
  // const [opened, setOpened] = useState(false);
  // const years = [2023, 2024, 2025, 2026];
  const [selectedYear, setSelectedYear] = useState(2026);
  // const { data, isPending, isError } = useSeasonDrivers(selectedYear);
  return (
    <>
      <div className="mx-auto w-full px-5 pt-10 sm:px-10 md:px-15">
        <h1
          style={{ fontFamily: 'Paperlolgy', fontWeight: 700 }}
          className="mb-5 text-[20px] sm:mb-0 sm:pb-10"
        >
          2026 시즌 드라이버
        </h1>
        {/* <SeasonChangeButton
          opened={opened}
          setOpenedAction={setOpened}
          years={years}
          selectedYear={selectedYear}
          setSelectedYearAction={setSelectedYear}
        /> */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teams2026.map((team) =>
            team.drivers.map((driver) => (
              <SeasonDriverCard
                teamData={team}
                key={driver.driver_id}
                year={selectedYear}
                driver={driver}
              />
            )),
          )}
          {/* {data &&
            !isPending &&
            data.map((d) => (
              <SeasonDriverCard
                key={d.driver_profile_id}
                year={selectedYear}
                driver={d}
              />
            ))} */}
        </section>
      </div>
    </>
  );
}
