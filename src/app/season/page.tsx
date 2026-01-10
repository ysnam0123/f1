'use client';
import GrandPrixCard from '../components/season/GrandPrixCard';
import { useState } from 'react';
import { useYearStore } from '@/store/YearStore';
import SeasonChangeButton from '../components/common/SeasonChangeButton';
import { useMeetings } from '../api/meeting/Meetings';
import { useMeetingsWithStatusAndPodium } from '@/hooks/SeasonRacePodium';
import F1Loading from '../components/common/F1Loading';

export default function Page() {
  const [opened, setOpened] = useState(false);
  const selectedYear = useYearStore((s) => s.selectedYear);
  const setSelectedYear = useYearStore((s) => s.setSelectedYear);
  const years = [2023, 2024, 2025, 2026];

  // const { data: yearMeeting, isPending } = useMeetings(selectedYear);
  // const meetings = yearMeeting ?? [];
  const {
    data: meetings,
    isPending,
    error,
  } = useMeetingsWithStatusAndPodium(selectedYear);

  return (
    <>
      <main className="min-h-screen">
        {/* <SeasonHeroBox /> */}
        <section className="mx-auto w-full max-w-350">
          {isPending && (
            <>
              <div className="flex h-200 items-center justify-center">
                <F1Loading />
              </div>
            </>
          )}
          {!isPending && meetings && (
            <>
              <SeasonChangeButton
                opened={opened}
                setOpened={setOpened}
                years={years}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />
              <div className="grid grid-cols-3 gap-10">
                {meetings.map((meeting) => (
                  <GrandPrixCard
                    key={meeting.meeting_key}
                    meetingInfo={meeting}
                  />
                ))}
              </div>
            </>
          )}
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
