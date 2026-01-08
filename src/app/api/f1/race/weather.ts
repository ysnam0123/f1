import { supabase } from '@/supabase/client';
import { axiosInstance } from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';

export interface WeatherSessionSummary {
  meeting_key: number;
  session_key: number;

  had_rain: boolean;
  rain_pattern:
    | 'none'
    | 'early'
    | 'mid'
    | 'late'
    | 'intermittent'
    | 'continuous';

  avg_track_temp: number;
  track_temp_level: 'low' | 'moderate' | 'high';

  avg_wind_speed: number;
  wind_level: 'calm' | 'moderate' | 'strong';

  weather_summary: string;
}

interface Weather {
  meeting_key: number;
  session_key: number;
  date: string;
  track_temperature: number;
  rainfall: number;
  wind_speed: number;
  pressure: number;
  humidity: number;
  air_temperature: number;
  wind_direction: number;
}

// API 호출
export const fetchWeatherData = async (
  sessionKey: number,
): Promise<Weather[]> => {
  const response = await axiosInstance.get('/weather', {
    params: { session_key: sessionKey },
  });
  console.log('날씨 데이터 불러오기:', response.data);
  return response.data;
};

// Supabase에서 불러오기
export const getWeatherDataFromDB = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('weather')
    .select('*')
    .eq('session_key', sessionKey)
    .order('date', { ascending: true });

  if (error) {
    console.error('DB weather 데이터 조회 실패:', error);
    return null;
  }
  return data;
};

// 없으면 supabase에 저장
export const saveWeatherData = async (sessionKey: number) => {
  const weatherData = await fetchWeatherData(sessionKey);
  if (!weatherData || weatherData.length === 0) return;

  const { data, error } = await supabase
    .from('weather')
    .upsert(weatherData, {
      onConflict: 'meeting_key,session_key,date',
    })
    .select();

  console.log('data:', data);
  console.log('error:', error);
};

// react-query에 저장
// export function useWeatherData(sessionKey: number | null) {
//   return useQuery<Weather[]>({
//     queryKey: ['weather', sessionKey],
//     queryFn: async () => {
//       let weatherData = await getWeatherDataFromDB(sessionKey!);
//       if (!weatherData || weatherData.length === 0) {
//         await saveWeatherData(sessionKey!);
//         weatherData = await getWeatherDataFromDB(sessionKey!);
//       }
//       return weatherData ?? [];
//     },
//     staleTime: 1000 * 60 * 60,
//     enabled: !!sessionKey,
//   });
// }

// supabase에 저장되어있는지 확인하고, 없으면 api를 호출하는 함수
const ensureWeatherData = async (sessionKey: number) => {
  const existing = await getWeatherDataFromDB(sessionKey);

  if (existing && existing.length > 0) {
    return;
  }

  await saveWeatherData(sessionKey);
};

// 전용 뷰
export const getWeatherSummary = async (sessionKey: number) => {
  const { data, error } = await supabase
    .from('weather_session_summary')
    .select('*')
    .eq('session_key', sessionKey)
    .single();

  if (error) throw error;
  return data;
};

// 전용 뷰를 리액트 쿼리로 감쌈
export function useWeatherSummary(sessionKey: number | null) {
  return useQuery<WeatherSessionSummary>({
    queryKey: ['weather_session_summary', sessionKey],
    enabled: !!sessionKey,
    staleTime: 1000 * 60 * 60,

    queryFn: async () => {
      await ensureWeatherData(sessionKey!);
      return getWeatherSummary(sessionKey!);
    },
  });
}
