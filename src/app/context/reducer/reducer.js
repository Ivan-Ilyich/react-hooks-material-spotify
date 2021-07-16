export const initialState = {
  user: null,
  playlist: [],
  playing: null,
  item: null,
  accessToken: null,
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
    case 'SET_PLAYLIST':
      return {
        ...state,
        playlist: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
