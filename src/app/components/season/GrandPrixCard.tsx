'use client';

import { country_code_flags } from '@/images/flags';
import { CardProps } from '@/types/meeting';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function GrandPrixCard({ meetingInfo }: CardProps) {
  const router = useRouter();
  const flagSrc = country_code_flags[meetingInfo.country_code];
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
                {meetingInfo.country_name}
              </p>
            </div>
            <p className="text-[12px] text-[#8B8B8B]">
              {meetingInfo.meeting_official_name}
            </p>
          </div>
          <div className="shrink-0 text-[12px]">
            <p>{meetingInfo.date_start.split('T')[0]}</p>
          </div>
        </div>
        <div className="flex min-h-10 items-center justify-between">
          <div className="flex w-31.5 items-center gap-4.5 rounded-[5px] bg-[#242424] px-1.25 py-1.75 font-semibold">
            <p className="text-[10px] leading-none">1st</p>
            <p className="text-[18px] leading-none">NOR</p>
            <div className="h-5 w-5 shrink-0 rounded-full bg-[#FF8700]"></div>
          </div>
          <div className="flex w-31.5 items-center gap-4.5 rounded-[5px] bg-[#242424] px-1.25 py-1.75 font-semibold">
            <p className="text-[10px] leading-none">2nd</p>
            <p className="text-[18px] leading-none">MAX</p>
            <div className="h-5 w-5 shrink-0 rounded-full bg-[#3671C6]"></div>
          </div>
          <div className="flex w-31.5 items-center gap-4.5 rounded-[5px] bg-[#242424] px-1.25 py-1.75 font-semibold">
            <p className="text-[10px] leading-none">3rd</p>
            <p className="text-[18px] leading-none">RUS</p>
            <div className="h-5 w-5 shrink-0 rounded-full bg-[#00D2BE]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
