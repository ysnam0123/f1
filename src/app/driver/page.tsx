'use client';
import { teams } from '@/data/teams';
import DriverListCard from '../components/driver/DriverListCard';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/supabase/client';
import { ChevronDown } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';
import { useSeasonDrivers } from '@/hooks/SeasonDrivers';
import SeasonDriverCard from '../components/driver/SeasonDriverCard';

export default function Page() {
  const [opened, setOpened] = useState(false);
  const years = [2023, 2024, 2025, 2026];
  const [selectedYear, setSelectedYear] = useState(2025);
  const router = useRouter();
  const result = teams.flatMap((team) =>
    team.drivers.map((driver) => ({
      driver,
      team,
    })),
  );
  const { data, isPending, isError } = useSeasonDrivers(selectedYear);
  return (
    <>
      <div className="mx-auto max-w-315">
        {/* 시즌 변경 버튼*/}
        <div className="relative">
          <button
            onClick={() => setOpened(!opened)}
            className="mb-10 flex h-12.5 w-36 cursor-pointer items-center justify-center gap-1 rounded-[10px] border border-white text-[20px] font-bold hover:bg-[#4b4b4b]"
          >
            <span>{selectedYear}</span>
            <ChevronDown
              className={`transition-transform ${opened ? 'rotate-180' : ''}`}
            />
          </button>
          {opened && (
            <AnimatedContent
              distance={3}
              direction="vertical"
              reverse={true}
              duration={0.6}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0}
              delay={0}
              className="absolute top-full"
            >
              <ul className="w-36 rounded-[10px] border border-white bg-black text-center text-[20px] font-bold">
                {years.map((year) => (
                  <li
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setOpened(false);
                    }}
                    className="flex h-12.5 cursor-pointer items-center justify-center hover:bg-[#464646]"
                  >
                    {year}
                  </li>
                ))}
              </ul>
            </AnimatedContent>
          )}
        </div>
        <section className="grid grid-cols-4 gap-5">
          {result.map((data) => (
            <DriverListCard
              key={data.driver.driverSlug}
              team={data.team}
              driver={data.driver}
            />
          ))}
          {data &&
            !isPending &&
            data.map((d) => (
              <SeasonDriverCard key={d.driver_profile_id} driver={d} />
            ))}
        </section>
      </div>
    </>
  );
}
