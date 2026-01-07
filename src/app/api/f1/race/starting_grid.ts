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

// API 호출
export const fetchStartingGridData = async (
  sessionKey: number,
): Promise<StartingGrid[]> => {
  const response = await axiosInstance.get('/starting_grid', {
    params: { session_key: sessionKey },
  });
  console.log('스타팅 그리드 데이터 불러오기:', response.data);
  return response.data;
};

// Supabase에서 불러오기
export const getStartingGridDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('starting_grid')
    .select('*')
    .eq('session_key', sessionKey);

  if (error) {
    console.error('DB 스타팅 그리드 데이터 조회 실패:', error);
    return null;
  }
  return data;
};

// 없으면 supabase에 저장
export const saveStartingGridData = async (sessionKey: number) => {
  const startingGridData = await fetchStartingGridData(sessionKey);
  if (!startingGridData || startingGridData.length === 0) return;
  const { data, error } = await supabase
    .from('starting_grid')
    .upsert(startingGridData, {
      onConflict: 'meeting_key, session_key, driver_number',
    })
    .select();
  console.log('data:', data);
  console.log('error:', error);
};

// react-query에 저장
export function useStartingGridData(sessionKey: number | null) {
  return useQuery<StartingGrid[]>({
    queryKey: ['starting_grid', sessionKey],
    queryFn: async () => {
      let pitData = await getStartingGridDataFromDB(sessionKey!);
      if (!pitData || pitData.length === 0) {
        await saveStartingGridData(sessionKey!);
        pitData = await getStartingGridDataFromDB(sessionKey!);
      }
      return pitData ?? [];
    },
    staleTime: 1000 * 60 * 60,
    enabled: !!sessionKey,
  });
}

// 전용 뷰
export const getStartingGrid = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('v_starting_grid_with_driver')
    .select('*')
    .eq('session_key', sessionKey)
    .order('position');

  if (error) throw error;
  return data;
};

// 전용 뷰를 리액트 쿼리로 감쌈
export function useStartingGridWithDriver(sessionKey: number | null) {
  return useQuery<StartingGridWithDriver[]>({
    queryKey: ['starting_grid_with_driver', sessionKey],
    queryFn: () => getStartingGrid(sessionKey!),
    enabled: !!sessionKey,
    staleTime: 1000 * 60 * 60,
  });
}

// API 호출
// Supabase에서 불러오기
// 없으면 supabase에 저장
// react-query에 저장
// 전용 뷰
