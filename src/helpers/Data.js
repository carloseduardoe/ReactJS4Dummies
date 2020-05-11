import config from '../config';

export default class Data {
  static request(path, method = 'GET', body = null) {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    return fetch(path, options);
  }
}
