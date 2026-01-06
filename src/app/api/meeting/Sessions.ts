import { Session } from '@/types/meeting';
import { axiosInstance } from '../f1/axiosInstance';
import { supabase } from '@/supabase/client';

// 세션 불러오기
export const fetchSession = async (meeting: number): Promise<Session[]> => {
  const response = await axiosInstance.get('/sessions', {
    params: { meeting_key: meeting },
  });
  console.log('세션 불러오기:', response.data);
  return response.data;
};

export const fetchSessionResults = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('v_meeting_results')
    .select('*')
    .eq('session_key', sessionKey)
    .order('position');

  if (error) {
    console.error('순위 불러오기 실패:', error);
    return [];
  }

  return data;
};
