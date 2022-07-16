import core from 'express-serve-static-core';
import http from 'http';

declare namespace ImageExpress {
  /* Application */
  export interface Application extends core.Application {
    use(middleware: ImageExpress.MiddlewareCallback<T>): this;
    use(path: string, callback: ImageExpress.RequestCallback<T>): this;
    use(path: string, rotes: ImageExpress.IRouter): this;
    listen(port: number, callback?: ImageExpress.VoidCallback): http.Server;
  }

  /* Request & Query */
  export interface Request extends core.Request {
    query: ImageExpress.RequestQueries;
    imageQueries: ImageQueries.Queries;
    imagePath: string;
    imageLocation: string;
  }

  export class RequestQueries {
    filename: string;
    width: string;
    height: string;
  }

  /* Response */
  export interface Response extends core.Response {
    status(statusCode: number): this;
    send(message: string): this;
    sendFile(filePath: string): this;
  }

  /* Router */
  export interface IRouter extends core.IRouter {
    get<T>(path: string, callback: RequestCallback<T>): this;
    use<T>(middleware: MiddlewareCallback<T>): this;
  }

  /* Callbacks */
  // prettier-ignore
  export type RequestCallback<T> = (req: ImageExpress.Request, res: ImageExpress.Response) => T;

  // prettier-ignore
  export type MiddlewareCallback<T> = (req: ImageExpress.Request, res: ImageExpress.Response, next: ImageExpress.NextFunction) => T;

  export type VoidCallback = () => void;

  /* NextFunction */
  export interface NextFunction extends core.NextFunction {
    (): void;
  }
}
