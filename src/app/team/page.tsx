'use client';
import Team from '../components/team/Team';
import { teams } from '@/data/teams';
export default function page() {
  return (
    <>
      <div className="mx-auto flex max-w-325 flex-col select-none">
        <h1 className="font-paperlogy mb-12.5 text-[30px] font-bold">
          2025 Season
        </h1>
        <div className="">
          <div className="grid grid-cols-2 gap-10">
            {teams.map((team) => (
              <Team key={team.name} team={team} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
