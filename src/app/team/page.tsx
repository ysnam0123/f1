'use client';
import {
  groupTeamSeasonRanking,
  useTeamSeasonRanking,
} from '../api/f1/ranking/TeamRanking';
import Team from '../components/team/Team';
import { teams } from '@/data/teams';

export default function Page() {
  const { data, isPending } = useTeamSeasonRanking(2025);
  const teams2 = data ? groupTeamSeasonRanking(data) : [];
  if (teams2) {
    console.log(teams2);
  }
  return (
    <>
      <div className="mx-auto flex max-w-325 flex-col select-none">
        <h1
          style={{ fontFamily: 'paperlogy', fontWeight: 700 }}
          className="mb-10 text-[30px]"
        >
          2025 Season
        </h1>
        <div className="">
          <div className="grid grid-cols-2 gap-10">
            {teams2.map((team) => (
              <Team key={team.team_slug} team={team} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
