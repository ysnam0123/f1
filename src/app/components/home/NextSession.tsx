'use client';
import { NextMeeting } from '@/hooks/NextMeeting';
import Image from 'next/image';
import SimpleLoading from '../common/SimpleLoading';
import { useRouter } from 'next/navigation';

interface PageProps {
  data?: NextMeeting;
  loading: boolean;
}
export default function NextSession({ data, loading }: PageProps) {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-[14px] font-semibold text-(--color-title) sm:text-[30px]">
            다음 일정
          </h1>
          <button
            onClick={() => router.push(`/seaon/${data?.meeting_key}`)}
            className="cursor-pointer text-[12px] text-(--color-title) hover:text-[#F8F8F8] sm:text-[16px]"
          >
            자세히 보기
          </button>
        </div>
        <div className="flex w-full flex-col gap-1 rounded-[10px] border border-(--color-box-border) bg-(--color-box-bg) px-3 py-3.75 sm:gap-6 sm:py-6 lg:flex-row lg:gap-0 lg:py-7.5 lg:pl-8.75">
          {loading && (
            <div className="flex h-full w-full items-center justify-center">
              <SimpleLoading />
            </div>
          )}
          {!loading && data && (
            <>
              <div className="flex w-full flex-col border-b border-(--color-box-border) pb-2 sm:pb-4 lg:max-w-152.5 lg:shrink-0 lg:border-r lg:border-b-0 lg:border-(--color-box-border) lg:pr-6 lg:pb-0">
                <h1 className="text-[18px] font-semibold sm:text-[22px] lg:text-[30px]">
                  {data.meeting_name}
                </h1>
                <h1 className="mt-1 text-[10px] font-medium text-(--color-sub-text) sm:text-[14px] lg:text-[18px]">
                  {data.meeting_official_name}
                </h1>

                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[12px] sm:mt-3 sm:text-[14px] lg:text-[16px]">
                  <p>{data.circuits.circuit_long_name}</p>
                  <div className="hidden h-6 w-px bg-(--color-sub-text) lg:block" />
                  <p>{data.countries.country_kr_name}</p>
                  <Image
                    src={data.countries.flag}
                    alt="flag"
                    width={24}
                    height={14}
                  />
                </div>
              </div>

              <div className="flex w-full flex-col lg:max-w-60 lg:border-r lg:border-(--color-box-border) lg:px-5">
                <h1 className="font-semibold text-(--color-sub-text)">
                  <span className="text-[14px] lg:text-[16px]">날짜</span>
                </h1>

                <div className="mt-1 flex flex-col gap-1 text-[14px] sm:mt-3 lg:mt-4 lg:text-[22px]">
                  <p>시작일: {data.date_start.split('T')[0]}</p>
                  <p>종료일: {data.date_end.split('T')[0]}</p>
                </div>
              </div>

              {/* 서킷 */}
              <div className="hidden lg:flex lg:px-7 xl:max-w-62.5 xl:items-center xl:justify-center">
                <Image
                  src="/circuit/brazil_interlagos.svg"
                  alt="circuit"
                  width={150}
                  height={150}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
