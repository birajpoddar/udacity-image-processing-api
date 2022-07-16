import { ImageExpress } from 'types/modules/express';
import converter from '../utilities/converter';
import generator from '../utilities/generator';
import caches from './caches';
import validator from '../utilities/validator';
import finder from '../utilities/finder';

const setImageQueries = (
  req: ImageExpress.Request,
  res: ImageExpress.Response,
  next: ImageExpress.NextFunction
): void => {
  const imgQueries = converter.queryParams(req.query);

  // Store Query and stringified path
  req.imageQueries = imgQueries;
  req.imagePath = converter.stringifyQueryParams(imgQueries);

  next();
};

const getCachedPath = (
  req: ImageExpress.Request,
  res: ImageExpress.Response,
  next: ImageExpress.NextFunction
): void => {
  const key = req.imagePath;
  const cachedPath = caches.getCachedImg(key);

  // If cached Image available, display cached image or delete the key from cache and go to next middleware
  if (cachedPath !== null && validator.isPathExist(cachedPath)) {
    console.log('Cached Image served');
    res.status(200).sendFile(cachedPath);
  } else {
    caches.delCachedImg(key);
    next();
  }
};

const createAssetsPath = async (
  req: ImageExpress.Request,
  res: ImageExpress.Response,
  next: ImageExpress.NextFunction
): Promise<void> => {
  await finder.createAssetsPath();

  next();
};

const resizeImgPath = async (
  req: ImageExpress.Request,
  res: ImageExpress.Response,
  next: ImageExpress.NextFunction
): Promise<void> => {
  const imgLoc = await generator.generatePath(req.imageQueries);

  // Store Image location in Request and add to cache
  if (imgLoc !== null) {
    req.imageLocation = imgLoc;
    caches.setCachedImg(req.imagePath, imgLoc);
  }

  next();
};

const logPathVisited = (
  req: ImageExpress.Request,
  res: ImageExpress.Response,
  next: ImageExpress.NextFunction
): void => {
  console.log(`${req.method}: ${req.originalUrl}`);

  next();
};

export default {
  setImageQueries,
  getCachedPath,
  createAssetsPath,
  resizeImgPath,
  logPathVisited,
};
