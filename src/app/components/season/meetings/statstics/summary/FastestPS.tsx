import { PitView } from '@/app/api/f1/race/pit';
import { upgradeHeadshotQuality } from '@/hooks/UpgradeHeadShotQuality';
import Image from 'next/image';

export default function FastestPitStop({
  pit,
  setSelectedTab,
}: {
  setSelectedTab: (tab: string) => void;
  pit: PitView[];
}) {
  const fastest = pit[0];
  const headshot = upgradeHeadshotQuality(fastest.headshot_url);
  console.log('fastest', fastest);
  return (
    <>
      <div className="flex max-w-125 flex-col gap-3 rounded-4xl border border-[#262626] bg-[#161616] px-7.5 py-5">
        <div className="mb-4 flex items-center justify-between text-gray-400">
          <h1 className="text-gray-420 flex items-center gap-1">
            <Image src="/icons/pitstop.svg" alt="icon" width={28} height={28} />
            <p
              className="text-[20px] text-gray-400"
              style={{ fontFamily: 'paperlogy', fontWeight: 500 }}
            >
              Best 피트 스탑
            </p>
          </h1>
          <button
            onClick={() => setSelectedTab('피트 스탑')}
            className="cursor-pointer text-[18px] hover:text-[#cacaca]"
          >
            전체보기
          </button>
        </div>
        {fastest && (
          <div
            style={{ fontFamily: 'Pretendard', fontWeight: 500 }}
            className="flex items-center justify-between px-4"
          >
            <div className="flex flex-col items-center">
              <Image
                src={fastest.main_logo}
                alt="teamLogo"
                width={100}
                height={70}
              />
              <p className="text-[20px]">{fastest.team_kr_name}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={headshot!} alt="teamLogo" width={100} height={70} />
              <p className="text-[20px]">{fastest.kr_name}</p>
            </div>
            <span className="text-[32px]">+ {fastest.stop_duration}s</span>
          </div>
        )}
      </div>
    </>
  );
}
