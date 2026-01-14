import { StatCard } from '../team/StatCard';

export default function DriverStats() {
  return (
    <>
      <div className="mb-10 grid grid-cols-1 gap-4 border-y border-[#4C4C4C] py-12 pt-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Points" value={2} teamColor={'#ffffff'} />
        <StatCard label="Total Points" value={2} teamColor={'#ffffff'} />
        <StatCard label="Total Points" value={2} teamColor={'#ffffff'} />
        <StatCard label="Total Points" value={2} teamColor={'#ffffff'} />
      </div>
    </>
  );
}
