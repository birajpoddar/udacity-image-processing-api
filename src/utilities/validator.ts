import finder from './finder';
import fs from 'fs';

const isFullImageExist = (queries: ImageQueries.Queries): boolean => {
  const imgPath = finder.getFullImagePath(queries);

  return fs.existsSync(imgPath);
};

const isResizedImageExist = (queries: ImageQueries.Queries): boolean => {
  const imgPath = finder.getResizedImagePath(queries);

  return fs.existsSync(imgPath);
};

const isPathExists = (path: string): boolean => {
  return fs.existsSync(path);
};

const isUndefined = (str: string): boolean => {
  if (str == undefined) {
    return true;
  }

  return false;
};

export default {
  isFullImageExist,
  isResizedImageExist,
  isPathExists,
  isUndefined,
};
