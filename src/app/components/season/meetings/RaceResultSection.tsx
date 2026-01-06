'use client';
import Image from 'next/image';
import StatsticsCard from './StatsticsCard';
import PodiumCard from './PodiumCard';
import { SessionResults, SortedSessionResult } from '@/types/meeting';
import { useRouter } from 'next/navigation';
import DriverProfile from './DriverProfile';
import DefaultDriverProfile from './DefaultDriverProfile';

export default function RaceResultSection({
  sessionResults,
  isPending,
}: SessionResults) {
  const router = useRouter();
  const podiumResults = sessionResults.slice(0, 3);
  const first = podiumResults.find((r) => r.position === 1);
  const second = podiumResults.find((r) => r.position === 2);
  const third = podiumResults.find((r) => r.position === 3);
  const getDisplayPosition = (result: SortedSessionResult) => {
    if (result.position !== null) return result.position;
    if (result.dsq) return 'DSQ';
    if (result.dns) return 'DNS';
    if (result.dnf) return 'DNF';
    return '-';
  };
  return (
    <>
      {isPending && <></>}

      <div className="my-10 flex items-end justify-center gap-7.5">
        {second && <PodiumCard result={second} rank={2} />}
        {first && <PodiumCard result={first} rank={1} />}
        {third && <PodiumCard result={third} rank={3} />}
      </div>
      <div className="mb-12.5 min-h-50 w-285 rounded-[10px] bg-[#1A1A1A] px-17.5 py-5">
        <table className="w-full border-collapse select-none">
          <thead>
            <tr className="border-b border-white text-center text-[20px] text-[#8B8B8B]">
              <th className="w-15 py-4">등수</th>
              <th className="px-4 py-4">이름</th>
              <th className="px-4 py-4">팀</th>
              <th className="w-20 py-4">Laps</th>
              <th className="px-4 py-4">시간</th>
              <th className="w-20 py-4 text-right">포인트</th>
            </tr>
          </thead>
          <tbody>
            {sessionResults.map((result) => (
              <tr
                key={result.driver_number}
                className="border-b border-[#2A2A2A] text-center text-[16px]"
              >
                <td
                  style={{ fontFamily: 'PartialSans', fontWeight: 700 }}
                  className="font- px-4 py-5 text-center text-[20px]"
                >
                  {getDisplayPosition(result)}
                </td>
                <td className="px-4 py-5 font-bold">
                  <div className="group flex cursor-pointer items-center justify-start gap-3 text-[18px]">
                    {result.headshot_url ? (
                      <DriverProfile
                        className="duration-200 group-hover:scale-110"
                        headshot={result.headshot_url}
                        teamColor={result.team_colour}
                      />
                    ) : (
                      <DefaultDriverProfile />
                    )}
                    <div className="relative flex gap-3">
                      <div className="truncate">{result.kr_name}</div>
                      <div>{result.driver_number}</div>
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-current transition-all duration-200 group-hover:w-full" />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-5">
                  <div
                    className="group flex cursor-pointer items-center gap-2 text-[18px]"
                    onClick={() => router.push(`/team/${result.team_slug}`)}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
                      style={{ backgroundColor: result.team_colour }}
                    >
                      <Image
                        src={result.white_logo}
                        alt="teamLogo"
                        width={30}
                        height={30}
                      />
                    </div>

                    <span className="relative">
                      {result.team_kr_name}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-current transition-all duration-200 group-hover:w-full" />
                    </span>
                  </div>
                </td>
                <td className="px-4 py-5 text-center text-[22px]">
                  {result.number_of_laps}
                </td>
                <td className="py-5 text-center text-[20px]">
                  + {result.gap_to_leader}
                </td>
                <td className="py-4 text-right font-bold">{result.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col gap-1 pt-2 pl-4 text-[15px]">
          <p>
            <span className="font-semibold">DNF</span>: 완주 실패
          </p>
          <p>
            <span className="font-semibold">DNS</span>: 미출전
          </p>
          <p>
            <span className="font-semibold">DSQ</span>: 실격
          </p>
        </div>
      </div>

      {/* ResultStatstics.tsx */}
      <div className="select-none">
        <h1
          className="mb-12.5 text-[40px]"
          style={{ fontFamily: 'PartialSans' }}
        >
          STATSTICS
        </h1>
        <div className="mb-8.25 grid grid-cols-3 gap-8.25">
          <StatsticsCard title="Fastest Lap" />
          <StatsticsCard title="Safety Car" />
          <StatsticsCard title="Weather" />
          <StatsticsCard title="Fastest Pit Stop" />
          <StatsticsCard title="Retirements" />
          <StatsticsCard title="포지션 상승 TOP 3" />
        </div>
        <div className="flex gap-8.25">
          <div className="min-h-175 w-187.25 rounded-[40px] bg-[#1A1A1A] px-17.5 py-4.5">
            <table className="w-full select-none">
              <thead className="mb-3 border-b border-[#c0c0c0] text-[24px] text-[#8B8B8B]">
                <tr>
                  <th className="w-[40%] py-2">팀</th>
                  <th className="w-[30%] py-2 text-center">피트스탑</th>
                  <th className="w-[30%] py-2 text-center">포인트</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/alpine.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/astonMartin.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/redBullRacing.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/redBullRacing.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/redBullRacing.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/redBullRacing.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/redBullRacing.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/redBullRacing.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/redBullRacing.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/redBullRacing.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="min-h-175 w-89.5 rounded-[40px] bg-[#1A1A1A] px-17.5 py-4.5"></div>
        </div>
      </div>
    </>
  );
}
