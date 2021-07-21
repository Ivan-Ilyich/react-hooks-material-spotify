import * as types from '../consts/types';

export const initialState = {
  user: null,
  accessToken: null,
  id: null,
  playlists: [],
  discoverWeekly: null,
  topArtists: null,
  playing: false,
  item: null,
  selectedPlaylist: null,
  selectedPlaylistsTracks: null,
  selectedTrack: null,
  currentPlaybackState: null,
  currentPlayingTrack: null,
  shuffle: false,
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case types.SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case types.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload,
      };
    case types.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: action.payload,
      };
    case types.SET_TOP_ARTISTS:
      return {
        ...state,
        topArtists: action.payload,
      };
    case types.SET_PLAYING:
      return {
        ...state,
        playing: action.payload,
      };
    case types.SET_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    case types.SET_SELECTED_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.payload,
      };
    case types.SET_SELECTED_PLAYLISTS_TRACKS:
      return {
        ...state,
        selectedPlaylistsTracks: action.payload,
      };
    case types.SET_SELECTED_TRACK:
      return {
        ...state,
        selectedTrack: action.payload,
      };
    case types.SET_CURRENT_PLAYBACK_STATE:
      return {
        ...state,
        currentPlaybackState: action.payload,
      };
    case types.SET_CURRENT_PLAYING_TRACK:
      return {
        ...state,
        currentPlayingTrack: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
