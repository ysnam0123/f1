import Image from 'next/image';
import zandvoort from '/public/circuit/zandvoort.jpg';

export default function ScheduleHero() {
  return (
    <>
      <div className="h-[360px] w-screen">
        <Image
          src={zandvoort}
          alt="zandvoort"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute top-8 z-20 flex flex-col justify-center gap-3 px-[70px] text-white">
          <h1 className="text-[45px] font-bold">
            2025 FIA 포뮬러 1 월드 챔피언쉽™ 
          </h1>
          <p className="text-[18px] font-semibold">다음 레이스 - 15라운드</p>
          <p className="text-[30px] font-bold">네덜란드 - ZandVoort</p>
          <p className="text-[18px]">8/29~8/31</p>
        </div>
      </div>
    </>
  );
}
