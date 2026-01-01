import { supabase } from '@/supabase/client';
import { Meeting, Session, SessionResult } from '@/types/meeting';
import { useQuery } from '@tanstack/react-query';

export function useMeetingData(meetingKey: number) {
  return useQuery<Meeting>({
    queryKey: ['meetings', meetingKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('meetings')
        .select('*')
        .eq('meeting_key', meetingKey)
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
    enabled: !!meetingKey,
  });
}

export function useSessionData(meetingKey: number) {
  return useQuery<Session[]>({
    queryKey: ['sessions', meetingKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sessions')
        .select('*')
        .eq('meeting_key', meetingKey);

      if (error) {
        throw error;
      }

      return data ?? [];
    },
    enabled: !!meetingKey,
  });
}

export function useSessionResultData(sessionKey: number) {
  return useQuery<SessionResult[]>({
    queryKey: ['session_results', sessionKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('session_results')
        .select('*')
        .eq('session_key', sessionKey);

      if (error) {
        throw error;
      }

      return data ?? [];
    },
  });
}
