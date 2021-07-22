import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ALIGN = {
  DEFAULT: 'default',
  CENTER: 'center',
  RIGHT: 'right',
};

const ALIGN_STYLES = {
  [ALIGN.DEFAULT]: 'text-left',
  [ALIGN.CENTER]: 'text-center',
  [ALIGN.RIGHT]: 'text-right',
};

const COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  BLUE: 'blue',
  DANGER: 'danger',
  WHITE: 'white',
  CUSTOM: 'custom',
  DEFAULT: 'default',
};

const COLOR_STYLES = {
  [COLORS.PRIMARY]: 'text-indigo-500',
  [COLORS.BLUE]: 'text-blue-500',
  [COLORS.SECONDARY]: 'text-green-500',
  [COLORS.DANGER]: 'text-pink-500',
  [COLORS.WHITE]: 'text-white',
  [COLORS.DEFAULT]: 'text-black',
  [COLORS.CUSTOM]: '',
};

const WEIGHTS = {
  THIN: 'thin',
  EXTRALIGHT: 'extralight',
  LIGHT: 'light',
  DEFAULT: 'normal',
  MEDIUM: 'medium',
  SEMIBOLD: 'semibold',
  BOLD: 'bold',
  EXTRABOLD: 'extrabold',
  BLACK: 'black',
};

const WEIGHT_STYLES = {
  [WEIGHTS.THIN]: 'font-thin',
  [WEIGHTS.EXTRALIGHT]: 'font-extralight',
  [WEIGHTS.LIGHT]: 'font-light',
  [WEIGHTS.DEFAULT]: 'font-normal',
  [WEIGHTS.MEDIUM]: 'font-medium',
  [WEIGHTS.SEMIBOLD]: 'font-semibold',
  [WEIGHTS.BOLD]: 'font-bold',
  [WEIGHTS.EXTRABOLD]: 'font-extrabold',
  [WEIGHTS.BLACK]: 'font-black',
};

const getComponentByLevel = (level) => {
  switch (level) {
    case 1:
      return { Component: 'h1', defaultClass: 'text-3xl' };
    case 2:
      return { Component: 'h2', defaultClass: 'text-2xl' };
    case 3:
      return { Component: 'h3', defaultClass: 'text-xl' };
    case 4:
      return { Component: 'h4', defaultClass: 'text-lg' };
    case 5:
      return { Component: 'h5', defaultClass: 'text-base' };
    case 6:
      return { Component: 'h6', defaultClass: 'text-sm' };
    default:
      return { Component: 'h1', defaultClass: 'text-3xl' };
  }
};

const Title = (props) => {
  const {
    className = '',
    level = null,
    children = null,
    align = ALIGN.DEFAULT,
    color = COLORS.DEFAULT,
    weight = WEIGHTS.DEFAULT,
    italic = null,
  } = props;

  const alignStyle = ALIGN_STYLES?.[align] || '';
  const colorStyle = COLOR_STYLES?.[color] || '';
  const weightStyle = WEIGHT_STYLES?.[weight] || '';
  const italicStyle = italic ? 'italic' : '';
  const { Component, defaultClass } = getComponentByLevel(level);

  return (
    <Component
      children={children}
      className={classNames(
        className,
        alignStyle,
        colorStyle,
        weightStyle,
        italicStyle,
        defaultClass,
      )}
    />
  );
};

Title.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  align: PropTypes.oneOf([ALIGN.DEFAULT, ALIGN.CENTER, ALIGN.RIGHT]),
  color: PropTypes.oneOf([
    COLORS.PRIMARY,
    COLORS.BLUE,
    COLORS.SECONDARY,
    COLORS.DANGER,
    COLORS.WHITE,
    COLORS.DEFAULT,
    COLORS.CUSTOM,
  ]),
  weight: PropTypes.oneOf([
    WEIGHTS.THIN,
    WEIGHTS.EXTRALIGHT,
    WEIGHTS.LIGHT,
    WEIGHTS.DEFAULT,
    WEIGHTS.MEDIUM,
    WEIGHTS.SEMIBOLD,
    WEIGHTS.BOLD,
    WEIGHTS.EXTRABOLD,
    WEIGHTS.BLACK,
  ]),
};

export default Title;
