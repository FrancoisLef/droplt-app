import { Flex, FlexProps, Text, TextProps } from '@chakra-ui/react';

import Logo from '../Logo';

const textProps: Partial<TextProps> = {
  fontFamily: 'mono',
  fontWeight: 'bold',
  // color: 'brand.500',
  color: 'brand.800',
  letterSpacing: 'tighter',
};

const LogoName: React.FC<FlexProps> = ({ ...props }) => (
  <Flex justify="center" align="center" {...props}>
    <Text {...textProps}>Dr</Text>
    <Logo />
    <Text {...textProps}>plt</Text>
  </Flex>
);

export default LogoName;
