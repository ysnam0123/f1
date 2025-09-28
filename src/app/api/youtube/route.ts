import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = 'UCB_qr75-ydFVKSF9Dmo6izg'; // F1 공식 채널 ID
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;

    const res = await fetch(url);

    if (!res.ok) {
      // API 요청 실패 시
      return NextResponse.json(
        {
          error: `Failed to fetch YouTube data: ${res.status} ${res.statusText}`,
        },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // 네트워크 오류나 파싱 오류
    return NextResponse.json(
      { error: 'Internal Server Error', detail: String(error) },
      { status: 500 }
    );
  }
}
