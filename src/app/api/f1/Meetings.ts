import { Meeting } from '@/types/meeting';
import { axiosInstance } from './axiosInstance';
import { useQuery } from '@tanstack/react-query';

// 2025 그랑프리 불러오기
export const meetingData = async (): Promise<Meeting[]> => {
  const response = await axiosInstance.get('/meetings', {
    params: { year: 2025 },
  });
  console.log('response:', response);
  return response.data;
};

// export function useMeetingData() {
//   return useQuery({
//     queryKey: ['meeting_key'],
//     queryFn: meetingData,
//   });
// }

// useEffect(() => {
//   const fetchRelatedSessions = async () => {
//     const { data, error } = await supabase
//       .from('meetings')
//       .select(`
//         meeting_key,
//         sessions (
//           session_key,
//           session_name,
//           session_type
//         )
//       `)
//       .eq('meeting_key', meetingKey)
//       .single();

//     console.log(data);
//   };

//   fetchRelatedSessions();
// }, [meetingKey]);
