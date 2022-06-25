import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      blue: '#2647D4',
      pink: '#C041A4',
      green: '#2ACAC9',
      gray100: '#ECE4EE',
      gray900: '#000426',
      red100: '#F6785D',
      red200: '#A9546A',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
  },
});
