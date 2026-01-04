'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';
import { useSeasonDrivers } from '@/hooks/SeasonDrivers';
import SeasonDriverCard from '../components/driver/SeasonDriverCard';
import SeasonChangeButton from '../components/common/SeasonChangeButton';

export default function Page() {
  const [opened, setOpened] = useState(false);
  const years = [2023, 2024, 2025, 2026];
  const [selectedYear, setSelectedYear] = useState(2025);

  const router = useRouter();
  const { data, isPending, isError } = useSeasonDrivers(selectedYear);
  return (
    <>
      <div className="mx-auto max-w-315">
        {/* <div className="relative">
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
        </div> */}
        <SeasonChangeButton
          opened={opened}
          setOpened={setOpened}
          years={years}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <section className="grid grid-cols-4 gap-5">
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
