import axios from "axios";
import { IBodyLoginSocial, IUser, User } from "../type";
import { request } from "../common/config/request";

export const HomeAPI = {
  getUser: async () => {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response;
  },
  getUserById: async (address: string) => {
    const response = await axios.get<IUser>(
      `https://jsonplaceholder.typicode.com/users/${address}`
    );
    return response.data;
  },
  createUser: async (data: User) => {
    const response = await request.post(`/api/v1/user/createUser`, data);
    return response.data;
  },
  getUserByAddress: async (address: string) => {
    const response = await request.get(`/api/v1/user?address=${address}`);
    return response.data;
  },
  getVerifySocial: async (address: string) => {
    const response = await request.get(
      `/api/v1/user/social?address=${address}`
    );
    return response.data;
  },
  loginSocial: async (data: IBodyLoginSocial) => {
    const response = await request.put(`/api/v1/user`, data);
    return response.data;
  },
  verifySocial: async (data: IBodyLoginSocial) => {
    const response = await request.post(`/api/v1/user/verifySocial`, data);
    return response.data;
  },
};
