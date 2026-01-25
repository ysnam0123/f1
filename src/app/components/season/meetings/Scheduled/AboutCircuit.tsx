import { Circuit } from '@/types/circuit';

interface PageProps {
  circuitData: Circuit;
}

export default function AboutCircuit({ circuitData }: PageProps) {
  return (
    <>
      <div className="flex w-full flex-col rounded-4xl bg-[#212121] px-5 py-7">
        <h1 className="border-b border-[#474747] pb-2 text-[18px] text-[#c4c4c4]">
          서킷 정보
        </h1>
        <div className="flex items-center gap-10 pt-2">
          <div className="flex flex-col gap-1">
            <p className="text-[16px] text-[#838383]">서킷 길이</p>
            <p className="text-[18px]">{circuitData.circuit_length} km</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[16px] text-[#838383]">랩 수</p>
            <p className="text-[18px]">{circuitData.laps} Laps</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 pt-2">
          <p className="text-[16px] text-[#838383]">난이도 요약</p>
          <p className="text-[18px]">{circuitData.difficulty_summary}</p>
        </div>
      </div>
    </>
  );
}
