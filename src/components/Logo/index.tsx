import { Flex, Icon, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { ImDroplet } from 'react-icons/im';

const Logo: React.FC = ({ ...props }) => (
  <Flex justify="center" align="center" {...props}>
    <Text colorScheme={mode('white', 'black')}>Dr</Text>
    <Icon as={ImDroplet} color={mode('blue.300', 'blue.300')} />
    <Text colorScheme={mode('white', 'black')}>plt</Text>
  </Flex>
);

export default Logo;
