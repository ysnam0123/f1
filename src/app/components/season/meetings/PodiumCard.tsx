import Image from 'next/image';

export default function PodiumCard() {
  return (
    <>
      <div className="relative h-[236px] min-w-[256px] overflow-hidden rounded-br-2xl">
        <Image
          src="/cardBg.png"
          alt="bg"
          fill
          className="absolute inset-0 z-0 object-cover"
        />
        <Image
          src="/drivers/MaxVerstappen.png"
          alt="driver"
          width={160}
          height={160}
          className="absolute bottom-[65px] left-1/2 z-10 -translate-x-1/2"
        />
        <div className="absolute bottom-0 z-20 flex w-full justify-between bg-white px-[15px] py-[13px]">
          <div className="flex flex-col gap-[2px] text-[#373737]">
            <span className="text-[14px] font-medium">Max</span>
            <span className="text-[17px] font-bold">VERSTAPPEN</span>
          </div>

          <div className="relative h-[39px] w-[60px]">
            <Image
              src="/team/benz.png"
              alt="team"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
