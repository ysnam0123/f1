'use client';
import { SessionResults, SortedSessionResult } from '@/types/meeting';
import Image from 'next/image';
import DriverProfile from './DriverProfile';
import DefaultDriverProfile from './DefaultDriverProfile';
import { useRouter } from 'next/navigation';

export default function SessionResultSection({
  sessionResults,
  isPending,
}: SessionResults) {
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
      {!isPending && (
        <table className="w-full table-fixed border-collapse select-none">
          <thead>
            <tr className="border-b border-white text-[20px] text-[#8B8B8B]">
              <th className="w-25 shrink-0 px-4 py-5">등수</th>
              <th className="max-w-70 px-4 py-5 text-left">이름</th>
              <th className="max-w-70 px-4 py-5 text-left">팀</th>
              <th className="w-20 px-4 py-5">Laps</th>
              <th className="w-28 px-4 py-5">시간</th>
            </tr>
          </thead>
          <tbody>
            {sessionResults.map((result) => (
              <tr
                key={result.driver_number}
                className="border-b border-[#2A2A2A] hover:bg-[#1a1a1a]"
              >
                <td
                  style={{ fontFamily: 'PartialSans', fontWeight: 700 }}
                  className="font- px-4 py-5 text-center text-[22px]"
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
