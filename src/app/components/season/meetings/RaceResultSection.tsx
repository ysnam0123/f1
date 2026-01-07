'use client';
import Image from 'next/image';
import StatsticsCard from './StatsticsCard';
import PodiumCard from './PodiumCard';
import { RaceResults } from '@/types/meeting';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DnsDnfDsqInfo from './DnsDnfDsqInfo';
import RaceResultTable from './table/RaceResultTable';
import StartingGridTable from './table/StartingGridTable';

export default function RaceResultSection({
  sessionResults,
  isPending,
  startingGrid,
}: RaceResults) {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const podiumResults = sessionResults.slice(0, 3);
  const first = podiumResults.find((r) => r.position === 1);
  const second = podiumResults.find((r) => r.position === 2);
  const third = podiumResults.find((r) => r.position === 3);
  return (
    <>
      {isPending && <></>}
      <div className="my-5 flex items-end justify-center gap-7.5">
        {second && <PodiumCard result={second} rank={2} />}
        {first && <PodiumCard result={first} rank={1} />}
        {third && <PodiumCard result={third} rank={3} />}
      </div>
      <button
        onClick={() => setIsShow(!isShow)}
        className={`${isShow ? 'bg-[#4B4B4B]' : 'bg-[#212121]'} mb-5 flex h-10 cursor-pointer items-center justify-center rounded-[10px] px-3.25 font-semibold hover:bg-[#4B4B4B] active:bg-[#2b2b2b]`}
      >
        스타팅 그리드
      </button>
      <div className="mb-12.5 min-h-50 max-w-285 rounded-[10px] bg-[#1A1A1A] px-17.5 py-5">
        {!isShow ? (
          <>
            <RaceResultTable results={sessionResults} />
            <DnsDnfDsqInfo />
          </>
        ) : (
          <StartingGridTable results={startingGrid} />
        )}
      </div>

      {/* ResultStatstics.tsx */}
      <div className="select-none">
        <h1
          className="mb-12.5 text-[40px]"
          style={{ fontFamily: 'PartialSans' }}
        >
          Race Summary
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
