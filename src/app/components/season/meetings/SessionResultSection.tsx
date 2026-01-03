'use client';
import { teams } from '@/data/teams';
import { SessionResult, SortedSessionResult } from '@/types/meeting';
import Image from 'next/image';
import DriverProfile from './DriverProfile';
import DefaultDriverProfile from './DefaultDriverProfile';
import { useRouter } from 'next/navigation';

interface SessionResults {
  sessionResults: SortedSessionResult[];
  isPending: boolean;
}

export default function SessionResultSection({
  sessionResults,
  isPending,
}: SessionResults) {
  const router = useRouter();
  return (
    <>
      {!isPending && (
        <table className="w-full table-fixed border-collapse select-none">
          <thead>
            <tr className="border-b border-white text-[20px] text-[#8B8B8B]">
              <th className="w-25 shrink-0 px-4 py-8">등수</th>
              <th className="max-w-70 px-4 py-8 text-left">이름</th>
              <th className="max-w-70 px-4 py-8 text-left">팀</th>
              <th className="w-20 px-4 py-8">Laps</th>
              <th className="w-28 px-4 py-8">시간</th>
            </tr>
          </thead>
          <tbody>
            {sessionResults.map((result) => (
              <tr
                key={result.driver_number}
                className="border-b border-[#2A2A2A]"
              >
                <td
                  style={{ fontFamily: 'PartialSans', fontWeight: 700 }}
                  className="font- px-4 py-8 text-center text-[22px]"
                >
                  {result.position}
                </td>
                <td className="px-4 py-8 font-bold">
                  <div className="flex items-center justify-start gap-3 text-[20px]">
                    {result.headshot_url ? (
                      <DriverProfile
                        headshot={result.headshot_url}
                        teamColor={result.team_colour}
                      />
                    ) : (
                      <DefaultDriverProfile />
                    )}

                    <div className="truncate">{result.kr_name}</div>
                    <div>{result.driver_number}</div>
                  </div>
                </td>
                <td className="px-4 py-8">
                  <div
                    className="group flex cursor-pointer items-center gap-2 text-[18px]"
                    onClick={() => router.push(`/team/${result.team_slug}`)}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
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
                <td className="px-4 py-8 text-center text-[22px]">
                  {result.number_of_laps}
                </td>
                <td className="py-8 text-center text-[20px]">
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
