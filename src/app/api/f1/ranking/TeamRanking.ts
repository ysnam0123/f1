// app/api/f1/ranking/team.ts
import { supabase } from '@/supabase/client';
import { TeamSeasonRankingRow, TeamSeasonRankingView } from '@/types/Ranking';
import { useQuery } from '@tanstack/react-query';

// ===== View =====
export const getTeamSeasonRankingView = async (
  year: number,
): Promise<TeamSeasonRankingRow[]> => {
  const { data, error } = await supabase
    .from('v_team_season_ranking')
    .select('*')
    .eq('year', year)
    .order('rank', { ascending: true })
    .order('driver_number', { ascending: true });

  if (error) throw error;
  return data;
};

// ===== React Query =====
export function useTeamSeasonRanking(year: number | null) {
  return useQuery<TeamSeasonRankingRow[]>({
    queryKey: ['team_season_ranking', year],
    enabled: !!year,
    staleTime: 1000 * 60 * 60, // 1시간

    queryFn: async () => {
      return await getTeamSeasonRankingView(year!);
    },
  });
}

export function groupTeamSeasonRanking(
  rows: TeamSeasonRankingRow[],
): TeamSeasonRankingView[] {
  const map = new Map<string, TeamSeasonRankingView>();

  rows.forEach((row) => {
    const key = `${row.year}-${row.team_slug}`;

    if (!map.has(key)) {
      map.set(key, {
        rank: row.rank,
        year: row.year,

        team_name: row.team_name,
        team_kr_name: row.team_kr_name,
        team_slug: row.team_slug,
        team_colour: row.team_colour,
        main_logo: row.main_logo,
        white_logo: row.white_logo,
        car_img: row.car_img,

        team_total_points: row.team_total_points,
        team_races: row.team_races,
        wins: row.wins,
        podiums: row.podiums,
        avg_finish: row.avg_finish,

        drivers: [],
      });
    }

    map.get(key)!.drivers.push({
      driver_number: row.driver_number,
      driver_id: row.driver_id,
      full_name: row.full_name,
      kr_name: row.kr_name,
      name_acronym: row.name_acronym,
      headshot_url: row.headshot_url,
      is_main: row.is_main,
    });
  });

  return Array.from(map.values()).sort((a, b) => a.rank - b.rank);
}
