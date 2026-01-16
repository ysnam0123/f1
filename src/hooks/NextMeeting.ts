import { supabase } from '@/supabase/client';
import { useQuery } from '@tanstack/react-query';

interface Circuit {
  circuit_img: string;
  circuit_long_name: string;
}
interface Country {
  flag: string;
  country_kr_name: string;
}
export interface NextMeeting {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_end: string;
  date_start: string;
  gmt_offset: string;
  id: string;
  location: string;
  meeting_code: string;
  meeting_key: number;
  meeting_name: string;
  meeting_official_name: string;
  round: number;
  year: number;
  circuits: Circuit;
  countries: Country;
}

// meetings.service.ts
export const getNextMeeting = async () => {
  const { data, error } = await supabase
    .from('meetings')
    .select(
      `
      *,
      circuits (
        circuit_img,
        circuit_long_name
      ),
      countries!meetings_meeting_code_fkey (
        flag,
        country_kr_name
      )
    `,
    )
    .gte('date_end', new Date().toISOString())
    .order('date_start', { ascending: true })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  return data;
};

export function useNextMeeting() {
  return useQuery<NextMeeting>({
    queryKey: ['meetings', 'next'],
    queryFn: getNextMeeting,
    staleTime: 1000 * 60 * 5, // 5분이면 충분
  });
}
