import { ImageExpress } from 'types/modules/express';
import validator from './validator';

const keys = ['filename', 'width', 'height'];

const trimString = (str: unknown): string => {
  const s = str as string;

  if (validator.isUndefined(str as string)) {
    return s;
  }

  return s.trim();
};

const toInt = (str: string): number => {
  if (validator.isUndefined(str as string)) {
    return -1;
  }

  const trimmed = trimString(str);
  const num = parseInt(trimmed);

  return isNaN(num) ? -1 : num;
};

const queryParams = (
  queries: ImageExpress.RequestQueries
): ImageQueries.Queries => {
  const file = queries.filename;
  const width = queries.width;
  const height = queries.height;

  const fileStr = trimString(file);
  let widthNum = toInt(width);
  let heightNum = toInt(height);

  [widthNum, heightNum] = normalizeSize(widthNum, heightNum);

  return [fileStr, widthNum, heightNum];
};

const normalizeSize = (width: number, height: number): ImageQueries.Sizes => {
  const wflag = width < 1;
  const hFlag = height < 1;

  // XOR Operation
  if (wflag ? !hFlag : hFlag) {
    if (wflag) {
      width = height;
    } else {
      height = width;
    }
  }

  return [width, height];
};

const stringifyQueryParams = (queries: ImageQueries.Queries): string => {
  const mapped = keys.map((data, index) => {
    return `${data}=${queries[index]}`;
  });

  return mapped.join('&');
};

export default {
  trimString,
  toInt,
  queryParams,
  normalizeSize,
  stringifyQueryParams,
};
