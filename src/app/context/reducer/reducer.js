export const initialState = {
  user: null,
  accessToken: null,
  id: null,
  playlists: [],
  discoverWeekly: null,
  topArtists: null,
  playing: false,
  item: null,
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: action.payload,
      };
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.payload,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discoverWeekly: action.payload,
      };
    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        topArtists: action.payload,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.payload,
      };
    case 'SET_ITEM':
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
