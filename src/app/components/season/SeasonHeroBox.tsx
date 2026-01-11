import { Circuit } from '@/data/circuit';
import { country_code_flags } from '@/images/flags';
import { Meeting } from '@/types/meeting';
import Image from 'next/image';
import SimpleLoading from '../common/SimpleLoading';
interface CircuitData {
  circuitInfo?: Circuit | null;
  meetingInfo?: Meeting;
}
export default function SeasonHeroBox({
  circuitInfo,
  meetingInfo,
}: CircuitData) {
  if (!meetingInfo || !circuitInfo) {
    return null;
  }
  const flagSrc = country_code_flags[meetingInfo!.country_code];
  const circuitSrc = circuitInfo.circuit_img;
  // if (circuitInfo) {
  //   console.log('서킷 정보 테스트:', circuitInfo);
  // }
  return (
    <>
      <section className="relative mb-12.5 h-100 select-none">
        <div className="absolute inset-0 z-0 h-100 w-screen">
          <Image
            src="/circuit/zandvoort2.svg"
            alt="bg"
            width={1440}
            height={567}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute top-5 left-1/2 flex w-full max-w-360 -translate-x-1/2 justify-between">
          <div className="flex flex-col gap-2">
            {!meetingInfo ? (
              <div className="flex flex-col gap-2">
                <div className="h-5 w-100 animate-pulse rounded bg-neutral-700" />
                <div className="h-8 w-180 animate-pulse rounded bg-neutral-700" />
                <div className="h-5 w-50 animate-pulse rounded bg-neutral-700" />
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  <Image src={flagSrc} alt="flag" width={40} height={40} />
                  <h2 className="text-[20px] font-bold">
                    {meetingInfo?.meeting_name}
                  </h2>
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <h1 className="text-[30px] font-bold">
                    {meetingInfo?.meeting_official_name}
                  </h1>
                </div>
                <p className="text-[20px] font-semibold">
                  <span>라운드 </span>
                  <span className="mr-0.5">{meetingInfo?.round}</span>
                </p>
              </>
            )}
          </div>
          <div className="flex h-90 min-w-130 flex-col items-center justify-center gap-1 rounded-[30px] bg-[#000000]">
            {!circuitSrc && <SimpleLoading />}
            {circuitSrc && (
              <>
                <h1 className="text-[22px] font-semibold">
                  {circuitInfo.circuit_short_name}
                </h1>
                <Image
                  src={circuitSrc}
                  alt="circuit"
                  width={300}
                  height={300}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
