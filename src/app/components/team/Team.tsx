'use client';
import { upgradeHeadshotQuality } from '@/hooks/UpgradeHeadShotQuality';
import { TeamSeasonRankingView } from '@/types/Ranking';
import { Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface TeamProps {
  team: TeamSeasonRankingView;
}

export default function Team({ team }: TeamProps) {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(`/team/${team.team_slug}`)}
        className="relative cursor-pointer overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700"
      >
        <div
          className="absolute top-0 right-0 left-0 h-1"
          style={{ backgroundColor: team.team_colour }}
        />
        {/* Header: Position & Logo */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-md font-mono text-[19px]"
              style={{
                backgroundColor: `${team.team_colour}15`,
                color: team.team_colour,
              }}
            >
              P{team.rank}
            </div>

            <div className="flex h-19 w-19 items-center justify-center rounded-lg bg-zinc-800/50 p-2">
              <Image
                src={team.main_logo}
                alt={`${team.main_logo} logo`}
                width={74}
                height={74}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Trophy className="h-4 w-4" />
            <span className="font-mono text-xl text-white">
              {team.team_total_points}
            </span>
          </div>
        </div>
        {/* Team name */}
        <div className="mb-4 flex items-center justify-between sm:flex-col md:flex-col lg:flex-row">
          <div className="mr-auto flex flex-col">
            <h3 className="mb-1 text-[22px] font-semibold text-white">
              {team.team_name}
            </h3>
            <p className="text-[16px] tracking-wider text-zinc-500 uppercase">
              {team.team_kr_name}
            </p>
          </div>
          {/* 자동차 */}
          <Image
            src={team.car_img}
            alt="mcLarenCar"
            width={415}
            height={40}
            className="z-20 hidden sm:block"
          />
        </div>
        {/* Drivers */}
        <div className="flex items-center gap-3 border-t border-zinc-800 pt-4">
          <Users className="h-4 w-4 text-zinc-600" />
          <div className="z-30 flex flex-1 items-center gap-4">
            {team.drivers.map((driver) => (
              <div
                key={driver.driver_id}
                className="group flex items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/driver/${driver.driver_id}`);
                }}
              >
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 p-2"
                  style={{
                    borderLeft: `2px solid ${team.team_colour}`,
                  }}
                >
                  {driver.driver_number}
                </div>
                <p
                  className="transition-all duration-100 ease-in group-hover:border-b"
                  style={{ borderColor: team.team_colour }}
                >
                  {driver.kr_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="z-20 flex items-center">
          <div className="flex gap-20"></div>
        </div>
      </div>
    </>
  );
}
