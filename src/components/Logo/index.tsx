import { Flex, Icon, Text, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';
import { ImDroplet } from 'react-icons/im';

const Logo = () => {
  return (
    <Flex justify="center" align="center">
      <Text colorScheme={mode('white', 'black')}>Dr</Text>
      <Icon as={ImDroplet} color={mode('blue.500', 'blue.300')} />
      <Text colorScheme={mode('white', 'black')}>plt</Text>
    </Flex>
  );
};

export default Logo;
