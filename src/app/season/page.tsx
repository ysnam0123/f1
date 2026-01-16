'use client';

import { useEffect, useState } from 'react';
import { useYearStore } from '@/store/YearStore';
import SeasonChangeButton from '../components/common/SeasonChangeButton';
import {
  fetchMeetingsFromAPI,
  syncMeetingsFromAPI,
  useMeetings,
} from '../api/meeting/Meetings';
import { useMeetingsWithStatusAndPodium } from '@/hooks/SeasonRacePodium';
import F1Loading from '../components/common/F1Loading';
import GrandPrixCardWithPodium from '../components/season/GrandPrixCardWithPodium';

export default function Page() {
  const [opened, setOpened] = useState(false);
  const selectedYear = useYearStore((s) => s.selectedYear);
  const setSelectedYear = useYearStore((s) => s.setSelectedYear);
  const years = [2023, 2024, 2025, 2026];
  const {
    data: meetings,
    isPending,
    error,
  } = useMeetingsWithStatusAndPodium(selectedYear);

  // const { data: seaon2026, isPending: s2026pending } = useMeetings(2026);
  // if (seaon2026) {
  //   console.log('2026:', seaon2026);
  // }
  // useEffect(() => {
  //   fetchMeetingsFromAPI(2026);
  // }, []);

  return (
    <>
      <main className="min-h-screen">
        {/* <SeasonHeroBox /> */}
        <section className="mx-auto w-full max-w-350">
          {isPending && (
            <>
              <div className="flex h-200 items-center justify-center">
                <F1Loading loadingText="시즌 불러오는중..." />
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
                  <GrandPrixCardWithPodium
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
