'use client';
import { SortedSessionResult } from '@/types/meeting';
import DefaultDriverProfile from '../DefaultDriverProfile';
import DriverProfile from '../DriverProfile';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { formatDuration } from '@/hooks/FormattingDuration';

export default function RaceResultTable({
  results,
}: {
  results: SortedSessionResult[];
}) {
  const router = useRouter();
  const getDisplayPosition = (result: SortedSessionResult) => {
    if (result.position !== null) return result.position;
    if (result.dsq) return 'DSQ';
    if (result.dns) return 'DNS';
    if (result.dnf) return 'DNF';
    return '-';
  };

  return (
    <>
      <table className="w-full table-fixed border-collapse text-center whitespace-nowrap select-none sm:text-left">
        <thead>
          <tr className="border-b border-white text-[20px] text-[#8B8B8B]">
            <th className="w-[8%] py-3">등수</th>
            <th className="w-[40%] py-3 sm:w-[30%]">이름</th>
            <th className="w-[14%] py-3 sm:w-[25%]">팀</th>
            <th className="hidden w-[8%] py-3 md:table-cell">Laps</th>
            <th className="hidden w-[15%] py-3 md:table-cell">시간</th>
            <th className="w-[10%] py-3">포인트</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr
              key={result.driver_number}
              className="border-b border-[#2A2A2A] text-[16px] hover:bg-[#232323]"
            >
              <td
                style={{ fontFamily: 'PartialSans', fontWeight: 700 }}
                className="py-3 text-[20px]"
              >
                {getDisplayPosition(result)}
              </td>
              <td className="py-3 font-bold">
                <div className="group flex min-w-0 cursor-pointer items-center justify-center gap-3 text-[16px] sm:justify-start sm:text-[18px]">
                  {result.headshot_url ? (
                    <DriverProfile
                      className="shrink-0 duration-200 group-hover:scale-110"
                      headshot={result.headshot_url}
                      teamColor={result.team_colour}
                    />
                  ) : (
                    <DefaultDriverProfile />
                  )}
                  <div className="relative flex min-w-0 gap-2">
                    <div className="truncate">{result.kr_name}</div>
                    <div className="hidden sm:block">
                      {result.driver_number}
                    </div>
                  </div>
                </div>
              </td>
              {/* 팀열 */}
              <td className="py-3">
                <div
                  className="group flex cursor-pointer items-center justify-center gap-2 sm:justify-start"
                  onClick={() => router.push(`/team/${result.team_slug}`)}
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110 sm:h-9 sm:w-9"
                    style={{ backgroundColor: result.team_colour }}
                  >
                    <Image
                      src={result.white_logo}
                      alt="teamLogo"
                      width={28}
                      height={28}
                    />
                  </div>
                  <span className="relative hidden truncate sm:block">
                    {result.team_kr_name}
                  </span>
                </div>
              </td>
              <td className="hidden py-3 text-[22px] md:table-cell">
                {result.number_of_laps}
              </td>

              <td className="hidden py-3 text-[18px] md:table-cell">
                {formatDuration(Number(result.duration))}
              </td>
              <td className="py-3 font-bold">{result.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
