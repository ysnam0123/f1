'use client';
import { useEffect } from 'react';
import HighLights from './components/home/HighLights';
import LatestResult from './components/home/LatestResult';
import Ranks from './components/home/Ranks';
import Schedule from './components/home/Schedule';

import { supabase } from '@/supabase/client';
import { useLiveSession } from '@/hooks/LiveSession';
import { useNextMeeting } from '@/hooks/NextMeeting';
import { useMeetingsWithStatusAndPodium } from '@/hooks/SeasonRacePodium';

export default function Page() {
  const { data, isPending, isError } = useLiveSession();
  if (data) {
    console.log('라이브 세션:', data);
  }
  const { data: nextMeeting, isLoading } = useNextMeeting();
  if (nextMeeting) {
    console.log('다음 미팅:', nextMeeting);
  }

  const {
    data: meetings,
    isPending: load2025,
    error,
  } = useMeetingsWithStatusAndPodium(2025);

  if (meetings) {
    console.log('레이스와 포디움:', meetings);
  }

  return (
    <>
      <Schedule />

      <div className="mx-auto flex max-w-325 flex-col items-center gap-10">
        {/* <Results /> */}
        {/* <div className="flex min-h-167.5 w-full flex-col gap-12.5 md:flex-row">
          <Ranks />
          <LatestResult />
        </div>
        <div>
          <HighLights />
        </div> */}

        {/* <DriverCards /> */}
      </div>
    </>
  );
}
