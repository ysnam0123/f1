import { supabase } from '@/supabase/client';
import { axiosInstance } from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';

export interface RaceControl {
  date: string;
  session_key: number;
  pit_duration: null;
  lap_number: number;
  meeting_key: number;
  driver_number: number;
}

// API 호출
export const fetchRaceControlData = async (
  sessionKey: number,
): Promise<RaceControl[]> => {
  const response = await axiosInstance.get('/race_control', {
    params: { session_key: sessionKey },
  });
  console.log('레이스 컨트롤 데이터 불러오기:', response.data);
  return response.data;
};

// Supabase에서 불러오기
export const getRaceControlDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('race_control')
    .select('*')
    .eq('session_key', sessionKey);

  if (error) {
    console.error('DB 레이스 컨트롤 데이터 조회 실패:', error);
    return null;
  }
  return data;
};

// 없으면 supabase에 저장
export const saveRaceControlData = async (sessionKey: number) => {
  const raceControlData = await fetchRaceControlData(sessionKey);
  if (!raceControlData || raceControlData.length === 0) return;
  const { data, error } = await supabase
    .from('race_control')
    .upsert(raceControlData, {
      onConflict: 'meeting_key,session_key,date, message',
    })
    .select();
  console.log('data:', data);
  console.log('error:', error);
};

// react-query에 저장
export function useRaceControlData(sessionKey: number | null) {
  return useQuery<RaceControl[]>({
    queryKey: ['race_control', sessionKey],
    queryFn: async () => {
      let pitData = await getRaceControlDataFromDB(sessionKey!);
      if (!pitData || pitData.length === 0) {
        await saveRaceControlData(sessionKey!);
        pitData = await getRaceControlDataFromDB(sessionKey!);
      }
      return pitData ?? [];
    },
    staleTime: 1000 * 60 * 60,
    enabled: !!sessionKey,
  });
}

// API 호출
// Supabase에서 불러오기
// 없으면 supabase에 저장
// react-query에 저장
