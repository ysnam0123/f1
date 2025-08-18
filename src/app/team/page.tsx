import Team from '../components/team/Team';
import { teams } from '@/data/teams';
export default function page() {
  return (
    <>
      <div className="px-[70px] py-10 select-none">
        <h1 className="text-[30px] font-bold mb-[50px]">2025 시즌</h1>
        <div className="flex flex-col gap-[50px]">
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
