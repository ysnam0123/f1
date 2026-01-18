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
      <section className="relative mb-1 h-30 select-none sm:mb-12.5 sm:h-100">
        <div className="absolute inset-0 z-0 h-30 w-screen sm:h-100">
          <Image
            src="/circuit/zandvoort2.svg"
            alt="bg"
            width={1440}
            height={567}
            className="desktop h-full w-full object-cover"
          />
          <div className="mobile h-[120px] w-[390px] bg-red-400" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute left-1/2 flex w-full -translate-x-1/2 justify-between px-5 py-3.75 sm:top-5">
          <div className="flex flex-col gap-2">
            {!meetingInfo ? (
              <div className="desktop flex flex-col gap-2">
                <div className="h-5 w-100 animate-pulse rounded bg-neutral-700" />
                <div className="h-8 w-180 animate-pulse rounded bg-neutral-700" />
                <div className="h-5 w-50 animate-pulse rounded bg-neutral-700" />
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  <Image
                    src={flagSrc}
                    alt="flag"
                    width={40}
                    height={40}
                    className="desktop"
                  />
                  <Image
                    src={flagSrc}
                    alt="flag"
                    width={20}
                    height={12}
                    className="mobile"
                  />
                  <h2 className="text-[10px] font-bold sm:text-[20px]">
                    {meetingInfo?.meeting_name}
                  </h2>
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <h1 className="text-[13px] font-bold sm:text-[30px]">
                    {meetingInfo?.meeting_official_name}
                  </h1>
                </div>
                <p className="text-[10px] font-semibold sm:text-[20px]">
                  <span>라운드 </span>
                  <span className="mr-0.5">{meetingInfo?.round}</span>
                </p>
              </>
            )}
          </div>
          <div className="desktop">
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
        </div>
      </section>
    </>
  );
}
