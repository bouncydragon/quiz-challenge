import useSWRImmutable from 'swr';
import { fetcher } from '../lib/axios';

type UseDataResponse<T> = {
  data: T | undefined;
  error: any;
  isLoading: boolean;
};

export const useData = <T>(
  url: string,
  params: Record<string, any> = {}
): UseDataResponse<T> => {
  const { data, error, isLoading } = useSWRImmutable(
    [url, params],
    ([url, params]) => fetcher(url, params),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  );
  return {
    data,
    error,
    isLoading,
  };
};
