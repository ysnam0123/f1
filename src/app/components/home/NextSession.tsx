'use client';
import { NextMeeting } from '@/hooks/NextMeeting';
import Image from 'next/image';
import SimpleLoading from '../common/SimpleLoading';
import { useRouter } from 'next/navigation';
import { useSessionData } from '@/app/api/meeting/Sessions';
import SessionBox from './SessionBox';

interface PageProps {
  data?: NextMeeting;
  loading: boolean;
}
export default function NextSession({ data, loading }: PageProps) {
  const router = useRouter();
  const meetingKey = data?.meeting_key ?? null;
  const { data: nextSessions = [] } = useSessionData(meetingKey);
  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <SimpleLoading />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  console.log('nextSessions:', nextSessions);
  return (
    <>
      <div className="flex flex-col gap-3">
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
        <section className="flex flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full flex-col lg:max-w-152.5 lg:shrink-0 lg:pb-0">
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
            <div className="hidden w-full rounded-[15px] bg-[#111111]/90 lg:flex lg:px-7 xl:max-w-62.5 xl:items-center xl:justify-center">
              <Image
                src="/circuit/brazil_interlagos.svg"
                alt="circuit"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            {nextSessions.map((session) => (
              <SessionBox key={session.session_key} data={session} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
