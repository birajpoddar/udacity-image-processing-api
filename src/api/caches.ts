import server from '../server';
import validator from '../utilities/validator';

const getCachedImg = (key: string): string | null => {
  if (isCacheAvailable(key)) {
    return server.cache.get(key) as string;
  }

  return null;
};

const setCachedImg = (key: string, value: string): void => {
  if (!isCacheAvailable(key) || server.cache.get(key) !== value) {
    server.cache.set(key, value);
  }
};

const delCachedImg = (key: string): void => {
  if (isCacheAvailable(key)) {
    server.cache.del(key);
  }
};

const isCacheAvailable = (key: string): boolean => {
  return server.cache.has(key);
};

const setCacheAgain = (key: string, value: string): void => {
  if (validator.isPathExist(value)) {
    setCachedImg(key, value);
    console.log(`Cache reset done for ${key}`);
  }
};

export default {
  getCachedImg,
  setCachedImg,
  delCachedImg,
  isCacheAvailable,
  setCacheAgain,
};
