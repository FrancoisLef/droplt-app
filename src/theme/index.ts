import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import colors from './colors';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors });

export default theme;
