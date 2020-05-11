import Data from './Data';
import config from '../config';

export default class User {
  constructor(properties) {
    Object.assign(this, properties);
  }

  async getCurrentUser() {
    const response = await Data.request(config.paths.currentUser, 'GET', null);
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
  
  async add() {
    const response = await Data.request( config.paths.indexUsers, 'POST', { ...this });

    if(response.status == 201)
      return [];
    
    if(response.status == 400)
      return response.json().then(data => {
        return data.errors;
      });
    
    throw new Error();
  }
}
