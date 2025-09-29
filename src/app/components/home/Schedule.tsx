import Image from 'next/image';
import zandvoort from '/public/circuit/zandvoort.jpg';

export default function Schedule() {
  return (
    <>
      <div className="relative flex min-h-[360px] min-w-[820px] bg-[#1a1a1a] select-none">
        <div className="">
          <div className="relative h-[360px] w-[1440px]">
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
              <p className="text-[18px] font-semibold">
                다음 레이스 - 15라운드
              </p>
              <p className="text-[30px] font-bold">네덜란드 - ZandVoort</p>
              <p className="text-[18px]">8/29~8/31</p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 flex h-full items-center justify-center bg-[#1A1A1A]">
          <div className="relative flex w-[532px] flex-col justify-center gap-[10px] px-[25px]">
            <div className="flex rounded-[8px] border-1 border-white px-3 py-[12px]">
              <p className="mr-[33px]">08.29</p>
              <p className="mr-auto">프랙티스 1</p>
              <p>19:30 - 20:30</p>
            </div>
            <div className="flex rounded-[8px] border-1 border-white px-3 py-[12px]">
              <p className="mr-[33px]">08.29</p>
              <p className="mr-auto">프랙티스 2</p>
              <p>19:30 - 20:30</p>
            </div>
            <div className="flex rounded-[8px] border-1 border-white px-3 py-[12px]">
              <p className="mr-[33px]">08.29</p>
              <p className="mr-auto">프랙티스 3</p>
              <p>19:30 - 20:30</p>
            </div>
            <div className="flex rounded-[8px] border-1 border-white px-3 py-[12px]">
              <p className="mr-[33px]">08.29</p>
              <p className="mr-auto">퀄리파잉</p>
              <p>19:30 - 20:30</p>
            </div>
            <div className="flex rounded-[8px] border-1 border-white px-3 py-[12px]">
              <p className="mr-[33px]">08.29</p>
              <p className="mr-auto">레이스</p>
              <p>19:30 - 20:30</p>
            </div>
            <p className="absolute top-[-25px] right-5 text-[10px]">
              * 시간은 한국시간 기준입니다
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
