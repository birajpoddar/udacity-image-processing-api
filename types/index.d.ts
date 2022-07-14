declare namespace ImageQueries {
  type Queries = [filename: string, width: number, height: number];

  type Sizes = [width: number, height: number];
}

declare namespace Express {
  interface Request {
    ImageQueries: Queries;
    ImagePath: string;
    ImageLocation: string;
  }
}
