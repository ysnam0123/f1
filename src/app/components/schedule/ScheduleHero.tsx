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

<div className="relative min-h-screen">
  <div className="absolute inset-0 z-0">
    <Image
      src="/circuit/zandvoort2.svg"
      alt="bg"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>
  <div className="relative z-20 p-10">
    <h1 className="mb-10 text-[45px] font-bold">
      2025 FIA 포뮬러 1 월드 챔피언쉽™
    </h1>
    <div className="flex w-full justify-between">
      <div>
        <h3 className="text-[25px] font-semibold">다음 일정 {'>'} 라운드 15</h3>
        <h2 className="text-[40px] font-bold">네덜란드</h2>
      </div>
      <div className="h-[380px] w-[868px] rounded-[10px] bg-[#0B0B0B]"></div>
    </div>
  </div>
</div>;
