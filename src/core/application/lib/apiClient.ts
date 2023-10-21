import axios, { AxiosResponse, CanceledError, AxiosError } from "axios";

export { CanceledError };

const axiosInstance = axios.create({
  baseURL: "http://localhost:5267",
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${endpoint}/`;
  }

  get = (data: T) => {
    return axiosInstance
      .get<T>(this.endpoint, { data })
      .then((res: AxiosResponse<T>) => res.data)
      .catch((error: AxiosError) => {
        throw error;
      });
  };
  post = (data: T) => {
    return axiosInstance
      .post<T>(this.endpoint, data)
      .then((res: AxiosResponse<T>) => res.data)
      .catch((error: AxiosError) => {
        throw error;
      });
  };

  put = (data: T) => {
    return axiosInstance
      .put<T>(this.endpoint, data)
      .then((res: AxiosResponse<T>) => res.data)
      .catch((error: AxiosError) => {
        throw error;
      });
  };

  delete = (data: T) => {
    return axiosInstance
      .delete<T>(this.endpoint, { data })
      .then((res: AxiosResponse<T>) => res.data)
      .catch((error: AxiosError) => {
        throw error;
      });
  };
}

export default APIClient;
