import { GET_INFO_USER } from "@/common/constants/urlApi.constants";
import { axiosClient } from "@/common/lib/request";
import { POST_INFO_USER } from "../../common/constants/urlApi.constants";
import { IUserInfoResponse } from "../interface";

export const getInfoUser = async () => {
  const res = await axiosClient.get<any, IUserInfoResponse>(GET_INFO_USER);
  return res;
};

export const postInfoUser = async (data: any) => {
  const res = await axiosClient.patch(POST_INFO_USER, { ...data });
  return res;
};
