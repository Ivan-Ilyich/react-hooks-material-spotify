export const initialState = {
  user: null,
  playList: [],
  playing: null,
  item: null,
  accessToken:
    'BQCM7m5FtH4WYsTZI4bVmsw3mmNmkNkayXpFiI1wEAWoqcEb9FZv422t20lhEPAonLOtPAT9DDXfEDZC_P8uTUjJT9Adb0b1pfb1uPRedj0kM-zp7qO3eX_tJdzN6lDqKWsOlNnuRKv8fAKbP2gTrPe60HfjCaEDmmBuSfDpD172uiGr7yYN',
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
    default:
      return state;
  }
};

export default reducer;
