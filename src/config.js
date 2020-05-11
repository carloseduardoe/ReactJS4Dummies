const apiBaseUrl = 'http://localhost:5000/api';

export default {
  paths: {
    api: apiBaseUrl,
    indexUsers: `${apiBaseUrl}/users`,
    currentUser: `${apiBaseUrl}/users/whoami`,
  }
};
