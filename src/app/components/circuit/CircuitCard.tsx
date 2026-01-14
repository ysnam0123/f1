import Image from 'next/image';

export default function CircuitCard() {
  return (
    <>
      <div className="flex h-50 w-90 flex-col border border-[#4C4C4C] bg-[#111111] px-3.75 py-5">
        <h1 className="mb-3.75">
          Autodromo Internazionale Enzo e Dino Ferrari
        </h1>
        <div className="flex items-center">
          <div className="flex flex-col sm:w-52.5">
            <div className="flex items-center gap-1 border-b border-[#5B5B5B] pb-3.75">
              <Image
                src={'/flag/argentina.svg'}
                alt="flag"
                width={25}
                height={15}
              />
              <p className="text-[14px]">아르헨티나</p>
            </div>
            <div className="mx-2.5 flex items-center gap-5 pt-3.75">
              <div className="flex flex-col items-center">
                <h2 className="text-[14px] text-[#5E5E5E]">랩 수</h2>
                <p className="text-[18px]">52</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-[14px] text-[#5E5E5E]">서킷 길이</h2>
                <p className="text-[18px]">6.432</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-[14px] text-[#5E5E5E]">첫 그랑프리</h2>
                <p className="text-[18px]">2004</p>
              </div>
            </div>
          </div>
          <Image
            src={'/circuit/china_shanghai.svg'}
            width={100}
            height={100}
            alt="circuit"
          />
        </div>
      </div>
    </>
  );
}
