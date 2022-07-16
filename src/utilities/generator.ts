import validator from './validator';
import finder from './finder';
import resizer from './resizer';

const generatePath = async (
  queries: ImageQueries.Queries
): Promise<string | null> => {
  const imgLoc = finder.getImagePath(queries);
  const [file, ,] = queries;

  // If full/resized image exists, get the image location of the file to be served
  // prettier-ignore
  if (file !== undefined && (validator.isFullImageExist(queries) || validator.isPathExist(imgLoc))) {
    if (!validator.isPathExist(imgLoc)) {
      await resizer.resizeImage(queries, imgLoc);
    } else {
      console.log('Existing Image served');
    }

    return imgLoc ?? null;
  }

  return null;
};

export default {
  generatePath,
};
