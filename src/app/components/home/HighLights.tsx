'use client'; // 클라이언트 컴포넌트로 선언
import { YoutubeVideoItems } from '@/types/video';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HighLights() {
  const [videos, setVideos] = useState<YoutubeVideoItems[]>([]);

  useEffect(() => {
    fetch('/api/youtube')
      .then((res) => res.json())
      .then((data) => {
        if (data.items) setVideos(data.items);
      })
      .catch((err) => console.error('Failed to fetch YouTube data:', err));
  }, []);

  return (
    <>
      <div className="select-none">
        <h1 className="mb-3 text-[25px] font-bold">공식 하이라이트</h1>
        <div className="flex min-h-[250px] w-[1300px] gap-[20px] rounded-[20px] bg-[#1a1a1a] p-[52px]">
          {videos &&
            videos.map((video) => (
              <a
                key={video.id.videoId}
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                className="w-[300px]"
              >
                <Image
                  src={video.snippet.thumbnails.medium.url}
                  alt="youtube"
                  width={video.snippet.thumbnails.medium.width}
                  height={video.snippet.thumbnails.medium.height}
                />
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p className="line-clamp-2">{video.snippet.title}</p>
              </a>
            ))}
        </div>
      </div>
    </>
  );
}
