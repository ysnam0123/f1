interface Id {
  kind: string;
  videoId: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

export interface YoutubeVideoItems {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface YoutubeVideoItem {
  id: Id;
  kind: string;
  etag: string;
  snippet: Snippet;
}
