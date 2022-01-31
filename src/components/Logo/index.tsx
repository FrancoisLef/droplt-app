import { Flex, Icon, Text, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';
import { ImDroplet } from 'react-icons/im';

const Logo = () => {
  return (
    <Flex justify="center" align="center">
      <Icon mr={2} as={ImDroplet} color={mode('blue.500', 'blue.300')} />
      <Text colorScheme={mode('white', 'black')}>Droplt</Text>
    </Flex>
  );
};

export default Logo;
