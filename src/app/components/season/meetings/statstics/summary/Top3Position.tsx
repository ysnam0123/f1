import { DriverPositionGain } from '@/app/api/f1/race/position';
import { ArrowBigRight, Flame } from 'lucide-react';
import Image from 'next/image';

export default function Top3Position({
  setSelectedTab,
  positionGain,
}: {
  setSelectedTab: (tab: string) => void;
  positionGain: DriverPositionGain[];
}) {
  return (
    <>
      <div className="flex max-w-125 flex-col gap-3 rounded-4xl border border-[#262626] bg-[#161616] px-7.5 py-5">
        <div className="mb-4 flex items-center justify-between text-gray-400">
          <h1 className="text-gray-420 flex items-center gap-1">
            <Image src="/icons/graph.svg" alt="icon" width={28} height={28} />
            <p
              className="text-[20px]"
              style={{ fontFamily: 'paperlogy', fontWeight: 500 }}
            >
              포지션 상승 TOP 3
            </p>
          </h1>
          <button
            onClick={() => setSelectedTab('포지션')}
            className="cursor-pointer text-[18px] hover:text-[#cacaca]"
          >
            전체보기
          </button>
        </div>
        {positionGain.slice(0, 3).map((position) => (
          <div
            key={position.driver_id}
            className="flex items-center justify-between gap-7.5 px-6"
          >
            <p className="text-[18px] font-semibold">{position.kr_name}</p>
            <div className="flex items-center gap-5 text-[22px] font-semibold">
              <p className="h-8.25 w-8 text-center">
                {position.start_position}
              </p>
              <ArrowBigRight className="h-6 w-6" />
              <p className="h-8.25 w-8 text-center">{position.end_position}</p>
            </div>
            <div className="relative flex items-center gap-2 text-[18px] font-semibold">
              <span>+ {position.position_gain}</span>
              <Flame className="absolute -right-8 text-[#FF5900]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
