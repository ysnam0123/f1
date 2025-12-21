'use client';

import { useRouter } from 'next/navigation';

export default function GrandPrixCard() {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(`/season/${3333}`)}
        className="flex min-h-[182px] min-w-[420px] cursor-pointer flex-col justify-between rounded-[10px] bg-[#1A1A1A] p-[18px] font-semibold hover:bg-[#313131]"
      >
        <div className="mb-5 flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-[10px]">라운드 1</p>
            <div className="flex gap-2">
              <div className="h-6 w-6 rounded-full bg-gray-300"></div>
              <p className="text-[20px] text-white">호주</p>
            </div>
            <p className="text-[12px] text-[#8B8B8B]">
              FORMULA 1 LOUIS VUITTON AUSTRALIAN GRAND PRIX 2025
            </p>
          </div>
          <div className="flex-shrink-0 text-[12px]">
            <p>3/14 - 3/16</p>
          </div>
        </div>
        <div className="flex min-h-[40px] items-center justify-between">
          <div className="flex w-[126px] items-center gap-[18px] rounded-[5px] bg-[#242424] px-[5px] py-[7px] font-semibold">
            <p className="text-[10px] leading-[1]">1st</p>
            <p className="text-[18px] leading-[1]">NOR</p>
            <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#FF8700]"></div>
          </div>
          <div className="flex w-[126px] items-center gap-[18px] rounded-[5px] bg-[#242424] px-[5px] py-[7px] font-semibold">
            <p className="text-[10px] leading-[1]">2nd</p>
            <p className="text-[18px] leading-[1]">MAX</p>
            <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#3671C6]"></div>
          </div>
          <div className="flex w-[126px] items-center gap-[18px] rounded-[5px] bg-[#242424] px-[5px] py-[7px] font-semibold">
            <p className="text-[10px] leading-[1]">3rd</p>
            <p className="text-[18px] leading-[1]">RUS</p>
            <div className="h-5 w-5 flex-shrink-0 rounded-full bg-[#00D2BE]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
