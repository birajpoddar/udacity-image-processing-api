import server from '../server';

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

const isCacheAvailable = (key: string): boolean => {
  return server.cache.has(key);
};

export default {
  getCachedImg,
  setCachedImg,
  isCacheAvailable,
};
