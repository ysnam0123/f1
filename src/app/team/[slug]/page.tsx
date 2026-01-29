'use client';

import SeasonChangeButton from '@/app/components/common/SeasonChangeButton';
import { SeasonPerformance } from '@/app/components/team/SeasonPerformance';
import { StatCard } from '@/app/components/team/StatCard';
import { TeamDriverCard } from '@/app/components/team/TeamDriverCard';
import TeamStats from '@/app/components/team/TeamStats';
import { useTeamDetailData } from '@/hooks/detailPage/TeamDetail';
import { teams2026 } from '@/images/team';
import { findHeadshot } from '@/utils/findHeadShot';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export default function Page() {
  const params = useParams<{ slug: string }>();
  const teamSlug = params.slug;
  const { data: teamDetailData, isLoading: teamDetailLoading } =
    useTeamDetailData(teamSlug);

  const seasonYears = useMemo<number[]>(
    () => teamDetailData?.seasons.map((s) => s.year) ?? [],
    [teamDetailData?.seasons],
  );
  const [opened, setOpened] = useState(false);
  const [rdOpened, setRdOpened] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2026);
  useEffect(() => {
    console.log(seasonYears[seasonYears.length - 1]);
  }, [seasonYears]);
  const team = teams2026.find((t) => t.team_slug === params.slug);
  const seasonData = teamDetailData?.seasons.find(
    (data) => data.year === selectedYear,
  );
  const seasonMainDrivers =
    seasonData?.drivers.filter((driver) => driver.is_main) ?? [];
  const seasonReserveDrivers =
    seasonData?.drivers.filter((driver) => driver.is_main === false) ?? [];

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
  const performanceWithCumulative = useMemo(() => {
    if (!seasonData?.performance) return [];

    let cumulative = 0;

    return seasonData.performance.map((item) => {
      cumulative += item.points;

      return {
        round: item.round,
        points: item.points,
        cumulativePoints: cumulative,
        race: item.race,
        flag: item.flag,
      };
    });
  }, [seasonData?.performance]);

  console.log(teamDetailData);
  return (
    <>
      {team && teamDetailData && seasonData && (
        <div className="mx-auto px-30">
          <SeasonChangeButton
            opened={opened}
            setOpenedAction={setOpened}
            years={seasonYears}
            selectedYear={selectedYear}
            setSelectedYearAction={setSelectedYear}
            className="mb-0 sm:mb-0"
          />
          <div className="relative flex items-center justify-between border-b border-neutral-800">
            <div
              style={{ borderColor: team.team_colour }}
              className="flex flex-col gap-2 border-l-8 pl-4 select-none"
            >
              <h1 className="text-5xl tracking-tight">{team.team_kr_name}</h1>
              <div className="flex items-center gap-2">
                <p className="text-[20px] tracking-wide text-[#5f5f5f] uppercase">
                  {team.team_slug}
                </p>
                <p className="text-[20px] tracking-wide text-[#5f5f5f] uppercase">
                  - <span>{selectedYear}</span> 시즌
                </p>
              </div>
            </div>
            <Image src={team.main_logo} alt={'logo'} width={240} height={240} />
          </div>
          <TeamStats data={seasonData} />
          <div className="border-t border-neutral-800 py-12">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">
              시즌 드라이버
            </h2>
            <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {seasonMainDrivers.map((driver) => (
                <TeamDriverCard
                  key={driver.driver_id}
                  driverId={driver.driver_id}
                  name={driver.kr_name}
                  number={driver.driver_number}
                  imageUrl={findHeadshot(driver.full_name, selectedYear)}
                  teamColor={team.team_colour}
                />
              ))}
            </div>
            {seasonReserveDrivers.length > 0 && (
              <section>
                <button
                  onClick={() => setRdOpened(!rdOpened)}
                  className="mb-8 flex cursor-pointer items-center gap-1 border border-(--color-button-border) bg-(--color-button-bg) px-4 py-1 text-[14px] hover:bg-(--color-button-hover) active:bg-(--color-button-active)"
                >
                  <p>리저브 드라이버 보기</p>{' '}
                  {rdOpened ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                <div className="grid grid-cols-4 gap-10">
                  {rdOpened &&
                    seasonReserveDrivers.map((driver) => (
                      <TeamDriverCard
                        driverId={driver.driver_id}
                        key={driver.driver_id}
                        name={driver.kr_name}
                        number={driver.driver_number}
                        imageUrl={findHeadshot(driver.full_name, selectedYear)}
                        teamColor={team.team_colour}
                      />
                    ))}
                </div>
              </section>
            )}
          </div>
          <SeasonPerformance
            data={performanceWithCumulative}
            teamColor={team.team_colour}
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
