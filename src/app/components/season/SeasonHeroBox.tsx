import Image from 'next/image';

export default function SeasonHeroBox() {
  return (
    <>
      <div className="relative mb-12.5 h-70 select-none">
        <div className="absolute inset-0 z-0 h-70 w-screen">
          <Image
            src="/circuit/zandvoort2.svg"
            alt="bg"
            width={1440}
            height={567}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute top-10 left-17.5 w-full">
          <h1 className="mb-10 text-[45px] font-bold">
            2025 FIA 포뮬러 1 월드 챔피언쉽™ 
          </h1>
          <div className="mr-17.5 flex w-full justify-between">
            <div className="mr-auto">
              <h3 className="text-[25px] font-semibold">
                다음 일정 {'>'} 라운드 15
              </h3>
              <h2 className="text-[40px] font-bold">네덜란드</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
