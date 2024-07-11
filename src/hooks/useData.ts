import useSWR from 'swr';
import { fetcher } from '../lib/axios';

interface UseDataResponse<T> {
  data: T | undefined;
  error: any;
  isLoading: boolean;
}

const useData = <T>(
  url: string,
  params: Record<string, any> = {}
): UseDataResponse<T> => {
  const { data, error, isLoading } = useSWR([url, params], ([url, params]) =>
    fetcher(url, params)
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useData;
