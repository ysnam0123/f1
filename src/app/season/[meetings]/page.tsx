import PodiumCard from '@/app/components/season/meetings/PodiumCard';
import StatsticsCard from '@/app/components/season/meetings/StatsticsCard';
import SeasonHeroBox from '@/app/components/season/SeasonHeroBox';
import Image from 'next/image';

export default function page() {
  return (
    <>
      <SeasonHeroBox />
      <section className="mx-auto max-w-285">
        <div className="mb-12.5 grid grid-cols-3 gap-7.5">
          <PodiumCard />
          <PodiumCard />
          <PodiumCard />
        </div>
        <div className="mb-12.5 min-h-50 w-285 rounded-[10px] bg-[#1A1A1A] px-17.5 py-5">
          <table className="w-full border-collapse select-none">
            <thead>
              <tr className="border-b border-white text-center text-[20px] text-[#8B8B8B]">
                <th className="w-15 py-4">등수</th>
                <th className="px-4 py-4">이름</th>
                <th className="px-4 py-4">팀</th>
                <th className="w-20 py-4">Laps</th>
                <th className="px-4 py-4">시간</th>
                <th className="w-20 py-4 text-right">포인트</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#2A2A2A] text-center text-[16px]">
                {/* hover:bg-[#202020] */}
                <td className="py-4">4</td>
                <td className="px-4 py-4 font-bold">랜도 노리스</td>
                <td className="px-4 py-4">McLaren</td>
                <td className="py-4">57</td>
                <td className="px-4 py-4">+12.303s</td>
                <td className="py-4 text-right font-bold">24</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-b border-[#2A2A2A] text-center text-[16px]">
                {/* hover:bg-[#202020] */}
                <td className="py-4">4</td>
                <td className="px-4 py-4 font-bold">랜도 노리스</td>
                <td className="px-4 py-4">McLaren</td>
                <td className="py-4">57</td>
                <td className="px-4 py-4">+12.303s</td>
                <td className="py-4 text-right font-bold">24</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-b border-[#2A2A2A] text-center text-[16px]">
                {/* hover:bg-[#202020] */}
                <td className="py-4">4</td>
                <td className="px-4 py-4 font-bold">랜도 노리스</td>
                <td className="px-4 py-4">McLaren</td>
                <td className="py-4">57</td>
                <td className="px-4 py-4">+12.303s</td>
                <td className="py-4 text-right font-bold">24</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-b border-[#2A2A2A] text-center text-[16px]">
                {/* hover:bg-[#202020] */}
                <td className="py-4">4</td>
                <td className="px-4 py-4 font-bold">랜도 노리스</td>
                <td className="px-4 py-4">McLaren</td>
                <td className="py-4">57</td>
                <td className="px-4 py-4">+12.303s</td>
                <td className="py-4 text-right font-bold">24</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1
          className="mb-12.5 text-[40px]"
          style={{ fontFamily: 'PartialSans' }}
        >
          STATSTICS
        </h1>
        <div className="mb-8.25 grid grid-cols-3 gap-8.25">
          <StatsticsCard title="Fastest Lap" />
          <StatsticsCard title="Safety Car" />
          <StatsticsCard title="Weather" />
          <StatsticsCard title="Fastest Pit Stop" />
          <StatsticsCard title="Retirements" />
          <StatsticsCard title="포지션 상승 TOP 3" />
        </div>
        <div className="">
          <div className="min-h-175 w-187.25 rounded-[40px] bg-[#1A1A1A] px-17.5 py-4.5">
            <table className="w-full border border-white">
              <thead className="mb-3 text-[24px]">
                <tr>
                  <th className="w-[40%]">팀</th>
                  <th className="w-[30%] text-center">피트스탑</th>
                  <th className="w-[30%] text-center">포인트</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/alpine.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/alpine.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
                <tr className="text-[20px]">
                  <td className="flex items-center justify-center gap-15 py-3">
                    <Image
                      src="/smallLogos/redBullRacing.svg"
                      alt="logo"
                      width={85}
                      height={50}
                    />
                    <p className="max-w-35 truncate">알핀</p>
                  </td>
                  <td className="py-3 text-center">3회</td>
                  <td className="py-3 text-center font-semibold">20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
