import {
  CircularProgress,
  CircularProgressLabel,
  CircularProgressProps,
  useColorModeValue as mode,
} from '@chakra-ui/react';

interface CircularProgressComponentProps extends CircularProgressProps {
  value: number;
}

const CircularProgressComponent: React.FC<CircularProgressComponentProps> = ({
  value,
  ...props
}) => {
  const progress = value * 100;

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
