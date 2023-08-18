import { ApiResponse } from "@/interface";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { TokenService } from ".";

const responseSuccessHandler = (
  response: AxiosResponse<any>
): AxiosResponse | Promise<AxiosResponse> => {
  return response;
};

const responseErrorHandler = async (error: any): Promise<any> => {
  const { response } = error;

  return Promise.reject(response);
};

const api = axios.create({
  timeout: 1000 * 15,
});

api.interceptors.response.use(responseSuccessHandler, responseErrorHandler);

export const get = async (
  url: string,
  params: any = null,
  secure: boolean = true,
  timeout?: number
): Promise<ApiResponse> => {
  const configs: AxiosRequestConfig = await getConfig(secure, params);

  if (timeout) {
    configs.timeout = timeout;
  }

  const response: ApiResponse = await api.get(url, configs);

  return response;
};

export const post = async (
  url: string,
  data: any,
  customHeader: any = {},
  secure: boolean = true,
  timeout?: number
): Promise<any> => {
  const configs: any = await getConfig(secure);

  if (timeout) {
    configs.timeout = timeout;
  }

  if (customHeader) {
    Object.keys(customHeader).forEach((key) => {
      configs[key] = customHeader[key];
    });
  }

  const response: ApiResponse = await api.post(url, data, configs);

  return response;
};

export const put = async (
  url: string,
  data: any,
  secure: boolean = true,
  timeout?: number
): Promise<ApiResponse> => {
  const configs: AxiosRequestConfig = await getConfig(secure);

  if (timeout) {
    configs.timeout = timeout;
  }

  const response: ApiResponse = await api.put(url, data, configs);

  return response;
};

export const deleteMethod = async (
  url: string,
  params: any = null,
  secure: boolean = true,
  timeout?: number
): Promise<ApiResponse> => {
  const configs: AxiosRequestConfig = await getConfig(secure, params);

  if (timeout) {
    configs.timeout = timeout;
  }

  const response: ApiResponse = await api.delete(url, configs);

  return response;
};

export function serialize(obj: any) {
  const str: string =
    "?" +
    Object.keys(obj)
      .reduce(function (a: any, k) {
        a.push(k + "=" + encodeURIComponent(obj[k]));
        return a;
      }, [])
      .join("&");
  return str;
}

const getConfig = async (
  secure: boolean,
  params: any = null
): Promise<AxiosRequestConfig> =>
  new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {};

    try {
      if (params) {
        config.params = params;
      }

      if (secure) {
        try {
          const tokens = TokenService.getTokens();
          const accessToken = tokens?.accessToken;

          if (accessToken) {
            config.headers = {
              Authorization: `Bearer ${accessToken}`,
            };
          }
        } catch (error) {
          config.headers = {};
        }
      }
    } catch (e) {
      reject(e);
    } finally {
      resolve(config);
    }
  });
