import Image from 'next/image';

export default function FastestPitStop() {
  return (
    <>
      <div className="flex max-w-125 flex-col gap-3 rounded-4xl border border-[#262626] bg-[#161616] px-7.5 py-5">
        <h1 className="text-gray-420 flex items-center gap-1">
          <Image src="/icons/pitstop.svg" alt="icon" width={28} height={28} />
          <p
            className="text-[20px] text-gray-400"
            style={{ fontFamily: 'paperlogy', fontWeight: 500 }}
          >
            Best 피트 스탑
          </p>
        </h1>
        <div
          style={{ fontFamily: 'RiaSans', fontWeight: 700 }}
          className="flex items-center justify-between px-10"
        >
          <div className="flex flex-col items-center">
            <Image
              src={'/team_main_logo/audi.svg'}
              alt="teamLogo"
              width={130}
              height={70}
            />
            <p className="text-[24px]">Audi</p>
          </div>
          <span className="text-[32px]">+ 2.3 s</span>
        </div>
      </div>
    </>
  );
}
