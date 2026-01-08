import { supabase } from '@/supabase/client';
import { axiosInstance } from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';

export interface Pit {
  date: string;
  session_key: number;
  pit_duration: null;
  lap_number: number;
  meeting_key: number;
  driver_number: number;
}

// API 호출
export const fetchPitData = async (sessionKey: number): Promise<Pit[]> => {
  const response = await axiosInstance.get('/pit', {
    params: { session_key: sessionKey },
  });
  console.log('피트api 데이터 불러오기:', response.data);
  return response.data;
};

// Supabase에서 불러오기
export const getPitDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('pit_stops')
    .select('*')
    .eq('session_key', sessionKey);

  if (error) {
    console.error('DB pit 데이터 조회 실패:', error);
    return null;
  }
  return data;
};

// 없으면 supabse에 저장
export const savePitData = async (sessionKey: number) => {
  const pitData = await fetchPitData(sessionKey);

  if (!pitData || pitData.length === 0) return;
  const { data, error } = await supabase
    .from('pit_stops')
    .upsert(pitData, {
      onConflict: 'meeting_key,session_key,driver_number,lap_number',
    })
    .select();

  console.log('data:', data);
  console.log('error:', error);
};

// 리액트 쿼리에 저장
export function usePitData(sessionKey: number | null) {
  return useQuery<Pit[]>({
    queryKey: ['pit_stops', sessionKey],
    queryFn: async () => {
      let pitData = await getPitDataFromDB(sessionKey!);
      if (!pitData || pitData.length === 0) {
        await savePitData(sessionKey!);
        pitData = await getPitDataFromDB(sessionKey!);
      }
      return pitData ?? [];
    },
    staleTime: 1000 * 60 * 60,
    enabled: !!sessionKey,
  });
}
