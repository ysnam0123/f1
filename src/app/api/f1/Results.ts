import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './axiosInstance';

// 세션 결과 불러오기
export const sessionResult = async (session: number) => {
  const response = await axiosInstance.get('/session_result', {
    params: { session_key: session },
  });
  return response.data;
};

export function useSessionResult(session: number) {
  return useQuery({
    queryKey: ['session_key', session],
    queryFn: () => sessionResult(session),
  });
}
