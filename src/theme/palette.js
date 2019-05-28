// @flow weak
import { alert as cAlerts } from './colors';

const colors = {
  darkBackground: '#151519'
};

export const light = {
  header: {
    background: '#fff',
    boxShadow: '-7px -3px 10px 0px rgba(0,0,0,0.34)',
    filter: {
      textShadow: `0 0 1px #000`,
      WebkitTextFillColor: 'white', // #313131
      WebkitTextStrokeWidth: '1.5px',
      WebkitTextStrokeColor: '#828282' // fff
    }
  },
  filters: {
    boxShadow: '-7px -3px 6px 0px rgba(0, 0, 0, 0.34)',
    background: 'transparent',
    color: '#617083',
    active: {
      color: '#617083',
      background: '#e5e5e5'
    }
  },
  search: {
    color: '#505050',
    background: 'transparent'
  },
  registry: {
    background: 'transparent',
    color: '#afafaf',
    borderTopColor: 'transparent',
    item: {
      color: '#617083',
      name: '#3c495a'
    }
  },
  tag: {
    color: 'rgba(80, 80, 80, 0.87)',
    background: 'transparent'
  },
  app: {
    background: 'transparent'
  },
  alert: {
    color: '#af2a2a'
  }
};

export const dark = {
  header: {
    background: colors.darkBackground,
    boxShadow: 'inset -7px -3px 10px 0px rgba(0,0,0,0.34)',
    filter: {
      textShadow: `0 0 1px #fff`,
      WebkitTextFillColor: '#000',
      WebkitTextStrokeWidth: '1.5px',
      WebkitTextStrokeColor: '#c7c6c6'
    }
  },
  filters: {
    boxShadow:
      'inset -7px -3px 6px 0px rgba(0, 0, 0, 0.34)',
    background: colors.darkBackground,
    color: '#efefef',
    active: {
      color: '#000000',
      background: '#b9b9b9'
    }
  },
  search: {
    color: '#fbfbfb',
    background: colors.darkBackground
  },
  registry: {
    background: colors.darkBackground,
    color: '#6b6b6b',
    borderTopColor: '#2b2b2b',
    item: {
      color: '#d2d2d2',
      name: '#fbfbfb'
    }
  },
  tag: {
    color: '#fff',
    background: colors.darkBackground
  },
  app: {
    background: '#0d0d15'
  },
  alert: {
    color: '#ecd0d0'
  }
};

export const shades = { light, dark };
export const alert = cAlerts;

export default function createPalette(type) {
  return shades[type];
}

export { createPalette };
