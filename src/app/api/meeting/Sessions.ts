import { Session } from '@/types/meeting';
import { axiosInstance } from '../f1/axiosInstance';
import { supabase } from '@/supabase/client';
import { useQuery } from '@tanstack/react-query';

// ===== API =====
export const fetchSessionFromAPI = async (
  meetingKey: number,
): Promise<Session[]> => {
  const response = await axiosInstance.get('/sessions', {
    params: { meeting_key: meetingKey },
  });
  return response.data;
};

// ===== DB =====
export const getSessionsFromDB = async (meetingKey: number) => {
  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .eq('meeting_key', meetingKey)
    .order('date_start', { ascending: true });

  if (error) throw error;
  return data ?? [];
};

// ===== Sync (핵심) =====
export const syncSessionsFromAPI = async (meetingKey: number) => {
  try {
    const apiSessions = await fetchSessionFromAPI(meetingKey);
    if (!apiSessions || apiSessions.length === 0) return;

    await supabase.from('sessions').upsert(apiSessions, {
      onConflict: 'session_key',
    });
  } catch (e) {
    console.warn('Sessions API sync failed:', e);
  }
};

// ===== Ensure =====
// DB 기준 보장 + API는 보조
export const ensureSessions = async (meetingKey: number) => {
  const dbSessions = await getSessionsFromDB(meetingKey);

  if (dbSessions.length === 0) {
    await syncSessionsFromAPI(meetingKey);
    return await getSessionsFromDB(meetingKey);
  }

  return dbSessions;
};

// ===== React Query =====
export function useSessionData(
  meetingKey: number | null,
  sessionFetchable?: boolean,
) {
  return useQuery<Session[]>({
    queryKey: ['sessions', meetingKey],
    enabled: sessionFetchable,
    staleTime: 1000 * 60 * 10, // 세션은 가끔 바뀜

    queryFn: async () => {
      return ensureSessions(meetingKey!);
    },
  });
}
