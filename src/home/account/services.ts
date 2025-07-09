import {
  CHECK_IN,
  GET_INFO_USER,
  IS_CHECK_IN,
} from "@/common/constants/urlApi.constants";
import { axiosClient } from "@/common/lib/request";
import { IIsCheckIn } from "./interfaces";

export const getIsCheckIn = (): Promise<IIsCheckIn> => {
  return axiosClient.get(IS_CHECK_IN);
};

export const checkIn = () => {
  return axiosClient.post(CHECK_IN);
};

export const getClientInfo = () => {
  return axiosClient.get(GET_INFO_USER);
};
