'use client';
import { useEffect } from 'react';
// import DriverCards from './components/home/DriverCards';
import HighLights from './components/home/HighLights';
import LatestResult from './components/home/LatestResult';
import Ranks from './components/home/Ranks';
import Schedule from './components/home/Schedule';
import { latestRaceResult, latestRaceSession } from './api/f1/Meetings';

export default function Page() {
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
