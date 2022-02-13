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
      <Icon as={ImCheckmark} w={3} h={3} color={mode('gray.300', 'gray.600')} />
    );
  }

  return (
    <CircularProgress value={progress} {...props}>
      <CircularProgressLabel color={mode('gray.800', 'blue.300')}>
        {Math.round(progress)}%
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default CircularProgressComponent;
