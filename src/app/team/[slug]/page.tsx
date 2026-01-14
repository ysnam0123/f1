'use client';

import { SeasonPerformance } from '@/app/components/team/SeasonPerformance';
import { StatCard } from '@/app/components/team/StatCard';
import { TeamDriverCard } from '@/app/components/team/TeamDriverCard';
import { teams } from '@/data/teams';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const params = useParams<{ slug: string }>();
  const team = teams.find((t) => t.slug === params.slug);
  const [isHovered, setIsHovered] = useState(false);

  const dummyPerformanceData = [
    { round: 1, points: 43, cumulativePoints: 43 },
    { round: 2, points: 37, cumulativePoints: 80 },
    { round: 3, points: 51, cumulativePoints: 131 },
    { round: 4, points: 35, cumulativePoints: 166 },
    { round: 5, points: 48, cumulativePoints: 214 },
    { round: 6, points: 40, cumulativePoints: 254 },
    { round: 7, points: 44, cumulativePoints: 298 },
    { round: 8, points: 33, cumulativePoints: 331 },
    { round: 9, points: 52, cumulativePoints: 383 },
    { round: 10, points: 38, cumulativePoints: 421 },
    { round: 11, points: 41, cumulativePoints: 462 },
    { round: 12, points: 39, cumulativePoints: 501 },
    { round: 13, points: 47, cumulativePoints: 548 },
    { round: 14, points: 36, cumulativePoints: 584 },
    { round: 15, points: 45, cumulativePoints: 629 },
    { round: 16, points: 42, cumulativePoints: 671 },
    { round: 17, points: 49, cumulativePoints: 720 },
    { round: 18, points: 38, cumulativePoints: 758 },
    { round: 19, points: 50, cumulativePoints: 808 },
    { round: 20, points: 52, cumulativePoints: 860 },
  ];

  return (
    <>
      {team && (
        <div className="mx-auto max-w-285">
          <div className="relative flex items-center justify-between border-b border-neutral-800 pb-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-5xl tracking-tight">{team.krName}</h1>
                <div
                  className="mt-2 h-1 w-16"
                  style={{ backgroundColor: team.colorFrom }}
                />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[20px] tracking-wide text-[#5f5f5f] uppercase">
                  {team.slug}
                </p>
                <p className="text-[20px] tracking-wide text-[#5f5f5f] uppercase">
                  - 2025 시즌
                </p>
              </div>
            </div>
            <Image src={team.logo} alt={'logo'} width={120} height={120} />
          </div>
          <div className="grid grid-cols-1 gap-4 py-12 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Constructors' Ranking"
              value={`P 1`}
              teamColor={team.colorFrom}
            />
            <StatCard
              label="Total Points"
              value={2}
              teamColor={team.colorFrom}
            />
            <StatCard
              label="Wins / Podiums"
              value={`${2} / ${5}`}
              teamColor={team.colorFrom}
            />
            <StatCard
              label="Drivers"
              value={team.drivers.join(' • ')}
              teamColor={team.colorFrom}
            />
          </div>
          <div className="border-t border-neutral-800 py-12">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">
              Drivers
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {team.drivers.map((driver) => (
                <TeamDriverCard
                  key={driver.number}
                  name={driver.krName}
                  number={driver.number}
                  imageUrl={driver.image}
                  teamColor={team.colorFrom}
                />
              ))}
            </div>
          </div>
          <SeasonPerformance
            data={dummyPerformanceData}
            teamColor={team.colorFrom}
          />
          <section className="min-h-300 w-full rounded-[30px] bg-[#1C1C25] px-10 py-7.5">
            <h1
              className="mb-12.5 text-[40px]"
              style={{ fontFamily: 'PartialSans' }}
            >
              2025 시즌
            </h1>
          </section>
        </div>
      )}
    </>
  );
}
