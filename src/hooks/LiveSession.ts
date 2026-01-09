import { supabase } from '@/supabase/client';
import { useQuery } from '@tanstack/react-query';

export function useLiveSession() {
  return useQuery({
    queryKey: ['live-session'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('live_session')
        .select('*')
        .maybeSingle();

      if (error) {
        // LIVE 세션이 없으면 error 나는 게 정상일 수 있음
        if (error.code === 'PGRST116') return null;
        throw error;
      }

      return data;
    },
    refetchInterval: 1000 * 30, // 30초
  });
}
