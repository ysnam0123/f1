import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './axiosInstance';
import { supabase } from '@/supabase/client';

interface Driver {
  meeting_key: number;
  session_key: number;
  driver_number: number;
  broadcast_name: string;
  full_name: string;
  name_acronym: string;
  team_name: string;
  team_colour: string;
  first_name: string;
  last_name: string;
  headshot_url: string;
  country_code: string;
}

// ===== API =====
export const fetchDriverMeetingKeyFromAPI = async (
  meetingKey: number,
): Promise<Driver[]> => {
  const response = await axiosInstance.get('/drivers', {
    params: { meeting_key: meetingKey },
  });
  console.log('API에서 드라이버 불러옴!', response.data);
  return response.data;
};

// ===== DB =====
export const getDriverMeetingKeyFromDB = async (meetingKey: number) => {
  const { data, error } = await supabase
    .from('drivers')
    .select('*')
    .eq('meeting_key', meetingKey);

  if (error) throw error;
  if (data) {
    console.log('DB에서 드라이버 불러옴!', data);
  }
  return data ?? [];
};

// 없으면 supabse에 저장
export const saveDriverData = async (meetingKey: number) => {
  const driverData = await fetchDriverMeetingKeyFromAPI(meetingKey);
  if (!driverData || driverData.length === 0) return;

  const { data, error } = await supabase
    .from('drivers')
    .upsert(driverData, {
      onConflict: 'meeting_key,session_key,driver_number',
    })
    .select();
  if (error) throw error;
  if (data) {
    // console.log('DB에 드라이버 저장!:', data);
  }
  return data ?? [];
};

// ===== Ensure =====
const ensureDriverData = async (meetingKey: number) => {
  const existing = await getDriverMeetingKeyFromDB(meetingKey);
  // console.log('DB에서 드라이버 불러옴:', existing);
  if (existing.length >= 50) return;

  await saveDriverData(meetingKey);
};

// ===== React Query =====
export function useDriverMeetingKeyData(meetingKey: number | null) {
  return useQuery<Driver[]>({
    queryKey: ['drivers', meetingKey],
    staleTime: 1000 * 60 * 60,
    enabled: !!meetingKey,

    queryFn: async () => {
      await ensureDriverData(meetingKey!);
      return getDriverMeetingKeyFromDB(meetingKey!);
    },
  });
}
