import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.950}',
      100: '{blue.900}',
      200: '{blue.800}',
      300: '{blue.700}',
      400: '{blue.600}',
      500: '{blue.800}', // cor primária
      600: '{blue.400}',
      700: '{blue.300}',
      800: '{blue.200}',
      900: '{blue.100}',
      950: '{blue.50}',
    },
  },
});

export { AppPreset };
