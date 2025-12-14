import { GET } from '@/app/api/youtube/route';
import { useQuery } from '@tanstack/react-query';

export function useYoutube() {
  return useQuery({
    queryKey: ['Youtube-Highlights'],
    queryFn: GET,
  });
}
