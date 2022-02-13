import {
  CircularProgress,
  CircularProgressLabel,
  CircularProgressProps,
  Icon,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { ImCheckmark } from 'react-icons/im';

interface CircularProgressComponentProps extends CircularProgressProps {
  value: number;
}

const CircularProgressComponent: React.FC<CircularProgressComponentProps> = ({
  value,
  ...props
}) => {
  const progress = value * 100;
  const rounded = Math.round(progress);

  if (rounded === 100) {
    return (
      <Icon as={ImCheckmark} w={3} h={3} color={mode('blue.300', 'blue.400')} />
    );
  }

  return (
    <CircularProgress
      trackColor={mode('gray.200', 'gray.400')}
      color={mode('blue.300', 'blue.400')}
      value={progress}
      {...props}
    >
      <CircularProgressLabel
        color={mode('gray.500', 'gray.500')}
        fontWeight="light"
      >
        {Math.round(progress)}%
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default CircularProgressComponent;
