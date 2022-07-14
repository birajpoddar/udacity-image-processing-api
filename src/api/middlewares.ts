import { Request, Response, NextFunction } from 'express';
import converter from '../utilities/converter';
import generator from '../utilities/generator';
import caches from './caches';

const imageQueries = (req: Request, res: Response, next: NextFunction) => {
  const imgQueries = converter.queryParams(req.query);

  // Store Query and stringified path
  req.ImageQueries = imgQueries;
  req.ImagePath = converter.stringifyQueryParams(imgQueries);

  next();
};

const cachePath = (req: Request, res: Response, next: NextFunction) => {
  const cachedPath = caches.getCachedImg(req.ImagePath);

  // If cached Image available, display cached image or go to next middleware
  if (cachedPath != null) {
    res.status(200).sendFile(cachedPath);
  } else {
    next();
  }
};

const resizeImgPath = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const imgPath = (await generator.generatePath(
    req.ImageQueries,
    req.ImagePath
  )) as string;

  // Store Image lOcation in Request
  req.ImageLocation = imgPath;

  next();
};

export default {
  imageQueries,
  cachePath,
  resizeImgPath,
};
