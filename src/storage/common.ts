import type {MMKV} from 'react-native-mmkv';

export const getAllKeys = (storage: MMKV) => {
  return storage.getAllKeys();
};

export const hasValue = (storage: MMKV, key: string) => {
  return storage.contains(key);
};

export const setStorage = (
  storage: MMKV,
  key: string,
  value: string | number | boolean,
) => {
  storage.set(key, value);
};

export const getStringStorage = (storage: MMKV, key: string) => {
  return storage.getString(key);
};

export const getNumberStorage = (storage: MMKV, key: string) => {
  return storage.getNumber(key);
};

export const getBooleanStorage = (storage: MMKV, key: string) => {
  return storage.getBoolean(key);
};

export const deleteStorage = (storage: MMKV, key: string) => {
  storage.delete(key);
};

export const clearStorage = (storage: MMKV) => {
  storage.clearAll();
};
