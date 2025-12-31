'use client';
import { useEffect } from 'react';
import HighLights from './components/home/HighLights';
import LatestResult from './components/home/LatestResult';
import Ranks from './components/home/Ranks';
import Schedule from './components/home/Schedule';

import { supabase } from '@/supabase/client';
import { latestRaceResult, sessionResult } from './api/meeting/sessionResult';

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
        .select();

      console.log('data:', data);
      console.log('error:', error);
    };

    insertTeams();
  }, []);

  useEffect(() => {
    sessionResult('latest');
    latestRaceResult();
  }, []);
  return (
    <>
      <Schedule />

      <div className="mx-auto flex max-w-325 flex-col items-center gap-10">
        {/* <Results /> */}
        <div className="flex min-h-167.5 w-full flex-col gap-12.5 md:flex-row">
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
