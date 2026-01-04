import { upgradeHeadshotQuality } from '@/hooks/UpgradeHeadShotQuality';
import { SortedSessionResult } from '@/types/meeting';
import Image from 'next/image';

export default function PodiumCard({
  result,
}: {
  result: SortedSessionResult;
}) {
  const headshotSrc = upgradeHeadshotQuality(result.headshot_url);
  const [firstName, lastName] = result.kr_name.split(' ');
  return (
    <>
      <div className="relative h-59 min-w-[256px] overflow-hidden rounded-br-2xl">
        <Image
          src="/cardBg.png"
          alt="bg"
          fill
          className="absolute inset-0 z-0 object-cover"
        />
        <Image
          src={headshotSrc!}
          alt="driver"
          width={160}
          height={160}
          className="absolute bottom-16.25 left-1/2 z-10 -translate-x-1/2"
        />
        <div className="absolute bottom-0 z-20 flex w-full items-center justify-between bg-[#222222] px-3.75 py-3.25">
          <div className="flex flex-col gap-0.5 text-[#373737]">
            {/* <span className="text-[14px] font-medium">{firstName}</span>
            <span className="text-[17px] font-bold">{lastName}</span> */}
            <span className="text-[17px] font-bold">{result.kr_name}</span>
          </div>

          <div className="relative h-10 w-30">
            <Image
              src={result.main_logo}
              alt="team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
