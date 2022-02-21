import Control, { ControlProps } from './Control';
import Count, { CountProps } from './Count';
import PageSize, { PageSizeProps } from './PageSize';

interface PaginationSubComponents {
  Control: React.FC<ControlProps>;
  Count: React.FC<CountProps>;
  PageSize: React.FC<PageSizeProps>;
}

const Pagination: React.FC<{}> & PaginationSubComponents = () => {
  return null;
};

Pagination.Control = Control;
Pagination.Count = Count;
Pagination.PageSize = PageSize;

export * from './constants';

export default Pagination;
