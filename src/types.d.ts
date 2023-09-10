interface ReqStatus {
  error?: string;
  success?: string;
}

interface LoginResponse {
  error?: string;
  success?: string;
  token?: string;
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
