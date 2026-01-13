import { ArrowBigRight, Flame } from 'lucide-react';
import Image from 'next/image';

export default function Top3Position() {
  return (
    <>
      <div className="flex max-w-125 flex-col gap-3 rounded-4xl border border-[#262626] bg-[#161616] px-7.5 py-5">
        <h1 className="text-gray-420 mb-4 flex items-center gap-1">
          <Image src="/icons/graph.svg" alt="icon" width={28} height={28} />
          <p
            className="text-[20px] text-gray-400"
            style={{ fontFamily: 'paperlogy', fontWeight: 500 }}
          >
            포지션 상승 TOP 3
          </p>
        </h1>
        <div className="flex items-center justify-between gap-7.5 px-8">
          <p className="text-[18px] font-semibold">찰스 르끌레르</p>
          <div className="flex items-center gap-5 text-[22px] font-semibold">
            <p>15</p>
            <ArrowBigRight className="h-6 w-6" />
            <p>6</p>
          </div>
          <div className="relative flex items-center gap-2 text-[18px] font-semibold">
            <span>+ 9</span>
            <Flame className="absolute -right-8 text-[#FF5900]" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-7.5 px-8">
          <p className="text-[18px] font-semibold">찰스 르끌레르</p>
          <div className="flex items-center gap-5 text-[22px] font-semibold">
            <p>15</p>
            <ArrowBigRight className="h-6 w-6" />
            <p>6</p>
          </div>
          <div className="flex items-center gap-2 text-[18px] font-semibold">
            <span>+ 9</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-7.5 px-8">
          <p className="text-[18px] font-semibold">찰스 르끌레르</p>
          <div className="flex items-center gap-5 text-[22px] font-semibold">
            <p>15</p>
            <ArrowBigRight className="h-6 w-6" />
            <p>6</p>
          </div>
          <div className="flex items-center gap-2 text-[18px] font-semibold">
            <span>+ 9</span>
          </div>
        </div>
      </div>
    </>
  );
}
