'use client';
import { driverDummyData, teamDummyData } from '@/app/dummy/data';
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import DriverCard from '../driver/DriverCard';

export default function Ranks() {
  const [driverRank, setDriverRank] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [teamRank, setTeamRank] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-5">
        {/* 순위표 */}
        <div className="flex gap-4 text-[20px] font-semibold">
          <button
            className={`cursor-pointer transition-all duration-150 ease-in ${
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
            className={`cursor-pointer transition-all duration-150 ease-in ${
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
        <div className="flex h-full w-full max-w-[885px] flex-col justify-center rounded-[15px] bg-[#1A1A1A] px-[30px] py-7 text-[12px] select-none">
          {driverRank && (
            <>
              <div className="desktop">
                <div className="mb-10 flex justify-between gap-10">
                  <DriverCard />
                  <DriverCard />
                  <DriverCard />
                </div>
              </div>
              <div className="mb-3 grid grid-cols-5 border-b-2 border-[#FFD700] px-[10px] pb-1 text-center text-[18px] font-semibold">
                <div>순위</div>
                <div>드라이버</div>
                <div>국적</div>
                <div>팀</div>
                <div>포인트</div>
              </div>

              {driverDummyData.slice(0, 5).map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-5 border-b border-[#333] py-2 text-center text-[16px]"
                >
                  <div>{row.rank}</div>
                  <div>{row.driver}</div>
                  <div>{row.nationality}</div>
                  <div>{row.team}</div>
                  <div>{row.points}</div>
                </div>
              ))}
              {showAll &&
                driverDummyData.slice(10).map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-5 border-b border-[#333] py-2 text-center text-[16px]"
                  >
                    <div>{row.rank}</div>
                    <div>{row.driver}</div>
                    <div>{row.nationality}</div>
                    <div>{row.team}</div>
                    <div>{row.points}</div>
                  </div>
                ))}
              {!showAll && (
                <div
                  className="mt-5 flex cursor-pointer items-center justify-center gap-0 text-[15px]"
                  onClick={() => setShowAll(true)}
                >
                  <p>더보기</p>
                  <ChevronDown />
                </div>
              )}
              {showAll && (
                <div
                  className="mt-5 flex cursor-pointer items-center justify-center gap-0 text-[15px]"
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
              <div className="mb-3 grid grid-cols-3 border-b-2 border-[#FFD700] px-[10px] pb-1 text-center text-[18px] font-semibold">
                <div>순위</div>
                <div>팀</div>
                <div>포인트</div>
              </div>
              {teamDummyData.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-3 border-b border-[#333] py-2 text-center text-[16px]"
                >
                  <div>{row.rank}</div>
                  <div>{row.team}</div>
                  <div>{row.points}</div>
                </div>
              ))}
              <div className="mt-5 flex cursor-pointer items-center justify-center gap-0 text-[15px]">
                <p>전체보기</p>
                <ChevronRight />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
