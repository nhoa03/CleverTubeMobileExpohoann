import {
  GET_PODCAST_LIST,
  HOME_CLIENT,
} from "@/common/constants/urlApi.constants";
import { axiosClient } from "@/common/lib/request";
import { IHomeSectionResponse, IParamsFeaturePodcast } from "./interface";

export const getHome = async () => {
  const res = await axiosClient.get<any, IHomeSectionResponse>(HOME_CLIENT);
  return res.data;
};

export const getFeaturePodcast = (params: IParamsFeaturePodcast) => {
  return axiosClient.get<any, any>(GET_PODCAST_LIST, { params });
};
