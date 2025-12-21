'use client';

import DriverDetail from '@/app/components/driver/DriverDetail';
import DriverHero from '@/app/components/driver/DriverHeroSec';
import { teams } from '@/data/teams';
import Image from 'next/image';
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

  return (
    <>
      {result && (
        <div className="mx-auto max-w-300">
          <DriverHero driver={result.driver} team={result.team} />
          <DriverDetail />
        </div>
      )}
    </>
  );
}
