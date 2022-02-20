import { Text, TextProps } from '@chakra-ui/react';

interface TextComponentProps extends TextProps {
  type?: 'primary' | 'secondary' | 'light' | 'disabled';
}

const TextComponent: React.FC<TextComponentProps> = ({
  children,
  type = 'primary',
  ...props
}) => {
  const colorMap = {
    primary: 'black',
    secondary: 'gray.500',
    light: 'gray.300',
    disabled: 'gray.300',
  };

  return (
    <Text color={colorMap[type]} {...props}>
      {children}
    </Text>
  );
};

export default TextComponent;
