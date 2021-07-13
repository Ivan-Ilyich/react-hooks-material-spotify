export const selectAccessToken = (state) => state.accessToken.accessToken;
export const selectAccessTokenIsLoading = (state) =>
  state.accessToken.selectAccessTokenIsLoading;
export const selectAccessTokenError = (state) => state.accessToken.error;
