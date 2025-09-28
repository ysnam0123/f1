'use client';
import { driverDummyData, teamDummyData } from '@/app/dummy/data';
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Ranks() {
  const [driverRank, setDriverRank] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [teamRank, setTeamRank] = useState(false);
  return (
    <>
      {/* 순위표 */}
      <div className="flex gap-4 font-semibold text-[20px] mb-[20px]">
        <button
          className={`transition-all duration-150 ease-in cursor-pointer ${
            driverRank ? 'text-[#E10600]' : 'text-white'
          }`}
          onClick={() => {
            setTeamRank(false);
            setDriverRank(true);
          }}
        >
          드라이버 순위
        </button>
        <button
          className={`transition-all duration-150 ease-in cursor-pointer ${
            teamRank ? 'text-[#E10600]' : 'text-white'
          }`}
          onClick={() => {
            setTeamRank(true);
            setDriverRank(false);
            setShowAll(false);
          }}
        >
          팀 순위
        </button>
      </div>
      <div className="bg-[#1A1A1A] text-[12px] h-full w-[1300px] flex flex-col justify-center rounded-[15px] px-[60px] py-7 select-none">
        {driverRank && (
          <>
            <div className="text-[18px] pb-1 px-[10px] font-semibold grid grid-cols-6 text-center border-b-2 border-[#FFD700] mb-3">
              <div>순위</div>
              <div>드라이버</div>
              <div>드라이버 번호</div>
              <div>국적</div>
              <div>팀</div>
              <div>포인트</div>
            </div>
            {driverDummyData.slice(0, 10).map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-6 text-center text-[16px] py-2 border-b border-[#333]"
              >
                <div>{row.rank}</div>
                <div>{row.driver}</div>
                <div>{row.number}</div>
                <div>{row.nationality}</div>
                <div>{row.team}</div>
                <div>{row.points}</div>
              </div>
            ))}
            {showAll &&
              driverDummyData.slice(10).map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-6 text-center text-[16px] py-2 border-b border-[#333]"
                >
                  <div>{row.rank}</div>
                  <div>{row.driver}</div>
                  <div>{row.number}</div>
                  <div>{row.nationality}</div>
                  <div>{row.team}</div>
                  <div>{row.points}</div>
                </div>
              ))}
            {!showAll && (
              <div
                className="flex gap-0 text-[15px] items-center justify-center mt-5 cursor-pointer"
                onClick={() => setShowAll(true)}
              >
                <p>더보기</p>
                <ChevronDown />
              </div>
            )}
            {showAll && (
              <div
                className="flex gap-0 text-[15px] items-center justify-center mt-5 cursor-pointer"
                onClick={() => setShowAll(false)}
              >
                <p>접기</p>
                <ChevronUp />
              </div>
            )}
          </>
        )}

        {teamRank && (
          <>
            <div className="text-[18px] pb-1 px-[10px] font-semibold grid grid-cols-3 text-center border-b-2 border-[#FFD700] mb-3">
              <div>순위</div>
              <div>팀</div>
              <div>포인트</div>
            </div>
            {teamDummyData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 text-center text-[16px] py-2 border-b border-[#333]"
              >
                <div>{row.rank}</div>
                <div>{row.team}</div>
                <div>{row.points}</div>
              </div>
            ))}
            <div className="flex gap-0 text-[15px] items-center justify-center mt-5 cursor-pointer">
              <p>전체보기</p>
              <ChevronRight />
            </div>
          </>
        )}
      </div>
    </>
  );
}
