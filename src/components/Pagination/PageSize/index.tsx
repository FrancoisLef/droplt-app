import { Select, SelectProps } from '@chakra-ui/react';

import { PAGE_SIZES } from '../constants';
import locales from './locales';

export interface PageSizeProps extends SelectProps {
  pageSize: number;
  onPageSize: Function;
}

const PageSize: React.FC<PageSizeProps> = ({
  pageSize,
  onPageSize,
  ...props
}) => {
  return (
    <Select
      width={36}
      value={pageSize}
      onChange={(e) => onPageSize(Number(e.target.value))}
      {...props}
    >
      {PAGE_SIZES.map((size) => (
        <option key={size} value={size}>
          {locales.formatString(locales.pageSize, { size })}
        </option>
      ))}
    </Select>
  );
};

export default PageSize;
