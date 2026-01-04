'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

export default function SeasonChangeButton({
  opened,
  setOpened,
  years,
  selectedYear,
  setSelectedYear,
}: {
  opened: boolean;
  setOpened: (state: boolean) => void;
  years: number[];
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}) {
  return (
    <>
      <div className="relative z-30">
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
    </>
  );
}
