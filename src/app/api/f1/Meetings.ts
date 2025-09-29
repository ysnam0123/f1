import { Meeting } from '@/types/meeting';
import { axiosInstance } from './axiosInstance';
import { useQuery } from '@tanstack/react-query';

// 전체 그랑프리 불러오기
export const meetingData = async (): Promise<Meeting[]> => {
  const response = await axiosInstance.get('/meetings', {
    params: { year: 2025 },
  });
  return response.data;
};

// 세션 불러오기
export const sessionData = async (meeting: number) => {
  const response = await axiosInstance.get('/sessions', {
    params: { meeting_key: meeting },
  });
  return response.data;
};

export function useMeetingData() {
  return useQuery({
    queryKey: ['meeting_key'],
    queryFn: meetingData,
  });
}
