import Data from './Data';

export default class User {
  paths = {
    allUsers: `/users`,
    currentUser: `/users/whoami`
  };

  async getCurrentUser() {
    const response = await Data.request(this.paths.currentUser, 'GET', null);
    if (response.status === 200) {
      return response.json().then(data => data);
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }
  
  async createUser(user) {
    const response = await Data.request(this.paths.allUsers, 'POST', user);
    if (response.status === 201) {
      return [];
    }
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }
    else {
      throw new Error();
    }
  }
}
