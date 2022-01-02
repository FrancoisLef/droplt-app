import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';

interface AlertComponentProps {
  title?: string;
  message: string;
  isClosable?: boolean;
  type?: 'info' | 'warning' | 'success' | 'error' | undefined;
}

const AlertComponent = ({
  title,
  message,
  type,
  isClosable,
}: AlertComponentProps) => {
  return (
    <Alert status={type || 'error'}>
      <AlertIcon />
      {title ? <AlertTitle mr={2}>{title}</AlertTitle> : null}
      <AlertDescription>{message}</AlertDescription>
      {isClosable ? (
        <CloseButton position="absolute" right="8px" top="8px" />
      ) : null}
    </Alert>
  );
};

export default AlertComponent;
