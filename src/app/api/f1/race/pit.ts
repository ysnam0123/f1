import { supabase } from '@/supabase/client';
import { axiosInstance } from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';

export interface Pit {
  date: string;
  session_key: number;
  pit_duration: null;
  lane_duration: number;
  stop_duration: number;
  lap_number: number;
  meeting_key: number;
  driver_number: number;
}

// ===== API =====
export const fetchPitDataFromAPI = async (
  sessionKey: number,
): Promise<Pit[]> => {
  const response = await axiosInstance.get('/pit', {
    params: { session_key: sessionKey },
  });
  return response.data;
};

// ===== DB =====
export const getPitDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('pit_stops')
    .select('*')
    .eq('session_key', sessionKey);

  if (error) throw error;
  return data ?? [];
};

// 없으면 supabse에 저장
export const savePitData = async (sessionKey: number) => {
  const pitData = await fetchPitDataFromAPI(sessionKey);
  if (!pitData || pitData.length === 0) return;

  const { data, error } = await supabase
    .from('pit_stops')
    .upsert(pitData, {
      onConflict: 'meeting_key,session_key,driver_number,lap_number',
    })
    .select();
  if (error) throw error;
  return data ?? [];
};

// ===== Ensure =====
const ensurePitData = async (sessionKey: number) => {
  const existing = await getPitDataFromDB(sessionKey);
  if (existing.length > 0) return;

  await savePitData(sessionKey);
};

// ===== React Query =====
export function usePitData(sessionKey: number | null) {
  return useQuery<Pit[]>({
    queryKey: ['pit_stops', sessionKey],
    staleTime: 1000 * 60 * 60,
    enabled: !!sessionKey,

    queryFn: async () => {
      await ensurePitData(sessionKey!);
      return getPitDataFromDB(sessionKey!);
    },
  });
}

// ===== API =====
// ===== DB =====
// ===== Ensure =====
// ===== View =====
// ===== React Query =====
