'use client';
import { useMeetingData } from '@/app/api/meeting/Meetings';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GrandPrixList({
  selectedMeeting,
  setSelectedMeetingAction,
}: {
  selectedMeeting: number;
  setSelectedMeetingAction: (meeting: number) => void;
}) {
  const { data, isPending } = useMeetingData();

  useEffect(() => {
    console.log(selectedMeeting);
    console.log(data?.findIndex((m) => m.meeting_key === selectedMeeting));
  }, [selectedMeeting, data]);
  return (
    <>
      <div className="hide-scrollbar relative flex h-full flex-1 flex-col overflow-y-auto rounded-[20px] bg-[#202020]">
        {!isPending &&
          data &&
          data.map((m) => (
            <button
              key={m.meeting_key}
              className="h-[80px] w-[410px] cursor-pointer py-3 pl-[30px] text-start text-[18px] hover:bg-[#3b3b3b]"
              onClick={() => setSelectedMeetingAction(m.meeting_key)}
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
              y: data.findIndex((m) => m.meeting_key === selectedMeeting) * 50,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          />
        )}
      </div>
    </>
  );
}
