'use client';

import { CardProps } from '@/hooks/SeasonRacePodium';
import { country_code_flags } from '@/images/flags';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function GrandPrixCardWithPodium({ meetingInfo }: CardProps) {
  const router = useRouter();
  const flagSrc = country_code_flags[meetingInfo.country_code];
  const krStatus = () => {
    switch (meetingInfo.status) {
      case 'finished':
        return (
          <div className="flex items-center gap-1 text-[14px]">
            <p>종료</p>
            <div className="h-5 w-5 rounded-full bg-[#05AF05]"></div>
          </div>
        );
      case 'ongoing':
        return (
          <div className="flex items-center gap-1 text-[14px]">
            <p>진행중</p>
            <div className="h-5 w-5 rounded-full bg-[#B80000]"></div>
          </div>
        );
      case 'scheduled':
        return (
          <div className="flex items-center gap-1 text-[14px]">
            <p>예정</p>
            <div className="h-5 w-5 rounded-full bg-[#595959]"></div>
          </div>
        );
    }
  };

  const position = (p: number) => {
    if (p === 1) return '1st';
    if (p === 2) return '2nd';
    if (p === 3) return '3rd';
  };

  return (
    <>
      <div
        onClick={() => router.push(`/season/${meetingInfo.meeting_key}`)}
        className="flex min-h-45.5 min-w-105 cursor-pointer flex-col justify-between rounded-[10px] bg-[#1A1A1A] p-4.5 font-semibold hover:bg-[#313131]"
      >
        <div className="mb-5 flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-[12px]">
              <span className="mr-0.5">{meetingInfo.round}</span>
              <span>- 라운드</span>
            </p>
            <div className="flex gap-2">
              <Image
                src={flagSrc}
                alt="flag"
                width={24}
                height={24}
                className="rounded-full"
              />
              <p className="text-[20px] text-white">
                {meetingInfo.country_kr_name}
              </p>
            </div>
            <p className="text-[12px] text-[#8B8B8B]">
              {meetingInfo.meeting_official_name}
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-0.5 text-[12px]">
            <p>{meetingInfo.date_start.split('T')[0]}</p>
            <span>{krStatus()}</span>
          </div>
        </div>
        <div className="flex min-h-10 items-center justify-between">
          {meetingInfo.race_podium?.map((podium) => (
            <div
              key={podium.driver_code}
              className="flex w-31.5 items-center gap-4.5 rounded-[5px] bg-[#242424] px-1.25 py-1.75 font-semibold"
            >
              <p className="text-[12px] leading-none">
                {position(podium.position)}
              </p>
              <p className="text-[18px] leading-none">{podium.driver_code}</p>
              <div
                className="h-6 w-6 shrink-0 rounded-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundColor: podium.team_colour,
                  backgroundImage: `url(${podium.team_white_logo})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
