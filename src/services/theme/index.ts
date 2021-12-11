import { extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

export const theme = extendTheme({
  components: {
    Steps,
  },
  colors: {
    brand: {
      100: '#f7fafc',
    },
    indigo: {
      600: '#4F46E5',
    },
    gray: {
      500: '#6B7280',
    },
  },
});
