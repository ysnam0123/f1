import { DriverSeasonRankingView } from '@/types/Ranking';
import Image from 'next/image';

const data = [
  {
    rank: 1,
    name: '랜드 노리스',
    team: '맥라렌',
    points: 293,
    color: 'bg-orange-500',
  },
  {
    rank: 2,
    name: '조지 러셀',
    team: '메르세데스',
    points: 247,
    color: 'bg-teal-400',
  },
  {
    rank: 3,
    name: '샤를 르클레르',
    team: '페라리',
    points: 186,
    color: 'bg-red-600',
  },
  {
    rank: 4,
    name: '유키 츠노다',
    team: '레드불 레이싱',
    points: 169,
    color: 'bg-blue-600',
  },
  {
    rank: 5,
    name: '페르난도 알론소',
    team: '애스턴 마틴',
    points: 135,
    color: 'bg-green-600',
  },
];
interface DS {
  data: DriverSeasonRankingView[];
}
export default function DriverStandings({ data }: DS) {
  return (
    <section className="w-full">
      <div className="mb-5 flex items-center justify-between pr-3">
        <h2 className="text-[18px] font-semibold text-(--color-title)">
          드라이버 랭킹
        </h2>
        <button className="cursor-pointer text-[16px] text-(--color-title) hover:text-[#F8F8F8]">
          전체보기
        </button>
      </div>
      <div className="min-h-91 w-full rounded-xl bg-(--color-table-bg) p-4 sm:p-5">
        {/* Header */}
        <div className="mb-3 border-b border-white/10 pb-2">
          <div className="grid grid-cols-[60px_1fr_1fr_80px] text-xs text-white/60 sm:text-sm">
            <span>등수</span>
            <span>선수</span>
            <span className="text-center">팀</span>
            <span className="text-right">포인트</span>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-1">
          {data.map((item) => (
            <div
              key={item.rank}
              className="grid h-16 grid-cols-[6px_50px_2fr_1fr_30px] items-center border-y border-r border-(--color-table-border) bg-(--color-table-bg) transition hover:bg-(--color-table-hover) sm:grid-cols-[6px_60px_1fr_1fr_80px]"
            >
              {/* Team Color Bar */}
              <div
                style={{ backgroundColor: item.team_colour }}
                className={`h-full rounded-l-lg`}
              />

              {/* Rank */}
              <div className="text-center text-sm font-semibold text-white sm:text-base">
                {item.rank}
              </div>

              {/* Driver */}
              <div className="flex items-center gap-3 py-2">
                <div className="flex h-11.5 w-11.5 items-center justify-center overflow-hidden rounded-full bg-[#2C2C2C]">
                  <Image
                    src={item.headshot_url}
                    width={46}
                    height={46}
                    className="object-cover"
                    alt="driver"
                  />
                </div>
                <span className="truncate text-sm font-medium text-white sm:text-base">
                  {item.kr_name}
                </span>
              </div>

              {/* Team */}
              <div className="truncate text-center text-sm text-white/80 sm:text-base">
                {item.team_kr_name}
              </div>

              {/* Points */}
              <div className="pr-3 text-right text-sm font-semibold text-white sm:text-base">
                {item.total_points}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
