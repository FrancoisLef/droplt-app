import { IconButton, IconButtonProps, Tooltip } from '@chakra-ui/react';

export interface ControlProps extends Omit<IconButtonProps, 'aria-label'> {
  label: string;
}

const PageSize: React.FC<ControlProps> = ({ label, ...props }) => {
  return (
    <Tooltip label={label}>
      <IconButton
        colorScheme="brand"
        variant="outline"
        size="sm"
        aria-label={label}
        {...props}
      />
    </Tooltip>
  );
};

export default PageSize;
