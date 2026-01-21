'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <div className="mt-10 h-35 w-full bg-[#100F13] px-2.5 py-3.75 select-none sm:mt-50 sm:h-81.5 sm:px-12.5 sm:py-7.5">
        <div className="flex h-48.75 items-center">
          <div className="flex h-full w-100 flex-col gap-2 border-0 border-[#717171] sm:border-r">
            <Image
              src={'/AfterLapLogo.svg'}
              alt="logo"
              width={270}
              height={67}
              className="desktop"
            />
            <Image
              src={'/AfterLapLogo.svg'}
              alt="logo"
              width={150}
              height={36}
              className="mobile"
            />
            <div className="flex flex-col gap-1 pl-4 text-[10px] sm:text-[16px]">
              <p className="text-[#CBCBCB]">Beyond the Result</p>
              <p className="text-[#5D5D5D]">
                결과를 넘어서, 세션과 드라이버의 흐름을 읽다
              </p>
            </div>
            <p className="mt-5 px-4 text-[10px] text-[#5D5D5D] sm:text-[18px]">
              © 2025 After Lap - All rights reserved.
            </p>
          </div>
          <div className="desktop">
            <div className="flex">
              <div className="flex h-full w-100 flex-col gap-2 border-r border-[#717171]">
                <div className="flex flex-col gap-1 pl-4">
                  <h2 className="mb-3 text-[18px]">둘러보기</h2>
                  <ul className="text-[16px] text-(--color-sub-text)">
                    <li
                      onClick={() => router.push('/season')}
                      className="cursor-pointer hover:text-(--color-title-hover)"
                    >
                      시즌
                    </li>
                    <li
                      onClick={() => router.push('/ranking')}
                      className="cursor-pointer hover:text-(--color-title-hover)"
                    >
                      순위
                    </li>
                    <li
                      onClick={() => router.push('team')}
                      className="cursor-pointer hover:text-(--color-title-hover)"
                    >
                      팀
                    </li>
                    <li
                      onClick={() => router.push('circuit')}
                      className="cursor-pointer hover:text-(--color-title-hover)"
                    >
                      드라이버
                    </li>
                    <li
                      onClick={() => router.push('circuit')}
                      className="cursor-pointer hover:text-(--color-title-hover)"
                    >
                      서킷
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex w-100 flex-col gap-2">
                <div className="flex h-full flex-col gap-1 pl-4">
                  <h2 className="mb-3 text-[18px]">AfterLap</h2>
                  <ul className="text-[16px] text-(--color-sub-text)">
                    <li className="cursor-pointer hover:text-(--color-title-hover)">
                      AfterLap에 대하여
                    </li>
                    <li className="cursor-pointer hover:text-(--color-title-hover)">
                      문의하기
                    </li>
                    <li className="cursor-pointer hover:text-(--color-title-hover)">
                      developer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop mt-7.5 w-full border border-t border-[#696969]" />
      </div>
    </>
  );
}
