'use client';
import { useState } from 'react';
import GrandPrixList from '../result/GrandPrixList';
import MovingTab from '../common/MovingTab';
import ResultTable from '../result/ResultTable';

export default function Results() {
  const [selectedMeeting, setSelectedMeeting] = useState(0);

  const tabs = ['레이스', '프랙티스1', '프랙티스2', '프랙티스3', '퀄리파잉'];
  const [selectedResult, setSelectedResult] = useState(tabs[0]);

  return (
    <>
      <div className="flex flex-col gap-5 select-none">
        <p className="text-[25px] font-bold">그랑프리 결과</p>
        <div className="w-[1300px] rounded-[10px] bg-[#0b0b0b] p-[20px]">
          <div className="flex h-[490px] gap-10">
            <GrandPrixList
              selectedMeeting={selectedMeeting}
              setSelectedMeetingAction={setSelectedMeeting}
            />
            <div className="flex h-[490px] flex-2 flex-col rounded-[20px]">
              <MovingTab
                tabs={tabs}
                selectedTab={selectedResult}
                setSelectedTab={setSelectedResult}
              />
              <ResultTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
