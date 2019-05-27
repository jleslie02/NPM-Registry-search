// @flow weak
import {
  white,
  secondary as brandSecondary,
  neutral,
  alert as cAlerts
} from './colors';

export const light = {
  text: {
    primary: neutral.dark,
    neutral: neutral.light,
    neutralMedium: neutral.medium,
    neutralDark: neutral.dark,
    neutralLighter: neutral.lighter
  },
  background: {
    secondary: brandSecondary.light,
    paper: white
  }
};

export const dark = {
  text: {
    primary: neutral.lighter,
    neutral: neutral.medium
  },
  background: {
    secondary: brandSecondary.dark,
    paper: white
  }
};

export const shades = { light, dark };
export const alert = cAlerts;

export default function createPalette(type) {
  return {
    ...shades[type],
    alert
  };
}

export { createPalette };
