export default class UserApi {
  login() {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 2000);
    });
  }
}
