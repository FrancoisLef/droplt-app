import { Box, Flex, Heading, Stack } from '@chakra-ui/react';

import Text from '../../../../../../components/Text';

interface StatCardProps {
  label: string;
  icon?: JSX.Element;
  value: string | number | undefined;
}

const StatCard: React.FC<StatCardProps> = ({ label, icon, value }) => {
  return (
    <Box bg="white" rounded="lg" padding="4">
      <Stack>
        <Flex alignItems="center" gap={{ base: 1 }}>
          <Text fontSize="sm" type="secondary">
            {icon}
          </Text>
          <Text fontSize="sm" type="secondary">
            {label}
          </Text>
        </Flex>
        <Heading size="md">{value}</Heading>
      </Stack>
    </Box>
  );
};

export default StatCard;
