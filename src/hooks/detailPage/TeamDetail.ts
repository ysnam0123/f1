import { supabase } from '@/supabase/client';
import { useQuery } from '@tanstack/react-query';

export interface TeamSeasonDriver {
  driver_number: number;
  driver_id: number;
  full_name: string;
  kr_name: string;
  flag: string | null;
  is_main: boolean;
}
export interface Performance {
  race: string;
  round: number;
  points: number;
  position: string | null;
  flag: string | null;
  race_kr_name: string;
}
export interface TeamSeason {
  year: number;
  team_name: string;
  team_kr_name: string;
  team_colour: string;
  main_logo: string;
  white_logo: string;
  car_img: string;
  small_logo: string;
  rank: number;
  total_points: number;
  wins: number;
  podiums: number;
  drivers: TeamSeasonDriver[];
  performance: Performance[];
}

export interface TeamSeasonDetail {
  team_slug: string;
  team_name: string;
  team_colour: string;
  seasons: TeamSeason[];
}

// export async function getTeamSeasonDetail(
//   teamSlug: string,
// ): Promise<TeamSeasonDetail[]> {
//   const { data, error } = await supabase
//     .from('v_team_season_detail')
//     .select('*')
//     .eq('team_slug', teamSlug)
//     .order('team_slug');

//   if (error) throw error;
//   return data as TeamSeasonDetail[];
// }

const getTeamData = async (teamSlug: string) => {
  const { data, error } = await supabase
    .from('v_team_season_detail')
    .select('*')
    .eq('team_slug', teamSlug)
    .single();
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};

export function useTeamDetailData(teamSlug: string) {
  return useQuery<TeamSeasonDetail>({
    queryKey: ['team_slug', teamSlug],
    staleTime: 1000 * 60 * 60,
    queryFn: async () => {
      return await getTeamData(teamSlug);
    },
  });
}
