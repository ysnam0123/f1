import PodiumCard from '@/app/components/season/meetings/PodiumCard';
import StatsticsCard from '@/app/components/season/meetings/StatsticsCard';
import SeasonHeroBox from '@/app/components/season/SeasonHeroBox';

export default function page() {
  return (
    <>
      <SeasonHeroBox />
      <section className="mx-auto max-w-[1140px]">
        <div className="mb-[50px] grid grid-cols-3 gap-[30px]">
          <PodiumCard />
          <PodiumCard />
          <PodiumCard />
        </div>
        <div className="mb-[50px] min-h-[200px] w-[1140px] rounded-[10px] bg-[#1A1A1A] px-[70px] py-5">
          <table className="w-full border-collapse select-none">
            <thead>
              <tr className="border-b border-white text-center text-[20px] text-[#8B8B8B]">
                <th className="w-[60px] py-4">등수</th>
                <th className="px-4 py-4">이름</th>
                <th className="px-4 py-4">팀</th>
                <th className="w-[80px] py-4">Laps</th>
                <th className="px-4 py-4">시간</th>
                <th className="w-[80px] py-4 text-right">포인트</th>
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
          className="mb-[50px] text-[40px]"
          style={{ fontFamily: 'PartialSans' }}
        >
          STATSTICS
        </h1>
        <div className="grid grid-cols-3 gap-[33px]">
          <StatsticsCard title="Fastest Lap" />
          <StatsticsCard title="Safety Car" />
          <StatsticsCard title="Weather" />
          <StatsticsCard title="Fastest Pit Stop" />
          <StatsticsCard title="Retirements" />
          <StatsticsCard title="포지션 상승 TOP 3" />
          <StatsticsCard title="경고" />
        </div>
      </section>
    </>
  );
}
