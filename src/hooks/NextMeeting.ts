import { supabase } from '@/supabase/client';
import { useQuery } from '@tanstack/react-query';

// meetings.service.ts
export const getNextMeeting = async () => {
  const { data, error } = await supabase
    .from('meetings')
    .select('*')
    .gte('date_end', new Date().toISOString())
    .order('date_start', { ascending: true })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  return data;
};

export function useNextMeeting() {
  return useQuery({
    queryKey: ['meetings', 'next'],
    queryFn: getNextMeeting,
    staleTime: 1000 * 60 * 5, // 5분이면 충분
  });
}
