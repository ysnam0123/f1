'use client';
import graph from '/public/icons/graph.svg';
import pitstop from '/public/icons/pitstop.svg';
import retirement from '/public/icons/retirement.svg';
import overview from '/public/icons/overview.svg';
import { useState } from 'react';
import Image from 'next/image';
import Summary from './summary/Summary';
import Position from './Position';
import PitStop from './PitStop';
import Events from './Events';
import { WeatherSessionSummary } from '@/app/api/f1/race/weather';
import { Pit } from '@/app/api/f1/race/pit';
import { Stints } from '@/app/api/f1/race/stints';
import { RaceControl } from '@/app/api/f1/race/raceControl';

export default function ResultStatstics({
  totalLaps,
  weather,
  pit,
  stints,
  raceControl,
}: {
  totalLaps: number;
  weather: WeatherSessionSummary;
  pit: Pit[];
  stints: Stints[];
  raceControl: RaceControl[];
}) {
  const [selectedTab, setSelectedTab] = useState('전체 요약');
  const tabs = [
    { label: '전체 요약', icon: overview },
    { label: '포지션', icon: graph },
    { label: '피트 스탑', icon: pitstop },
    { label: '이벤트', icon: retirement },
  ];
  const renderTabContent = () => {
    switch (selectedTab) {
      case '전체 요약':
        return (
          <Summary
            totalLaps={totalLaps}
            weather={weather}
            SafetyCarNumber={deployCount}
            raceControl={raceControl}
          />
        );
      case '포지션':
        return <Position />;
      case '피트 스탑':
        return <PitStop />;
      case '이벤트':
        return <Events />;
      default:
        return null;
    }
  };

  const deployCount = raceControl.filter(
    (e) => e.category === 'SafetyCar' && e.message === 'SAFETY CAR DEPLOYED',
  ).length;
  console.log(deployCount);

  return (
    <>
      <section className="select-none">
        <h1
          className="mb-12.5 text-[40px]"
          style={{ fontFamily: 'PartialSans' }}
        >
          STATSTICS
        </h1>
        <div className="min-h-100 rounded-4xl bg-[#1A1A1A]">
          <ul className="flex items-center">
            {tabs.map((tab) => (
              <li
                className={`${selectedTab === tab.label ? 'border-b-2 border-[#BFBFBF]' : ''} flex h-13 w-full max-w-71.25 cursor-pointer items-center justify-center gap-1 hover:bg-[#393939]`}
                key={tab.label}
                onClick={() => setSelectedTab(tab.label)}
              >
                <Image src={tab.icon} alt="icon" height={30} width={30} />
                <p
                  style={{ fontFamily: 'Pretendard' }}
                  className="text-[18px] font-semibold"
                >
                  {tab.label}
                </p>
              </li>
            ))}
          </ul>
          <div className="p-4">{renderTabContent()}</div>
        </div>
      </section>
    </>
  );
}
