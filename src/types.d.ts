interface ReqStatus {
  error?: string;
  success?: string;
}

interface LoginResponse {
  status: string;
  message: string;
  data?: LoginData;
}

interface LoginData {
  error?: string;
  success?: string;
  token?: string;
}

interface BackendResponse {
  status: string;
  message: string;
  data?: any;
}
interface Queue {
  snapshotId: string;
  playlistId: string;
  playlistUri: string;
  songs: Song[];
}

interface Song {
  id: string;
  uri: string;
  title: string;
  album_img: string;
  artist: string;
}
