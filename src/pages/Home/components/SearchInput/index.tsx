import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ImSearch } from 'react-icons/im';

import locales from './locales';

interface SearchInputComponentProps {
  name: string;
  onChange: Function;
}

const SearchInput: React.FC<SearchInputComponentProps> = ({
  name,
  onChange,
}) => {
  return (
    <InputGroup mb="4">
      <InputLeftElement>
        <Icon as={ImSearch} color="gray.300" />
      </InputLeftElement>
      <Input
        onChange={(e) => onChange(e.target.value)}
        value={name}
        placeholder={locales.searchPlaceholder}
      />
    </InputGroup>
  );
};

export default SearchInput;
