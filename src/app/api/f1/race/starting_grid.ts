import { supabase } from '@/supabase/client';
import { axiosInstance } from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { StartingGridWithDriver } from '@/types/meeting';

interface StartingGrid {
  position: number;
  meeting_key: number;
  session_key: number;
  lap_duration: number;
  driver_number: number;
}

// ===== API =====
export const fetchStartingGridDataFromAPI = async (
  sessionKey: number,
): Promise<StartingGrid[]> => {
  const response = await axiosInstance.get('/starting_grid', {
    params: { session_key: sessionKey },
  });
  return response.data;
};

// ===== DB =====
export const getStartingGridDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('starting_grid')
    .select('*')
    .eq('session_key', sessionKey);

  if (error) throw error;
  return data ?? [];
};

// 없으면 supabase에 저장
export const saveStartingGridData = async (sessionKey: number) => {
  const startingGridData = await fetchStartingGridDataFromAPI(sessionKey);
  if (!startingGridData || startingGridData.length === 0) return;
  const { error } = await supabase
    .from('starting_grid')
    .upsert(startingGridData, {
      onConflict: 'meeting_key, session_key,driver_number',
    })
    .select();
  if (error) throw error;
};

// ===== Ensure =====
const ensureStartingGridData = async (sessionKey: number) => {
  const existing = await getStartingGridDataFromDB(sessionKey);
  if (existing.length > 0) return;

  await saveStartingGridData(sessionKey);
};

// ===== View =====
export const getStartingGrid = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('v_starting_grid_with_driver')
    .select('*')
    .eq('session_key', sessionKey)
    .order('position');

  if (error) throw error;
  return data;
};

// ===== React Query =====
export function useStartingGridData(sessionKey: number | null) {
  return useQuery<StartingGridWithDriver[]>({
    queryKey: ['starting_grid_with_driver', sessionKey],
    enabled: !!sessionKey,
    staleTime: 1000 * 60 * 60,

    queryFn: async () => {
      await ensureStartingGridData(sessionKey!);
      return getStartingGrid(sessionKey!);
    },
  });
}

// API 호출
// Supabase에서 불러오기
// 없으면 supabase에 저장
// react-query에 저장
// 전용 뷰
