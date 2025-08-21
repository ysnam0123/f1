import Image from 'next/image';
import zandvoort from '/public/circuit/zandvoort.jpg';

export default function Schedule() {
  return (
    <>
      <div className="flex min-h-[300px] bg-[#1a1a1a] rounded-[20px] select-none">
        <div className="px-5 py-[30px]">
          <div className="relative w-[405px] h-[250px]">
            <Image
              src={zandvoort}
              alt="zandvoort"
              className="w-full h-full object-cover rounded-[20px]"
            />
            <div className="absolute inset-0 bg-black opacity-60 rounded-[20px]"></div>
            <div className="absolute top-10 gap-2 flex flex-col justify-center px-4 z-20 text-white">
              <p className="text-[13px]  font-semibold">
                다음 레이스 - 15라운드
              </p>
              <p className="text-[22px] font-bold">네덜란드 - ZandVoort</p>
              <p className="text-[15px]">8/29~8/31</p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col w-[432px] gap-[25px] px-[25px] justify-center">
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
          <p className="absolute text-[10px] right-5 top-2">
            * 시간은 한국시간 기준입니다
          </p>
        </div>
      </div>
    </>
  );
}
