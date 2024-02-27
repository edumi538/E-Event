import axios, { AxiosResponse } from "axios";

interface IBaseService {
  api: string;
  data?: object;
  params?: {
    headers?: {
      ContentType: string;
    };
    withCredentials?: boolean;
  };
}

interface IServiceBase {
  get({ api, params }: IBaseService): Promise<AxiosResponse>;
  post({ api, data, params }: IBaseService): Promise<AxiosResponse>;
  put({ api, data, params }: IBaseService): Promise<AxiosResponse>;
  delete({ api, params }: IBaseService): Promise<AxiosResponse>;
}

class ServiceBase implements IServiceBase {
  constructor() {}
  get({ api, params }: IBaseService) {
    return axios.get(api, params);
  }
  post = ({ api, data, params }: IBaseService) => {
    return axios.post(api, data, params);
  };
  put = ({ api, data, params }: IBaseService) => {
    return axios.put(api, data, params);
  };
  delete = ({ api, params }: IBaseService) => {
    return axios.delete(api, params);
  };
}
export default new ServiceBase();
