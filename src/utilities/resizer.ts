import sharp from 'sharp';
import finder from './finder';
import validator from './validator';

const resizeImage = async (
  queries: ImageQueries.Queries,
  imgLoc: string
): Promise<boolean> => {
  if (validator.isPathExists(imgLoc)) {
    return true;
  }

  return await resize(queries, imgLoc);
};

const resize = async (
  queries: ImageQueries.Queries,
  imgLoc: string
): Promise<boolean> => {
  const [, width, height] = queries;
  const imgFullPath = finder.getFullImagePath(queries);

  await sharp(imgFullPath)
    .resize(width, height)
    .toFile(imgLoc)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });

  return false;
};

export default {
  resizeImage,
  resize,
};
