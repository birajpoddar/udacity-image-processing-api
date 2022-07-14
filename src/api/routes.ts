import express from 'express';
import caches from './caches';
import middlewares from './middlewares';

const routes = express.Router();

// adding Middlewares
routes.use(middlewares.imageQueries);
routes.use(middlewares.cachePath);
routes.use(middlewares.resizeImgPath);

routes.get('/', async (req, res): Promise<void> => {
  const imgLoc = req.ImageLocation;

  if (imgLoc != undefined) {
    caches.setCachedImg(req.ImagePath, imgLoc);
    res.status(200).sendFile(imgLoc);
  } else {
    res.status(404).send('Image cannot be found');
  }
});

export default routes;
