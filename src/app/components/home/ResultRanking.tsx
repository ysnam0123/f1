import Image from 'next/image';

export default function ResultRanking() {
  return (
    <>
      <div className="flex h-[49px] items-center justify-between border-b-1 border-[#A6A6A6] px-3 text-[18px] font-bold">
        <span>1</span>
        <Image
          src="/smallLogos/redBullRacing.png"
          alt="teamLogo"
          width={47}
          height={39}
        />
        <span>VER</span>
        <span>1:24:38.241</span>
      </div>
    </>
  );
}
