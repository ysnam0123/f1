'use client';

import DriverDetail from '@/app/components/driver/DriverDetail';
import DriverHero from '@/app/components/driver/DriverHeroSec';
import { CareerOverview } from '@/app/components/driver/driverInfo/CareerOverview';
import { HistoricalStats } from '@/app/components/driver/driverInfo/HistoricalStats';
import { DriverPerformance } from '@/app/components/driver/DriverPerformance';
import DriverStats from '@/app/components/driver/DriverStats';
import { careerOverview, historicalStats } from '@/data/DriverDetailDummy';
import { teams } from '@/data/teams';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams<{ driverSlug: string }>();
  const result = teams
    .flatMap((team) =>
      team.drivers.map((driver) => ({
        driver,
        team,
      })),
    )
    .find(({ driver }) => driver.driverSlug === params.driverSlug);
  console.log(result);
  const dummySeasonResults = [
    { round: 1, race: 'Bahrain', position: 3, points: 15 },
    { round: 2, race: 'Saudi Arabia', position: 2, points: 18 },
    { round: 3, race: 'Australia', position: 1, points: 25 },
    { round: 4, race: 'Japan', position: 5, points: 10 },
    { round: 5, race: 'China', position: 4, points: 12 },
    { round: 6, race: 'Miami', position: 1, points: 25 },
    { round: 7, race: 'Emilia Romagna', position: 3, points: 15 },
    { round: 8, race: 'Monaco', position: 2, points: 18 },
    { round: 9, race: 'Canada', position: 6, points: 8 },
    { round: 10, race: 'Spain', position: 1, points: 26 },
    { round: 11, race: 'Austria', position: 4, points: 12 },
    { round: 12, race: 'Great Britain', position: 2, points: 18 },
    { round: 13, race: 'Hungary', position: 7, points: 6 },
    { round: 14, race: 'Belgium', position: 3, points: 15 },
    { round: 15, race: 'Netherlands', position: 1, points: 25 },
    { round: 16, race: 'Italy', position: 2, points: 19 },
    { round: 17, race: 'Azerbaijan', position: 'DNF', points: 0 },
    { round: 18, race: 'Singapore', position: 5, points: 10 },
    { round: 19, race: 'United States', position: 3, points: 15 },
    { round: 20, race: 'Mexico', position: 6, points: 8 },
  ];
  return (
    <>
      {result && (
        <div className="mx-auto max-w-300">
          <DriverHero driver={result.driver} team={result.team} />
          <DriverStats />
          <DriverPerformance
            results={dummySeasonResults}
            teamColor={result.team.colorFrom}
          />
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
