import { teams } from '@/data/teams';
import DriverListCard from '../components/driver/DriverListCard';

export default function page() {
  const result = teams.flatMap((team) =>
    team.drivers.map((driver) => ({
      driver,
      team,
    })),
  );
  console.log('result:', result);
  return (
    <>
      <div className="mx-auto max-w-[1260px]">
        <section className="grid grid-cols-4 gap-5">
          {result.map((data) => (
            <DriverListCard
              key={data.driver.driverSlug}
              team={data.team}
              driver={data.driver}
            />
          ))}
        </section>
      </div>
    </>
  );
}
