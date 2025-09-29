'use client';
import { motion } from 'framer-motion';
import { useMeetingData } from '@/app/api/f1/Meetings';
import { useEffect, useState } from 'react';

export default function Results() {
  const [selectedMeeting, setSelectedMeeting] = useState(0);

  const tabs = ['레이스', '프랙티스1', '프랙티스2', '프랙티스3', '퀄리파잉'];
  const [resultSelected, setResultSelected] = useState(tabs[0]);
  const { data, isPending } = useMeetingData();

  useEffect(() => {
    console.log(selectedMeeting);
    console.log(data?.findIndex((m) => m.meeting_key === selectedMeeting));
  }, [selectedMeeting, data]);
  return (
    <>
      <div className="flex flex-col gap-5 select-none">
        <p className="text-[25px] font-bold">그랑프리 결과</p>
        <div className="w-[1300px] rounded-[10px] bg-[#0b0b0b] p-[20px]">
          <div className="flex h-[490px] gap-10">
            <div className="hide-scrollbar relative flex h-full flex-1 flex-col overflow-y-auto rounded-[20px] bg-[#202020]">
              {!isPending &&
                data &&
                data.map((m) => (
                  <button
                    key={m.meeting_key}
                    className="h-[80px] w-[410px] cursor-pointer py-3 pl-[30px] text-start text-[18px] hover:bg-[#3b3b3b]"
                    onClick={() => setSelectedMeeting(m.meeting_key)}
                  >
                    <p className="relative z-10">
                      {m.meeting_name} - {m.circuit_short_name}
                    </p>
                  </button>
                ))}
              {data && (
                <motion.div
                  className="absolute left-0 h-[50px] w-[410px] rounded-[5px] bg-[#787878]"
                  animate={{
                    y:
                      data.findIndex((m) => m.meeting_key === selectedMeeting) *
                      50,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              )}
            </div>
            <div className="flex h-[490px] flex-2 flex-col rounded-[20px]">
              <ul className="relative flex rounded-[10px]">
                {tabs.map((tab, idx) => (
                  <li
                    key={idx}
                    className={`flex h-[45px] w-[163px] flex-1 cursor-pointer items-center justify-center rounded-[3px] text-center hover:bg-[#2a2a2a]`}
                    onClick={() => setResultSelected(tab)}
                  >
                    <p className="relative z-10">{tab}</p>
                  </li>
                ))}
                <motion.div
                  className="absolute left-0 h-[45px] w-[163px] rounded-[5px] bg-[#787878]"
                  animate={{
                    x: tabs.indexOf(resultSelected) * 163, // li width와 동일
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200, // 강하게 튕김
                    damping: 30, // 마찰
                  }}
                />
              </ul>
              <div className="hide-scrollbar h-full overflow-y-scroll rounded-b-[10px] border-1 border-[#202020] bg-[#202020] px-5">
                <div className="sticky top-0 mb-2 grid h-[40px] grid-cols-7 border-b-1 border-[#a8a8a8] bg-[#202020] px-[10px] pt-[8px] text-center text-[15px] font-semibold">
                  <div>순위</div>
                  <div>드라이버 번호</div>
                  <div>드라이버</div>
                  <div>팀</div>
                  <div>랩</div>
                  <div>시간</div>
                  <div>포인트</div>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// {driverDummyData.map((row, idx) => (
//   <div
//     key={idx}
//     className="group mb-3 grid grid-cols-6 rounded-[10px] border border-[#333] py-3 text-center text-[16px]"
//   >
//     {/* transition-all duration-300 ease-in hover:scale-105 hover:scale-y-150 hover:bg-red-600 cursor-pointer */}
//     <div>{row.rank}</div>
//     <div>{row.number}</div>
//     <div>{row.driver}</div>
//     <div>{row.nationality}</div>
//     <div>{row.team}</div>
//     <div>{row.points}</div>
//   </div>
// ))}
