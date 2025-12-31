'use client';
import { ChevronDown } from 'lucide-react';
import GrandPrixCard from '../components/season/GrandPrixCard';
import SeasonHeroBox from '../components/season/SeasonHeroBox';
import { useEffect, useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { supabase } from '@/supabase/client';
import { Meeting } from '@/types/meeting';
import { fetchResult } from '../api/meeting/sessionResult';

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [selectedYear, setSelectedYear] = useState<'2025' | '2026'>('2025');

  useEffect(() => {
    const fetchMeetings = async () => {
      const { data, error } = await supabase
        .from('meetings')
        .select('*')
        .eq('year', selectedYear);
      if (error) {
        console.error(error);
        return;
      }
      setMeetings(data);
    };
    fetchMeetings();
  }, [selectedYear]);

  return (
    <>
      <main className="min-h-screen">
        <SeasonHeroBox />
        <section className="mx-auto w-full max-w-350">
          {/* 시즌 변경 버튼*/}
          <div className="relative">
            <button
              onClick={() => setOpened(!opened)}
              className="mb-10 flex h-12.5 w-36 cursor-pointer items-center justify-center gap-1 rounded-[10px] border border-white text-[20px] font-bold hover:bg-[#4b4b4b]"
            >
              <span>{selectedYear}</span>
              <ChevronDown
                className={`transition-transform ${opened ? 'rotate-180' : ''}`}
              />
            </button>
            {opened && (
              <AnimatedContent
                distance={3}
                direction="vertical"
                reverse={true}
                duration={0.6}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0}
                delay={0}
                className="absolute top-full"
              >
                <ul className="w-36 rounded-[10px] border border-white bg-black text-center text-[20px] font-bold">
                  <li
                    onClick={() => {
                      setSelectedYear(
                        selectedYear === '2025' ? '2026' : '2025',
                      );
                      setOpened(false);
                    }}
                    className="flex h-12.5 cursor-pointer items-center justify-center hover:bg-[#464646]"
                  >
                    {selectedYear === '2025' ? '2026' : '2025'}
                  </li>
                </ul>
              </AnimatedContent>
            )}
          </div>
          <div className="grid grid-cols-3 gap-10">
            {meetings.map((meeting) => (
              <GrandPrixCard key={meeting.meeting_key} meetingInfo={meeting} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

// useEffect(() => {
//   const insert2025meeting = async () => {
//     const meetings = await meetingData();

//     const { data:serverData, error } = await supabase
//       .from('meetings')
//       .upsert(meetings, { onConflict: 'meeting_key' })
//       .select();
//     console.log('data:', serverData);
//     console.log('error:', error);
//   };
//   insert2025meeting();
// }, []);

// 세션 결과 저장 완료

// useEffect(() => {
//   const fetchSessionResult = async () => {
//     const results = await fetchResult(1276);
//     const { data: serverData, error } = await supabase
//       .from('session_results')
//       .upsert(results, { onConflict: 'session_key,driver_number' })
//       .select();

//     console.log('data:', serverData);
//     console.log('error:', error);
//   };
//   fetchSessionResult();
// }, []);
