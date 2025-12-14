'use client'; // 클라이언트 컴포넌트로 선언
import { useYoutube } from '@/hooks/useYoutue';
import { YoutubeVideoItems } from '@/types/video';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HighLights() {
  const [videos, setVideos] = useState<YoutubeVideoItems[]>([]);

  // useEffect(() => {
  //   fetch('/api/youtube')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.items) setVideos(data.items);
  //     })
  //     .catch((err) => console.error('Failed to fetch YouTube data:', err));
  // }, []);

  const { data, isPending, isError } = useYoutube();
  // 리액트 쿼리 부분의 데이터 타입 정의할 것

  // useEffect(()=>{
  //   if(data){
  //     setVideos(data)
  //   }
  // },[])

  return (
    <>
      <div className="w-full select-none">
        <h1 className="mb-3 text-[25px] font-bold">공식 하이라이트</h1>
        <div className="flex min-h-[250px] w-full justify-between rounded-[20px] bg-[#1a1a1a] p-[52px]">
          {isPending && <></>}
          {isError && <></>}
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
                <p className="line-clamp-2">{video.snippet.title}</p>
              </a>
            ))}
        </div>
      </div>
    </>
  );
}
