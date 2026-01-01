export default function SessionResultSection() {
  return (
    <>
      <table className="w-full border-collapse select-none">
        <thead>
          <tr className="border-b border-white text-center text-[20px] text-[#8B8B8B]">
            <th className="w-15 py-4">등수</th>
            <th className="px-4 py-4">이름</th>
            <th className="px-4 py-4">팀</th>
            <th className="w-20 py-4">Laps</th>
            <th className="px-4 py-4">시간</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#2A2A2A] text-center text-[16px]">
            <td className="py-4">4</td>
            <td className="px-4 py-4 font-bold">랜도 노리스</td>
            <td className="px-4 py-4">McLaren</td>
            <td className="py-4">57</td>
            <td className="px-4 py-4">+12.303s</td>
            <td className="py-4 text-right font-bold">24</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
