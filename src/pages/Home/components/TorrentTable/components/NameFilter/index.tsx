import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { ImSearch } from 'react-icons/im';

import Text from '../../../../../../components/Text';
import locales from './locales';

interface NameFilterComponentProps {
  value: string;
  count: number;
  onChange: (value: string) => void;
}

const NameFilter: React.FC<NameFilterComponentProps> = ({
  value,
  count,
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
      <InputRightElement>
        <Text type="light">{count}</Text>
      </InputRightElement>
    </InputGroup>
  );
};

export default NameFilter;
