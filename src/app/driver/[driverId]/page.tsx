'use client';

import DriverDetail from '@/app/components/driver/DriverDetail';
import DriverHero from '@/app/components/driver/DriverHero';
import { CareerOverview } from '@/app/components/driver/driverInfo/CareerOverview';
import { HistoricalStats } from '@/app/components/driver/driverInfo/HistoricalStats';
import { DriverPerformance } from '@/app/components/driver/DriverPerformance';
import DriverStats from '@/app/components/driver/DriverStats';
import { careerOverview, historicalStats } from '@/data/DriverDetailDummy';
import { useDriverDetailData } from '@/hooks/detailPage/DriverDetail';
import { supabase } from '@/supabase/client';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams<{ driverId: string }>();
  const driverId = Number(params.driverId);
  const { data: driverDetailData, isLoading } = useDriverDetailData(driverId);
  console.log(driverDetailData);

  return (
    <>
      {driverDetailData && (
        <div className="mx-auto max-w-300">
          <DriverHero data={driverDetailData} />
          <DriverStats />
          {/* <DriverPerformance
            results={dummySeasonResults}
            teamColor={result.team.colorFrom}
          /> */}
          <CareerOverview
            summary={careerOverview.summary}
            milestones={careerOverview.milestones}
          />

          <HistoricalStats
            careerStats={historicalStats.careerStats}
            teamHistory={historicalStats.teamHistory}
          />
        </div>
      )}
    </>
  );
}
