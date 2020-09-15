import axios from 'axios';
import { HttpError, HttpConnectionError } from '../errors';

export class HttpService {
  private baseURL: string;

  constructor({ baseURL }: any) {
    this.baseURL = baseURL;
  }

  async get(url: string, params: object = {}) {
    return this.httpWrapper({ method: 'GET', url, params: { ...params } });
  }

  async post(url: string, data: any) {
    return this.httpWrapper({ method: 'POST', url, data });
  }

  async put(url: string, data: any) {
    return this.httpWrapper({ method: 'PUT', url, data });
  }

  async delete(url: string, data = {}) {
    return this.httpWrapper({ method: 'DELETE', url, data });
  }

  async patch(url: string, data: any) {
    return this.httpWrapper({ method: 'PATCH', url, data });
  }

  private async httpWrapper(params: any) {
    try {
      const response = await axios({
        baseURL: this.baseURL,
        ...params,
      });
      
      return response.data.data || response;
    } catch (error) {
      const { response } = error;
      console.log(error);

      if (!response || response === undefined) {
        throw new HttpConnectionError();
      }

      throw new HttpError(
        response.status,
        response.data.message,
        response.data.code,
        error.response.data.errors,
      );
    }
  }
}
