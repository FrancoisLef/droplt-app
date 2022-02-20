import { Flex, FlexProps, TextProps } from '@chakra-ui/react';

import Logo from '../Logo';
import Text from '../Text';

const textProps: Partial<TextProps> = {
  fontFamily: 'mono',
  fontWeight: 'bold',
  color: 'brand.800',
  letterSpacing: 'tighter',
};

const LogoName: React.FC<FlexProps> = ({ color, ...props }) => (
  <Flex justify="center" align="center" {...props}>
    <Text textColor={color} {...textProps}>
      Dr
    </Text>
    <Logo color={color || 'brand.500'} />
    <Text textColor={color} {...textProps}>
      plt
    </Text>
  </Flex>
);

export default LogoName;
