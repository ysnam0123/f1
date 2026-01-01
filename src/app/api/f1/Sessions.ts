import { axiosInstance } from './axiosInstance';

// 세션 불러오기
export const fetchSession = async (meeting: number) => {
  const response = await axiosInstance.get('/sessions', {
    params: { meeting_key: meeting },
  });
  return response.data;
};
