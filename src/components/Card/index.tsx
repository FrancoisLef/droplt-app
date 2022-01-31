import { Box, useColorModeValue as mode } from '@chakra-ui/react';

const Card: React.FC = ({ children, ...props }) => {
  return (
    <Box
      bg={mode('white', 'gray.700')}
      py={[4, 8]}
      px={[4, 10]}
      shadow="base"
      rounded={['base', 'lg']}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
