import { supabase } from '@/supabase/client';
import {
  Meeting,
  Session,
  SessionResult,
  SortedSessionResult,
} from '@/types/meeting';
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
        .eq('meeting_key', meetingKey)
        .order('date_start', { ascending: true });

      if (error) {
        throw error;
      }

      return data ?? [];
    },
    enabled: !!meetingKey,
  });
}

export function useSessionResultData(sessionKey: number | null) {
  return useQuery<SortedSessionResult[]>({
    queryKey: ['session_results', sessionKey],
    queryFn: async () => {
      const { data: sessionRanks, error } = await supabase
        .from('v_meeting_results')
        .select('*')
        .eq('session_key', sessionKey)
        .order('position');
      console.log('정제된 순위정보:', sessionRanks);

      if (error) {
        throw error;
      }

      return sessionRanks ?? [];
    },
    enabled: !!sessionKey,
  });
}
// export function useSessionResultData(sessionKey: number | null) {
//   return useQuery<SessionResult[]>({
//     queryKey: ['session_results', sessionKey],
//     queryFn: async () => {
//       const { data, error } = await supabase
//         .from('session_results')
//         .select('*')
//         .eq('session_key', sessionKey);
//       console.log('세션결과출력:', data);

//       if (error) {
//         throw error;
//       }

//       return data ?? [];
//     },
//     enabled: !!sessionKey,
//   });
// }
