import { BaseError } from './BaseError';

export class HttpError extends BaseError {
  constructor(status: number, message: string, code: string, info?: any) {
    super(
      message || 'Error occured during operation',
      status || 409,
      code || 'HTTP_ERROR',
      info || undefined,
    );
  }
}

export class HttpConnectionError extends BaseError {
  constructor(info?: any) {
    super(
      'Error occured during operation. Please try again later.',
      500,
      'HTTP_CONNECTION_ERROR',
      info || undefined,
    );
  }
}
