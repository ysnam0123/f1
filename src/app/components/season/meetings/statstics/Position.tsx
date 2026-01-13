'use client';
import { DriverPositionGain } from '@/app/api/f1/race/position';
import DriverProfile from '../DriverProfile';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DefaultDriverProfile from '../DefaultDriverProfile';
import { useState, useMemo } from 'react';

export default function Position({
  positionGain,
}: {
  positionGain: DriverPositionGain[];
}) {
  const router = useRouter();
  type SortKey = 'end_position' | 'position_gain' | null;

  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    order: 'asc' | 'desc';
  }>({
    key: 'end_position',
    order: 'asc',
  });
  const sortedPositionGain = useMemo(() => {
    if (!sortConfig.key) return positionGain;

    return [...positionGain].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      if (sortConfig.order === 'asc') {
        return aValue - bValue;
      }
      return bValue - aValue;
    });
  }, [positionGain, sortConfig]);

  const handleSort = (key: SortKey) => {
    setSortConfig((prev) => {
      // 같은 컬럼 다시 클릭 → 방향만 토글
      if (prev.key === key) {
        return {
          key,
          order: prev.order === 'asc' ? 'desc' : 'asc',
        };
      }

      // 다른 컬럼 클릭 → 기존 정렬 취소 + 새 기준 asc
      return {
        key,
        order: 'asc',
      };
    });
  };
  const SortIcon = ({
    active,
    order,
  }: {
    active: boolean;
    order: 'asc' | 'desc';
  }) => {
    if (!active) return <span className="text-[14px] opacity-40">⇅</span>;
    return <span className="text-[14px]">{order === 'asc' ? '▲' : '▼'}</span>;
  };
  return (
    <>
      <table className="w-full table-fixed border-collapse whitespace-nowrap select-none sm:text-left">
        <thead>
          <tr className="border-b border-white text-[20px] text-[#8B8B8B]">
            <th className="w-[12%] py-3 text-center">번호</th>
            <th className="w-[40%] py-3 pl-5 text-left sm:w-[30%]">드라이버</th>
            <th className="w-[14%] py-3 text-center sm:w-[20%]">팀</th>
            <th className="hidden w-[15%] py-3 text-center md:table-cell">
              출발 포지션
            </th>
            <th
              className="hidden w-[15%] cursor-pointer py-3 text-center transition-colors hover:text-[#e5e5e5] md:table-cell"
              onClick={() => handleSort('end_position')}
            >
              <span className="inline-flex items-center gap-1">
                최종 포지션
                <SortIcon
                  active={sortConfig.key === 'end_position'}
                  order={sortConfig.order}
                />
              </span>
            </th>
            <th
              className="w-[10%] cursor-pointer py-3 text-center transition-colors hover:text-[#e5e5e5]"
              onClick={() => handleSort('position_gain')}
            >
              <span className="inline-flex items-center gap-1">
                포지션 변화
                <SortIcon
                  active={sortConfig.key === 'position_gain'}
                  order={sortConfig.order}
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPositionGain.map((position) => (
            <tr
              key={position.driver_number}
              className="border-b border-[#2A2A2A] text-[16px] hover:bg-[#232323]"
            >
              <td
                style={{ fontFamily: 'PartialSans', fontWeight: 700 }}
                className="py-3 text-center text-[20px] font-bold"
              >
                {position.driver_number}
              </td>
              <td className="py-3 font-bold">
                <div className="group flex min-w-0 cursor-pointer items-center justify-center gap-3 pl-5 text-[16px] sm:justify-start sm:text-[18px]">
                  {position.headshot_url ? (
                    <DriverProfile
                      className="shrink-0 duration-200 group-hover:scale-110"
                      headshot={position.headshot_url}
                      teamColor={position.team_colour}
                    />
                  ) : (
                    <DefaultDriverProfile />
                  )}
                  <div className="relative flex min-w-0 gap-2">
                    <div className="truncate">{position.kr_name}</div>
                  </div>
                </div>
              </td>
              {/* 팀열 */}
              <td className="py-3">
                <div
                  className="group flex cursor-pointer items-center gap-2"
                  onClick={() => router.push(`/team/${position.team_slug}`)}
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110 sm:h-9 sm:w-9"
                    style={{ backgroundColor: position.team_colour }}
                  >
                    <Image
                      src={position.white_logo}
                      alt="teamLogo"
                      width={28}
                      height={28}
                    />
                  </div>
                  <span className="relative hidden truncate sm:block">
                    {position.team_kr_name}
                  </span>
                </div>
              </td>
              <td className="hidden py-3 text-center text-[22px] md:table-cell">
                {position.start_position}
              </td>
              <td className="hidden py-3 text-center text-[22px] md:table-cell">
                {position.end_position}
              </td>

              <td className="py-3 text-center text-[22px] font-bold">
                <span
                  className={
                    position.position_gain > 0
                      ? 'text-green-400'
                      : position.position_gain < 0
                        ? 'text-red-400'
                        : 'text-gray-400'
                  }
                >
                  {position.position_gain > 0 && '+'}
                  {position.position_gain}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
