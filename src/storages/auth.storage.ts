import {MMKV} from 'react-native-mmkv';

const storage = new MMKV({
  id: 'auth-storage',
  encryptionKey: 'KEY_FOR_ENCRIPTION',
});

export default class AuthStorage {
  static setToken(token: string) {
    storage.set('token', token);
  }

  static getToken() {
    return storage.getString('token');
  }

  static removeToken() {
    storage.delete('token');
  }
}
