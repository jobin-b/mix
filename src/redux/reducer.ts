const initialState = {
  snapshotId: '',
  playlistId: '',
  playlistUri: '',
  songs: [] as Song[],
} as Queue;

const queueReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default queueReducer;
