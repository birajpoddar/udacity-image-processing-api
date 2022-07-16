import express from 'express';
import { ImageExpress } from 'types/modules/express';
import middlewares from './middlewares';

const routes: ImageExpress.IRouter = express.Router();

// adding Middlewares
routes.use(middlewares.setImageQueries);
routes.use(middlewares.getCachedPath);
routes.use(middlewares.createAssetsPath);
routes.use(middlewares.resizeImgPath);

routes.get(
  '/',
  async (
    req: ImageExpress.Request,
    res: ImageExpress.Response
  ): Promise<void> => {
    const imgLoc = req.imageLocation;

    if (imgLoc !== undefined) {
      res.status(200).sendFile(imgLoc);
    } else {
      console.log('Image not found');
      res.status(404).send('Image not found');
    }
  }
);

export default routes;
