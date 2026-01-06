'use client';
import SeasonHeroBox from '../components/season/SeasonHeroBox';
import GrandPrixCard from '../components/season/GrandPrixCard';
import { useEffect, useState } from 'react';
import { Meeting } from '@/types/meeting';
import { fetchMeetings } from '../api/meeting/Meetings';
import { useYearStore } from '@/store/YearStore';
import SeasonChangeButton from '../components/common/SeasonChangeButton';

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const selectedYear = useYearStore((s) => s.selectedYear);
  const setSelectedYear = useYearStore((s) => s.setSelectedYear);
  const years = [2023, 2024, 2025, 2026];

  useEffect(() => {
    const loadMeetings = async () => {
      const meetings = await fetchMeetings(selectedYear);
      setMeetings(meetings);
    };

    loadMeetings();
  }, [selectedYear]);

  return (
    <>
      <main className="min-h-screen">
        {/* <SeasonHeroBox /> */}
        <section className="mx-auto w-full max-w-350">
          <SeasonChangeButton
            opened={opened}
            setOpened={setOpened}
            years={years}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
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

// 세션 정보 저장
// useEffect(() => {
//   const fetchSessions = async () => {
//     const results = await fetchSession(1277);
//     const { data, error } = await supabase
//       .from('sessions')
//       .upsert(results, { onConflict: 'session_key' })
//       .select();
//     console.log('data:', data);
//     console.log('error:', error);
//   };
//   fetchSessions();
// }, []);

// 세션 결과 저장
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
