import { supabase } from '@/supabase/client';
import { axiosInstance } from '../f1/axiosInstance';
import { SortedSessionResult } from '@/types/meeting';
import { useQuery } from '@tanstack/react-query';

export interface Session {
  meeting_key: number;
  session_key: number;
  location: string;
  date_start: string;
  date_end: string;
  session_type: string; // "Race" | "Practice" | "Qualifying" | "Sprint" 등
  session_name: string;
  country_key: number;
  country_code: string;
  country_name: string;
  circuit_key: number;
  circuit_short_name: string;
  gmt_offset: string;
  year: number;
}
export type Sessions = Session[];

// ===== API =====
export const fetchResultDataFromAPI = async (sessionKey: number) => {
  const response = await axiosInstance.get('/session_result', {
    params: { session_key: sessionKey },
  });
  console.log(response.data);
  return response.data;
};

// ===== DB =====
export const getSessionResultDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('session_results')
    .select('*')
    .eq('session_key', sessionKey);

  if (error) throw error;
  return data ?? [];
};

// 없으면 supabase에 저장
export const saveResultData = async (sessionKey: number) => {
  const resultData = await fetchResultDataFromAPI(sessionKey);
  if (!resultData || resultData.length === 0) return;

  const { data, error } = await supabase
    .from('session_results')
    .upsert(resultData, {
      onConflict: 'meeting_key,session_key,driver_number',
    })
    .select();

  console.log('data:', data);
  console.log('error:', error);
};

// ===== Ensure =====
const ensureResultData = async (sessionKey: number) => {
  const existing = await getSessionResultDataFromDB(sessionKey);
  if (existing && existing.length > 0) {
    return;
  }
  await saveResultData(sessionKey);
};

// ===== View =====
export const getSortedResults = async (sessionKey: number) => {
  const { data: sessionRanks, error } = await supabase
    .from('v_meeting_results')
    .select('*')
    .eq('session_key', sessionKey)
    .order('sort_order')
    .order('position_order');
  console.log('정제된 순위정보:', sessionRanks);

  if (error) {
    throw error;
  }

  return sessionRanks ?? [];
};
// ===== React Query =====
export function useSortedResults(sessionKey: number | null) {
  return useQuery<SortedSessionResult[]>({
    queryKey: ['session_results', sessionKey],
    enabled: !!sessionKey,
    staleTime: 1000 * 60 * 60,

    queryFn: async () => {
      await ensureResultData(sessionKey!);
      return getSortedResults(sessionKey!);
    },
  });
}
