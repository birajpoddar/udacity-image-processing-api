import path from 'path';
import validator from './validator';
import fs from 'fs';

const assestsFull = 'assets/full/';
const assestsResized = 'assets/resized/';
const imgExt = '.jpg';

const getAssetsPath = (full: boolean): string => {
  const projPath = path.resolve();
  let assetsPath: string;
  if (full) {
    assetsPath = path.join(projPath, assestsFull);
  } else {
    assetsPath = path.join(projPath, assestsResized);
  }

  return assetsPath;
};

const getImagePath = (queries: ImageQueries.Queries): string => {
  const [, width, height] = queries;
  let imgPath: string;

  if (width < 0 && height < 0) {
    imgPath = getFullImagePath(queries);
  } else {
    imgPath = getResizedImagePath(queries);
  }

  return imgPath;
};

const getFullImagePath = (queries: ImageQueries.Queries): string => {
  const [imgName, ,] = queries;
  const assetsPath = getAssetsPath(true);
  const imgPath = path.join(assetsPath, imgName + imgExt);

  return imgPath;
};

const getResizedImagePath = (queries: ImageQueries.Queries): string => {
  const [imgName, width, height] = queries;
  const assetsPath = getAssetsPath(false);
  const imgPath = path.join(
    assetsPath,
    `${imgName}_${width}_${height}${imgExt}`
  );

  return imgPath;
};

const createAssetsPath = async (): Promise<boolean> => {
  const assetsPath = [getAssetsPath(true), getAssetsPath(false)];

  assetsPath.forEach((path) => {
    if (!validator.isPathExist(path)) {
      fs.mkdir(path, (err) => {
        if (err) {
          console.log(`${path} creation failed : ${err.message}`);
          return false;
        }

        console.log(`${path} created successfully`);
      });
    }
  });

  return true;
};

export default {
  getAssetsPath,
  getImagePath,
  getFullImagePath,
  getResizedImagePath,
  createAssetsPath,
};
