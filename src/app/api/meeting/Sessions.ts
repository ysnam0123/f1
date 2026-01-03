import { Session } from '@/types/meeting';
import { axiosInstance } from '../f1/axiosInstance';

// 세션 불러오기
export const fetchSession = async (meeting: number): Promise<Session[]> => {
  const response = await axiosInstance.get('/sessions', {
    params: { meeting_key: meeting },
  });
  console.log('세션 불러오기:', response.data);
  return response.data;
};
