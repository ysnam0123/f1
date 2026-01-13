'use client';
import { PitView } from '@/app/api/f1/race/pit';
import DriverProfile from '../DriverProfile';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DefaultDriverProfile from '../DefaultDriverProfile';
export default function PitStop({ pit }: { pit: PitView[] }) {
  const router = useRouter();
  return (
    <>
      <table className="w-full table-fixed border-collapse whitespace-nowrap select-none sm:text-left">
        <thead>
          <tr className="border-b border-white text-[20px] text-[#8B8B8B]">
            <th className="w-[12%] py-3 text-center">번호</th>
            <th className="w-[40%] py-3 pl-5 text-left sm:w-[30%]">드라이버</th>
            <th className="w-[14%] py-3 text-center sm:w-[20%]">팀</th>
            <th className="hidden w-[15%] py-3 text-center md:table-cell">
              스탑 시간
            </th>
            <th className="hidden w-[15%] py-3 text-center md:table-cell">
              총 피트스탑 시간
            </th>
          </tr>
        </thead>
        <tbody>
          {pit.map((p) => (
            <tr
              key={p.pit_duration}
              className="border-b border-[#2A2A2A] text-[16px] hover:bg-[#232323]"
            >
              <td
                style={{ fontFamily: 'PartialSans', fontWeight: 700 }}
                className="py-3 text-center text-[20px] font-bold"
              >
                {p.driver_number}
              </td>
              <td className="py-3 font-bold">
                <div className="group flex min-w-0 cursor-pointer items-center justify-center gap-3 pl-5 text-[16px] sm:justify-start sm:text-[18px]">
                  {p.headshot_url ? (
                    <DriverProfile
                      className="shrink-0 duration-200 group-hover:scale-110"
                      headshot={p.headshot_url}
                      teamColor={p.team_colour}
                    />
                  ) : (
                    <DefaultDriverProfile />
                  )}
                  <div className="relative flex min-w-0 gap-2">
                    <div className="truncate">{p.kr_name}</div>
                  </div>
                </div>
              </td>
              {/* 팀열 */}
              <td className="py-3">
                <div
                  className="group flex cursor-pointer items-center gap-2"
                  onClick={() => router.push(`/team/${p.team_slug}`)}
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110 sm:h-9 sm:w-9"
                    style={{ backgroundColor: p.team_colour }}
                  >
                    <Image
                      src={p.white_logo}
                      alt="teamLogo"
                      width={28}
                      height={28}
                    />
                  </div>
                  <span className="relative hidden truncate sm:block">
                    {p.team_kr_name}
                  </span>
                </div>
              </td>
              <td className="hidden py-3 text-center text-[22px] md:table-cell">
                {p.stop_duration}
              </td>
              <td className="hidden py-3 text-center text-[22px] md:table-cell">
                {p.pit_duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
