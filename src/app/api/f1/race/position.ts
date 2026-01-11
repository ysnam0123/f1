import { supabase } from '@/supabase/client';
import { axiosInstance } from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';

interface Position {
  date: string;
  meeting_key: number;
  session_key: number;
  driver_number: number;
  position: number;
}

export interface DriverPositionGain {
  meeting_key: number;
  session_key: number;
  driver_number: number;
  position_gain: number;

  driver_id: number;
  driver_name: string;
  name_acronym: string;
  kr_name: string;
  headshot_url: string;

  team_kr_name: number;
  team_name: string;
  team_slug: string;
  team_colour: string;
  white_logo: string;
}

export interface TeamPositionGain {
  meeting_key: number;
  session_key: number;
  position_gain: number;
  total_position_gain: number;

  team_kr_name: number;
  team_name: string;
  team_slug: string;
  team_colour: string;
  white_logo: string;
}

// ===== API =====
export const fetchPositionDataFromAPI = async (
  sessionKey: number,
): Promise<Position[]> => {
  const response = await axiosInstance.get('/position', {
    params: { session_key: sessionKey },
  });
  console.log('API:', response.data);
  return response.data;
};

// ===== DB =====
export const getPositionDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('position')
    .select('*')
    .eq('session_key', sessionKey);

  if (error) throw error;
  return data ?? [];
};

// 없으면 supabase에 저장
export const savePositionData = async (sessionKey: number) => {
  const positionData = await fetchPositionDataFromAPI(sessionKey);
  if (!positionData || positionData.length === 0) return;
  const { error } = await supabase.from('position').upsert(positionData, {
    onConflict: 'session_key,driver_number,date',
  });
  if (error) throw error;
};

// ===== Ensure =====
const ensurePositionData = async (sessionKey: number) => {
  const existing = await getPositionDataFromDB(sessionKey);
  if (existing.length > 0) return existing;
  await savePositionData(sessionKey);
};

// ===== View =====
export const getPosition = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('v_race_position_gain')
    .select('*')
    .eq('session_key', sessionKey)
    .order('position_gain', { ascending: false });

  if (error) throw error;
  return data;
};

// ===== React Query =====
export function usePositionData(sessionKey: number | null, enabled: boolean) {
  return useQuery<DriverPositionGain[]>({
    queryKey: ['driver_position_gain', sessionKey],
    enabled: enabled && sessionKey !== null,
    staleTime: 1000 * 60 * 60,

    queryFn: async () => {
      await ensurePositionData(sessionKey!);
      return await getPosition(sessionKey!);
    },
  });
}

// API 호출
// Supabase에서 불러오기
// 없으면 supabase에 저장
// react-query에 저장
// 전용 뷰
