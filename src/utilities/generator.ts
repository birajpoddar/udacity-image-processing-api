import validator from './validator';
import finder from './finder';
import resizer from './resizer';
import caches from '../api/caches';

const generatePath = async (
  queries: ImageQueries.Queries,
  path: string
): Promise<string | null> => {
  let imgPath: string;
  const [file, ,] = queries;

  if (file != undefined && validator.isFullImageExist(queries)) {
    imgPath = finder.getImagePath(queries);

    if (!validator.isPathExists(imgPath)) {
      const flag = await resizer.resizeImage(queries, imgPath);
      flag ?? caches.setCachedImg(path, imgPath);
    }

    return imgPath ?? null;
  }

  return null;
};

export default {
  generatePath,
};
