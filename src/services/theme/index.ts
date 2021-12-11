import { extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

export const theme = extendTheme({
  components: {
    Steps,
  },
  textStyles: {
    h1: {
      fontSize: ['20px', '42px'],
      fontWeight: 'bold',
      lineHeight: '28px',
    },
    h2: {
      fontSize: ['10px', '20px'],
      fontWeight: 'bold',
      lineHeight: '28px',
    },
    h3: {
      fontSize: ['10px', '16px'],
      fontWeight: 'bold',
      lineHeight: '28px',
    },
  },
  colors: {
    brand: {
      100: '#4F46E5',
      200: '#4F46E5',
      300: '#4F46E5',
      400: '#4F46E5',
      500: '#4F46E5',
      600: '#4F46E5',
      700: '#4F46E5',
      800: '#4F46E5',
      900: '#4F46E5',
    },
    indigo: {
      600: '#4F46E5',
    },
    gray: {
      500: '#6B7280',
    },
    green: {
      100: '#D1FAE5',
    },
  },
});
