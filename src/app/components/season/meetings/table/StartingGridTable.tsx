'use client';
import { SortedSessionResult, StartingGridWithDriver } from '@/types/meeting';
import DefaultDriverProfile from '../DefaultDriverProfile';
import DriverProfile from '../DriverProfile';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { supabase } from '@/supabase/client';

export default function StartingGridTable({
  results,
}: {
  results: StartingGridWithDriver[];
}) {
  const router = useRouter();

  return (
    <>
      <table className="w-full border-collapse select-none">
        <thead>
          <tr className="border-b border-white text-center text-[20px] text-[#8B8B8B]">
            <th className="w-15 py-4">포지션</th>
            <th className="px-4 py-4">이름</th>
            <th className="px-4 py-4">팀</th>
            <th className="w-20 py-4">Lap Time</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr
              key={result.driver_number}
              className="border-b border-[#2A2A2A] text-center text-[16px]"
            >
              <td
                style={{ fontFamily: 'PartialSans', fontWeight: 700 }}
                className="font- px-4 py-5 text-center text-[20px]"
              >
                {result.position}
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
                {result.lap_duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
