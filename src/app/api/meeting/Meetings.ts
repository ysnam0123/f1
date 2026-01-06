import { Meeting } from '@/types/meeting';
import { axiosInstance } from '../f1/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/supabase/client';

export const meetingData = async (year: number): Promise<Meeting[]> => {
  const response = await axiosInstance.get('/meetings', {
    params: { year: year },
  });
  console.log('response:', response);
  return response.data;
};

export const fetchMeetings = async (selectedYear: number) => {
  const { data, error } = await supabase
    .from('meetings')
    .select('*')
    .eq('year', selectedYear)
    .order('date_start', { ascending: true });
  if (error) {
    console.error(error);
    return [];
  }
  if (data && data.length > 0) {
    return data;
  }

  const meetingsFromApi = await meetingData(selectedYear);
  await supabase
    .from('meetings')
    .upsert(meetingsFromApi, { onConflict: 'meeting_key' });

  return meetingsFromApi;
};
