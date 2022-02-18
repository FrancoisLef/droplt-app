import { Flex, FlexProps, Icon, Text } from '@chakra-ui/react';
import { ImDroplet } from 'react-icons/im';

interface LogoProps extends FlexProps {}

const Logo: React.FC<LogoProps> = ({ ...props }) => (
  <Flex justify="center" align="center" {...props}>
    <Text fontWeight="bold" color="blue.500">
      Dr
    </Text>
    <Icon as={ImDroplet} color="brand.100" />
    <Text fontWeight="bold" color="blue.500">
      plt
    </Text>
  </Flex>
);

export default Logo;
