import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ImSearch } from 'react-icons/im';

import locales from './locales';

interface NameFilterComponentProps {
  value: string;
  onChange: (value: string) => void;
}

const NameFilter: React.FC<NameFilterComponentProps> = ({
  value,
  onChange,
}) => {
  return (
    <InputGroup mb="4">
      <InputLeftElement>
        <Icon as={ImSearch} color="gray.300" />
      </InputLeftElement>
      <Input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={locales.searchPlaceholder}
      />
    </InputGroup>
  );
};

export default NameFilter;
