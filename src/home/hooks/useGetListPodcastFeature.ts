import { useQuery } from "react-query";
import { IParamsFeaturePodcast } from "../common/interface";
import { getFeaturePodcast } from "../common/service";
import { QUERY_KEYS } from "../../common/constants/querykeys.constants";

export const useGetListPodcastFeature = (params: IParamsFeaturePodcast) => {
  return useQuery([QUERY_KEYS.PODCAST_FEATURE_LIST, params], () =>
    getFeaturePodcast(params)
  );
};
