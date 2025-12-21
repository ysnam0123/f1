'use client';
import { ChevronDown } from 'lucide-react';
import GrandPrixCard from '../components/season/GrandPrixCard';
import SeasonHeroBox from '../components/season/SeasonHeroBox';
import { useState } from 'react';

export default function Page() {
  const [opened, setOpened] = useState(true);
  const [selectedYear, setSelectedYear] = useState<'2025' | '2026'>('2025');

  return (
    <>
      <main className="min-h-screen">
        <SeasonHeroBox />
        <section className="mx-auto w-full max-w-[1400px]">
          <div className="relative">
            <button
              onClick={() => setOpened(!opened)}
              className="mb-10 flex h-[50px] w-[144px] cursor-pointer items-center justify-center gap-1 rounded-[10px] border-1 border-white text-[20px] font-bold hover:bg-[#4b4b4b]"
            >
              <span>{selectedYear}</span>
              <ChevronDown
                className={`transition-transform ${opened ? 'rotate-180' : ''}`}
              />
            </button>
            {opened && (
              <ul className="absolute top-full w-[144px] rounded-[10px] border-1 border-white bg-black text-center text-[20px] font-bold">
                <li
                  onClick={() => {
                    setSelectedYear(selectedYear === '2025' ? '2026' : '2025');
                    setOpened(false);
                  }}
                  className="flex h-[50px] cursor-pointer items-center justify-center hover:bg-[#464646]"
                >
                  {selectedYear === '2025' ? '2026' : '2025'}
                </li>
              </ul>
            )}
          </div>
          <div className="grid grid-cols-3 gap-10">
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
          </div>
        </section>
      </main>
    </>
  );
}
