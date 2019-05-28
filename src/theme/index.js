// @flow weak

import createMixins from './mixins';
import layout from './layout';
import makePalette from './palette';

export function createAtomicTheme(mode = 'light') {
  const theme = {
    dir: 'ltr',
    layout,
    mixins: createMixins(),
    palette: makePalette(mode)
  };
  return theme;
}

export default createAtomicTheme;
