'use client';
import { motion } from 'framer-motion';
import { meetingData } from '@/app/api/f1/Meetings';
import { driverDummyData } from '@/app/dummy/data';
import { Meeting } from '@/types/meeting';
import { useEffect, useState } from 'react';

export default function Results() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [selectedMeeting, setSelectedMeeting] = useState(0);

  const tabs = ['프랙티스1', '프랙티스2', '프랙티스3', '퀄리파잉', '레이스'];
  const [resultSelected, setResultSelected] = useState(tabs[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await meetingData();
        setMeetings(data);
      } catch (error) {
        console.error('Error fetching meetings:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log(selectedMeeting);
  }, [selectedMeeting]);
  return (
    <>
      <div className="flex flex-col gap-5 select-none">
        <p className="text-[25px] font-bold">그랑프리 결과</p>
        <div className="h-[600px] w-[1300px] rounded-[10px] bg-[#1A1A1A] p-[60px]">
          <div className="flex h-[490px] gap-10">
            <div className="hide-scrollbar flex h-full flex-1 flex-col overflow-y-auto rounded-[20px] bg-[#202020]">
              {meetings &&
                meetings.map((m) => (
                  <button
                    key={m.meeting_key}
                    className="h-[80px] cursor-pointer py-3 pl-[30px] text-start text-[18px] hover:bg-[#3b3b3b]"
                    onClick={() => setSelectedMeeting(m.meeting_key)}
                  >
                    {m.meeting_name} - {m.circuit_short_name}
                  </button>
                ))}
            </div>
            <div className="flex h-[490px] flex-2 flex-col rounded-[20px]">
              <ul className="relative mb-2 flex rounded-[10px]">
                {tabs.map((tab, idx) => (
                  <li
                    key={idx}
                    className={`h-[50px] w-[152px] flex-1 cursor-pointer rounded-[3px] py-3 text-center hover:bg-[#2a2a2a]`}
                    onClick={() => setResultSelected(tab)}
                  >
                    <p className="relative z-10">{tab}</p>
                  </li>
                ))}
                <motion.div
                  className="absolute left-0 h-[50px] w-[152px] rounded-[5px] bg-[#c7a900]"
                  animate={{
                    x: tabs.indexOf(resultSelected) * 152, // li width와 동일
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300, // 강하게 튕김
                    damping: 20, // 마찰
                  }}
                />
              </ul>
              <div className="hide-scrollbar overflow-y-scroll border-1 border-[#202020] bg-[#202020] px-5">
                <div className="sticky top-0 mb-2 grid h-[40px] grid-cols-7 border-b-1 border-[#a8a8a8] bg-[#202020] px-[10px] pt-[5px] text-center text-[15px] font-semibold">
                  <div>순위</div>
                  <div>드라이버 번호</div>
                  <div>드라이버</div>
                  <div>팀</div>
                  <div>랩</div>
                  <div>시간</div>
                  <div>포인트</div>
                </div>
                <div className="">
                  {driverDummyData.map((row, idx) => (
                    <div
                      key={idx}
                      className="group mb-3 grid cursor-pointer grid-cols-6 rounded-[10px] border border-[#333] py-3 text-center text-[16px] transition-all duration-300 ease-in hover:scale-105 hover:scale-y-150 hover:bg-red-600"
                    >
                      <div>{row.rank}</div>
                      <div>{row.number}</div>
                      <div>{row.driver}</div>
                      <div>{row.nationality}</div>
                      <div>{row.team}</div>
                      <div>{row.points}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
