import Team from '../components/team/Team';
import { teams } from '@/data/teams';
export default function page() {
  return (
    <>
      <div className="mx-auto flex max-w-[1300px] flex-col select-none">
        <h1 className="mb-[50px] text-[30px] font-bold">2025 시즌</h1>
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
