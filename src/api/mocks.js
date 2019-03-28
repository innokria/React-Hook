const DELAY = 250;

export default class MockedApi {
  static fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { name: 'hello', surname: 'world' },
          { name: 'matrix', surname: 'kids' }
        ])
      }, DELAY);
    });
  }
}
