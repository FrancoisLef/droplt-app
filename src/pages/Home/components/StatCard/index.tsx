import { Box, Flex, Heading, Stack } from '@chakra-ui/react';

import Text from '../../../../components/Text';

interface StatCardProps {
  label: string;
  icon?: JSX.Element;
  value: string | number | undefined;
}

const StatCard: React.FC<StatCardProps> = ({ label, icon, value }) => {
  return (
    <Box bg="white" rounded="lg" padding="4">
      <Stack>
        <Text fontSize="sm" type="secondary">
          <Flex alignItems="center" gap={{ base: 1 }}>
            {icon}
            {label}
          </Flex>
        </Text>
        <Heading size="md">{value}</Heading>
      </Stack>
    </Box>
  );
};

export default StatCard;
