import Image from 'next/image';
import ResultRanking from './ResultRanking';

export default function LatestResult() {
  return (
    <>
      <section className="flex w-full flex-col select-none">
        <div className="mb-[20px] text-[20px] font-semibold">최근 경기</div>
        <div className="h-[670px] min-w-[365px] rounded-2xl border-1 border-[#6B6B6B] pt-[22px] pr-[15px] pl-[10px]">
          <div className="flex items-center justify-between border-b-1 border-[#A6A6A6] pr-[10px] pb-[5px]">
            <Image src="/f1White.svg" alt="logo" width={125} height={50} />
            <p className="text-[18px] font-bold">23라운드</p>
          </div>
          <div className="flex items-center gap-2 border-b-1 border-[#A6A6A6] py-3 pr-3 text-[16px] font-bold">
            <Image
              src="/flag/qatar.svg"
              alt="flag"
              width={25}
              height={15}
              className="ml-auto"
            />{' '}
            <span>카타르 그랑프리</span>
          </div>
          <ResultRanking />
          <ResultRanking />
          <ResultRanking />
          <ResultRanking />
          <ResultRanking />
          <ResultRanking />
          <ResultRanking />
          <ResultRanking />
          <ResultRanking />
          <ResultRanking />
        </div>
      </section>
    </>
  );
}
