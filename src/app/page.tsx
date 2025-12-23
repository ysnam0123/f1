'use client';
import { useEffect } from 'react';
// import DriverCards from './components/home/DriverCards';
import HighLights from './components/home/HighLights';
import LatestResult from './components/home/LatestResult';
import Ranks from './components/home/Ranks';
import Schedule from './components/home/Schedule';
import { latestRaceResult, latestRaceSession } from './api/f1/Meetings';
import { supabase } from '@/supabase/client';

export default function Page() {
  useEffect(() => {
    const insertTeams = async () => {
      const teamsData = [
        {
          name: 'Red Bull Racing',
          team_colour: '3671C6',
          team_slug: 'red-bull',
        },
      ];

      const { data, error } = await supabase
        .from('teams')
        .upsert(teamsData, {
          onConflict: 'name',
        })
        .select(); // returning 역할

      console.log('data:', data);
      console.log('error:', error);
    };

    insertTeams();
  }, []);

  useEffect(() => {
    latestRaceSession('latest');
    latestRaceResult();
  }, []);
  return (
    <>
      <Schedule />

      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-10">
        {/* <Results /> */}
        <div className="flex min-h-[670px] w-full flex-col gap-[50px] md:flex-row">
          <Ranks />
          <LatestResult />
        </div>
        <div>
          <HighLights />
        </div>

        {/* <DriverCards /> */}
      </div>
    </>
  );
}
