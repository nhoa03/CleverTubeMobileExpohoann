import { useMutation, useQuery } from 'react-query';
import { QUERY_KEYS } from '@/common/constants/querykeys.constants';
import { getInfoUser, postInfoUser } from '../api/account';

export const useGetInfoUser = () => {
  return useQuery(QUERY_KEYS.GET_INFO_USER, () => getInfoUser(), { retry: 1 });
};

export const usePostInfoUser = () => {
  return useMutation(QUERY_KEYS.POST_INFO_USER, postInfoUser);
};
