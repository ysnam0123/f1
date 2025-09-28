import Image from 'next/image';
import zandvoort from '/public/circuit/zandvoort.jpg';

export default function Schedule() {
  return (
    <>
      <div className="relative flex min-w-[820px] min-h-[360px] bg-[#1a1a1a] select-none">
        <div className="">
          <div className="relative w-[1440px] h-[360px]">
            <Image
              src={zandvoort}
              alt="zandvoort"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute top-8 gap-3 flex flex-col justify-center px-[70px] z-20 text-white">
              <h1 className="font-bold text-[45px]">
                2025 FIA 포뮬러 1 월드 챔피언쉽™ 
              </h1>
              <p className="text-[18px]  font-semibold">
                다음 레이스 - 15라운드
              </p>
              <p className="text-[30px] font-bold">네덜란드 - ZandVoort</p>
              <p className="text-[18px]">8/29~8/31</p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 flex justify-center items-center bg-[#1A1A1A] h-full">
          <div className="relative flex flex-col w-[532px] gap-[25px] px-[25px] justify-center">
            <div className="flex ">
              <p className="mr-[33px]">08.29</p>
              <p className="mr-auto">프랙티스 1</p>
              <p>19:30 - 20:30</p>
            </div>
            <div className="flex">
              <p className="mr-[33px]">08.29</p>
              <p className="mr-auto">프랙티스 2</p>
              <p>19:30 - 20:30</p>
            </div>
            <div className="flex">
              <p className="mr-[33px]">08.29</p>
              <p className="mr-auto">프랙티스 3</p>
              <p>19:30 - 20:30</p>
            </div>
            <div className="flex">
              <p className="mr-[33px]">08.29</p>
              <p className="mr-auto">퀄리파잉</p>
              <p>19:30 - 20:30</p>
            </div>
            <div className="flex">
              <p className="mr-[33px]">08.29</p>
              <p className="mr-auto">레이스</p>
              <p>19:30 - 20:30</p>
            </div>
            <p className="absolute text-[10px] right-5 top-[-40px]">
              * 시간은 한국시간 기준입니다
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
