import { Box, Heading, Stack } from '@chakra-ui/react';

import Text from '../../../../components/Text';

interface StatCardProps {
  label: string;
  value: string | number | undefined;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <Box bg="white" rounded="lg" padding="4">
      <Stack>
        <Text fontSize="sm" type="secondary">
          {label}
        </Text>
        <Heading size="md">{value}</Heading>
      </Stack>
    </Box>
  );
};

export default StatCard;
