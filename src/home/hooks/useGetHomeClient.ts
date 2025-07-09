import { QUERY_KEYS } from "@/common/constants/querykeys.constants";
import { useQuery } from "react-query";
import { getHome } from "../common/service";

export const useGetHomeClient = () => {
  return useQuery([QUERY_KEYS.GET_HOME], () => getHome());
};
