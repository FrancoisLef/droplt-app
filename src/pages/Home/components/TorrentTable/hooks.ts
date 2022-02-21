import { useSearchParams } from 'react-router-dom';

export const useQueryParamsState = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setQueryParamPage = (pageIndex: number) => {
    setSearchParams({ page: (pageIndex + 1).toString() });
  };

  return {
    queryParamPage: Number(searchParams.get('page')) - 1,
    setQueryParamPage,
  };
};
