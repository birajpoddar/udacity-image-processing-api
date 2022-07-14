import path from 'path';

const assestsFull = 'assets/full/';
const assestsResized = 'assets/resized/';
const imgExt = '.jpg';

const getAssetsPath = (full = false): string => {
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
  const assetsPath = getAssetsPath();
  const imgPath = path.join(
    assetsPath,
    `${imgName}_${width}_${height}${imgExt}`
  );

  return imgPath;
};

export default {
  getAssetsPath,
  getImagePath,
  getFullImagePath,
  getResizedImagePath,
};
