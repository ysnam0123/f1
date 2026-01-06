import { supabase } from '@/supabase/client';
import { axiosInstance } from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';

interface Stints {
  meeting_key: number;
  session_key: number;
  stint_number: number;
  driver_number: number;
  lap_start: number;
  lap_end: number;
  compound: string;
  tyre_age_at_start: number;
}

// API 호출
export const fetchStintsData = async (
  sessionKey: number,
): Promise<Stints[]> => {
  const response = await axiosInstance.get('/stints', {
    params: { session_key: sessionKey },
  });
  console.log('스틴트 데이터 불러오기:', response.data);
  return response.data;
};

// Supabase에서 불러오기
export const getStintsDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('stints')
    .select('*')
    .eq('session_key', sessionKey);

  if (error) {
    console.error('DB stints 데이터 조회 실패:', error);
    return null;
  }
  return data;
};

// 없으면 supabase에 저장
export const saveStintsData = async (sessionKey: number) => {
  const stintsData = await fetchStintsData(sessionKey);
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

// react-query에 저장
export function useStintsData(sessionKey: number | null) {
  return useQuery<Stints[]>({
    queryKey: ['stints', sessionKey],
    queryFn: async () => {
      let pitData = await getStintsDataFromDB(sessionKey!);
      if (!pitData || pitData.length === 0) {
        await saveStintsData(sessionKey!);
        pitData = await getStintsDataFromDB(sessionKey!);
      }
      return pitData ?? [];
    },
    staleTime: 1000 * 60 * 60,
    enabled: !!sessionKey,
  });
}
