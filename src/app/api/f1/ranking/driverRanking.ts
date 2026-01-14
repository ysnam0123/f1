import { supabase } from '@/supabase/client';
import { DriverSeasonRankingView } from '@/types/Ranking';
import { useQuery } from '@tanstack/react-query';

// ===== View =====
export const getDriverRankingView = async (year: number) => {
  const { data, error } = await supabase
    .from('v_driver_season_ranking')
    .select('*')
    .eq('year', year)
    .order('rank', { ascending: true });

  if (error) throw error;
  return data;
};

// ===== React Query =====
export function useDriverRankingData(year: number | null) {
  return useQuery<DriverSeasonRankingView[]>({
    queryKey: ['driver_ranking', year],
    staleTime: 1000 * 60 * 60,
    enabled: !!year,

    queryFn: async () => {
      return await getDriverRankingView(year!);
    },
  });
}
