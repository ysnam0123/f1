import { teams } from '@/data/teams';
import { SessionResult } from '@/types/meeting';
import Image from 'next/image';

interface SessionResults {
  sessionResults: SessionResult[];
}

export default function SessionResultSection({
  sessionResults,
}: SessionResults) {
  const sortedByPosition = [...sessionResults].sort((a, b) => {
    if (a.position == null) return 1;
    if (b.position == null) return -1;
    return a.position - b.position;
  });
  const mappedResults = sortedByPosition.map((result) => {
    // some : 하위 배열에 조건을 만족하는 요소가 존재하는지 boolean으로 판단
    const team = teams.find((team) =>
      team.drivers.some((driver) => driver.number === result.driver_number),
    );
    const driver = team?.drivers.find(
      (driver) => driver.number === result.driver_number,
    );
    return {
      ...result,
      teamName: team?.name,
      teamKrName: team?.krName,
      teamColorFrom: team?.colorFrom,
      teamLogo: team?.logo,
      driverName: driver?.name,
      driverKrName: driver?.krName,
      driverImage: driver?.image,
    };
  });
  return (
    <>
      <table className="w-full table-fixed border-collapse select-none">
        <thead>
          <tr className="border-b border-white text-[20px] text-[#8B8B8B]">
            <th className="w-25 shrink-0 px-4 py-4">등수</th>
            <th className="max-w-70 px-4 py-4 text-left">이름</th>
            <th className="max-w-70 px-4 py-4 text-left">팀</th>
            <th className="w-20 px-4 py-4">Laps</th>
            <th className="w-28 px-4 py-4">시간</th>
          </tr>
        </thead>
        <tbody>
          {mappedResults.map((result) => (
            <tr
              key={result.driver_number}
              className="border-b border-[#2A2A2A] text-[16px]"
            >
              <td className="px-4 py-4 text-center">{result.position}</td>
              <td className="px-4 py-4 font-bold">
                <div className="flex justify-start gap-2">
                  <div>{result.driver_number}</div>
                  <div className="truncate">{result.driverKrName}</div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center justify-start gap-2">
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: result.teamColorFrom }}
                  >
                    <Image
                      src={result.teamLogo!}
                      alt="teamLogo"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>{result.teamKrName}</div>
                </div>
              </td>
              <td className="px-4 py-4 text-center">{result.number_of_laps}</td>
              <td className="py-4 text-center">+ {result.gap_to_leader}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
