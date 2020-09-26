export const getAuthorization = state => state.auth.isAuthenticated;
export const geteName = state => state.auth.user.name;
export const getErrorsAuthSelector = state => state.auth.error;
