import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';

type ThemeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('sombre', 'clair');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Passer en mode ${text}`}
      {...props}
    />
  );
};

export default ThemeSwitcher;
