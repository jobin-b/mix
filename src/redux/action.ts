export const SET_QUEUE = 'SET_QUEUE';
export const SET_SNAPSHOT_ID = 'SET_SNAPSHOT_ID';
export const SET_SONGS = 'SET_SONGS';
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const REORDER_SONG = 'REORDER_SONG';

export const setQueue = (queue: string) => dispatch => ({
  type: SET_QUEUE,
  payload: queue,
});

export const setSnapshotId = (snapshotId: string) => dispatch => ({
  type: SET_SNAPSHOT_ID,
  payload: snapshotId,
});

export const setSongs = (songs: Song[]) => dispatch => ({
  type: SET_SONGS,
  payload: songs,
});

export const addSong = (song: Song, index: number) => dispatch => ({
  type: ADD_SONG,
  payload: {song, index},
});

export const removeSong = (id: string) => dispatch => ({
  type: REMOVE_SONG,
  payload: id,
});
