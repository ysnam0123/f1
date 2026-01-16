import { YoutubeVideoItem } from '@/types/video';
import { useQuery } from '@tanstack/react-query';

const fetchYoutube = async () => {
  const res = await fetch('/api/youtube');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export function useYoutube() {
  return useQuery<YoutubeVideoItem[]>({
    queryKey: ['youtube-highlights'],
    queryFn: fetchYoutube,
    staleTime: 1000 * 60 * 10,
  });
}
