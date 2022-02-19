import { Icon, IconProps } from '@chakra-ui/react';
import { ImDroplet } from 'react-icons/im';

const Logo: React.FC<IconProps> = ({ ...props }) => (
  <Icon as={ImDroplet} color="brand.500" {...props} />
);

export default Logo;
