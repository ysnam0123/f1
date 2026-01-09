import { supabase } from '@/supabase/client';
import { axiosInstance } from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';

export interface Stints {
  meeting_key: number;
  session_key: number;
  stint_number: number;
  driver_number: number;
  lap_start: number;
  lap_end: number;
  compound: string;
  tyre_age_at_start: number;
}

// ===== API =====
export const fetchStintsDataFromAPI = async (
  sessionKey: number,
): Promise<Stints[]> => {
  const response = await axiosInstance.get('/stints', {
    params: { session_key: sessionKey },
  });
  return response.data;
};

// ===== DB =====
export const getStintsDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('stints')
    .select('*')
    .eq('session_key', sessionKey);

  if (error) throw error;
  return data ?? [];
};

// 없으면 supabase에 저장
export const saveStintsData = async (sessionKey: number) => {
  const stintsData = await fetchStintsDataFromAPI(sessionKey);
  if (!stintsData || stintsData.length === 0) return;

  const { data, error } = await supabase
    .from('stints')
    .upsert(stintsData, {
      onConflict: 'meeting_key,session_key,driver_number,stint_number',
    })
    .select();

  console.log('data:', data);
  console.log('error:', error);
};

// ===== Ensure =====
const ensureStintsData = async (sessionKey: number) => {
  const existing = await getStintsDataFromDB(sessionKey);
  if (existing && existing.length > 0) {
    return;
  }
  await saveStintsData(sessionKey);
};
// ===== View =====
// ===== React Query =====
export function useStintsData(sessionKey: number | null) {
  return useQuery<Stints[]>({
    queryKey: ['stints', sessionKey],
    staleTime: 1000 * 60 * 60,
    enabled: !!sessionKey,

    queryFn: async () => {
      await ensureStintsData(sessionKey!);
      // 여기에 뷰 함수 입력
      return getStintsDataFromDB(sessionKey!);
    },
  });
}
