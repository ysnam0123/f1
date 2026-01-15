import Image from 'next/image';

export default function NextSession() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-[30px] font-semibold text-(--color-title)">
            다음 일정
          </h1>
          <button className="cursor-pointer text-[16px] text-(--color-title) hover:text-[#F8F8F8]">
            자세히 보기
          </button>
        </div>
        <div className="flex w-full flex-col gap-6 rounded-[10px] border border-(--color-box-border) bg-(--color-box-bg) py-6 pl-6 lg:flex-row lg:gap-0 lg:py-7.5 lg:pl-8.75">
          {/* 다음 미팅 */}
          <div className="flex w-full flex-col border-b border-(--color-box-border) pb-4 lg:max-w-152.5 lg:shrink-0 lg:border-r lg:border-b-0 lg:border-(--color-box-border) lg:pr-6 lg:pb-0">
            <h1 className="text-[22px] font-semibold lg:text-[30px]">
              São Paulo Grand Prix
            </h1>
            <h1 className="mt-1 text-[14px] font-medium text-(--color-sub-text) lg:text-[18px]">
              FORMULA 1 ROLEX GRANDE PRÊMIO DE SÃO PAULO 2023
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-[14px] lg:text-[16px]">
              <p>Autodromo José Carlos Pace</p>
              <div className="hidden h-6 w-px bg-(--color-sub-text) lg:block" />
              <p>브라질</p>
              <Image src="/flag/brazil.svg" alt="flag" width={24} height={14} />
            </div>
          </div>

          {/* 다음 세션 */}
          <div className="flex w-full flex-col lg:max-w-60 lg:border-r lg:border-(--color-box-border) lg:px-5">
            <h1 className="font-semibold text-(--color-sub-text)">
              <span className="text-[14px] lg:text-[16px]">다음 세션:</span>
              <span className="ml-1 text-[18px] lg:text-[20px]">
                Qualifying
              </span>
            </h1>

            <div className="mt-3 flex flex-col gap-1 text-[18px] lg:mt-4 lg:text-[22px]">
              <p>2026.03.15</p>
              <p>15:00</p>
            </div>
          </div>

          {/* 서킷 */}
          <div className="hidden lg:px-7 xl:flex xl:max-w-62.5 xl:items-center xl:justify-center">
            <Image
              src="/circuit/brazil_interlagos.svg"
              alt="circuit"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </>
  );
}
