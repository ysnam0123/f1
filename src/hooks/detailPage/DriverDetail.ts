import { supabase } from '@/supabase/client';
import { TeamTable } from '@/types/team';
import { useQuery } from '@tanstack/react-query';

interface Performance {
  race: string;
  round: number;
  points: number;
  position: string;
}

export interface DriverSeasonData {
  year: number;
  rank: number;
  total_points: number;
  wins: number;
  podiums: number;
  poles: number;
  driver_number: number;
  headshot_url: string | null;

  team: TeamTable;
  season_performance: Performance[];
}

export interface DriverDetailData {
  driver_id: number;
  first_name: string;
  last_name: string;
  kr_name: string;
  flag: string;
  country_kr_name: string;
  seasons: DriverSeasonData[];
}

const getDriverData = async (driverId: number) => {
  const { data, error } = await supabase
    .from('v_driver_season_detail')
    .select('*')
    .eq('driver_id', driverId)
    .single();
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};

export function useDriverDetailData(driverId: number) {
  return useQuery<DriverDetailData>({
    queryKey: ['driverId', driverId],
    staleTime: 1000 * 60 * 60,
    queryFn: async () => {
      return await getDriverData(driverId);
    },
  });
}
