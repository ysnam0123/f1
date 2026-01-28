import { supabase } from '@/supabase/client';
import { axiosInstance } from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';

export interface RaceControl {
  meeting_key: number;
  session_key: number;
  date: string;
  driver_number?: number;
  lap_number: number;
  category?: string;
  flag?:
    | 'YELLOW'
    | 'DOUBLE_YELLOW'
    | 'GREEN'
    | 'RED'
    | 'CLEAR'
    | 'BLUE'
    | 'CHEQUERED'
    | 'BLACK AND WHITE'
    | 'CLEAR'
    | null;
  scope?: string;
  sector?: string;
  message: string;
}

// ===== API =====
export const fetchRaceControlDataFromAPI = async (
  sessionKey: number,
): Promise<RaceControl[]> => {
  const response = await axiosInstance.get('/race_control', {
    params: { session_key: sessionKey },
  });
  console.log('레이스 컨트롤 데이터 불러오기:', response.data);
  return response.data;
};

// ===== DB =====
export const getRaceControlDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('race_control')
    .select('*')
    .eq('session_key', sessionKey);
  if (error) throw error;
  return data ?? [];
};

// ===== Sync =====
export const syncRaceControlFromAPI = async (sessionKey: number) => {
  try {
    const raceControlData = await fetchRaceControlDataFromAPI(sessionKey);
    if (!raceControlData || raceControlData.length === 0) return;

    await supabase
      .from('race_control')
      .upsert(raceControlData, {
        onConflict: 'meeting_key,session_key,date,message',
      })
      .select();
  } catch (e) {
    console.error('레이스 컨트롤 에러', e);
  }
};

// ===== Ensure =====
const ensureRaceControlData = async (sessionKey: number) => {
  const existing = await getRaceControlDataFromDB(sessionKey);
  if (existing.length === 0) {
    await syncRaceControlFromAPI(sessionKey);
    return await getRaceControlDataFromDB(sessionKey);
  }
  return existing;
};

// ===== React Query =====
export function useRaceControlData(sessionKey: number | null) {
  return useQuery<RaceControl[]>({
    queryKey: ['race_control', sessionKey],
    staleTime: 1000 * 60 * 60,
    enabled: !!sessionKey,

    queryFn: async () => {
      return ensureRaceControlData(sessionKey!);
    },
  });
}

// let pitData = await getRaceControlDataFromDB(sessionKey!);
// if (!pitData || pitData.length === 0) {
//   await saveRaceControlData(sessionKey!);
//   pitData = await getRaceControlDataFromDB(sessionKey!);
// }
// return pitData ?? [];
