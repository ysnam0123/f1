'use client';

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
                <p className="text-[20px] tracking-wide text-neutral-500 uppercase">
                  {team.slug}
                </p>
                <p className="text-[20px] tracking-wide text-neutral-500 uppercase">
                  - 2025 시즌
                </p>
              </div>
            </div>
            <Image src={team.logo} alt={'logo'} width={120} height={120} />
          </div>
          <div className="py-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatCard
                label="Constructors' Ranking"
                value={`P${team.name}`}
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
          </div>
          <div className="border-t border-neutral-800 py-12">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">
              Drivers
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {team.drivers.map((driver) => (
                <TeamDriverCard
                  key={driver.number}
                  name={driver.name}
                  number={driver.number}
                  imageUrl={driver.image}
                  teamColor={team.colorFrom}
                />
              ))}
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, ${team.colorFrom}, ${team.colorTo})`,
            }}
            className="mb-12.5 flex h-76 w-full justify-between rounded-4xl px-15 py-10"
          >
            <Image
              src={`/cars/${team.slug}.png`}
              alt="car"
              width={750}
              height={224}
            />
            <div className="flex shrink-0 flex-col items-center justify-center">
              <Image src={team.logo} alt={'logo'} width={150} height={150} />
              <p
                className="text-center text-[30px] text-[#f1f1f1]"
                style={{ fontFamily: 'PartialSans' }}
              >
                {team.name}
              </p>
            </div>
          </div>
          <h1 className="mb-7.5 text-[30px] font-bold">드라이버</h1>
          <section className="mb-20 flex justify-between">
            {team.drivers.map((driver) => (
              <div
                key={driver.number}
                className="flex h-63 w-137.5 items-center justify-center gap-20 rounded-4xl py-5"
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${team.colorFrom}, ${team.colorTo})`,
                }}
              >
                <div className="flex h-full justify-between">
                  <div className="flex flex-col">
                    <div className="mb-auto">
                      <p className="mb-2 text-[22px] font-bold">
                        {driver.name}
                      </p>
                      <p
                        className="text-[22px]"
                        style={{ fontFamily: 'RiaSans', fontWeight: 700 }}
                      >
                        {driver.number}
                      </p>
                    </div>
                    <div>flag</div>
                  </div>
                </div>
                <Image
                  src={driver.image}
                  alt={driver.name}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </section>
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
