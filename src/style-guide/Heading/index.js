import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ALIGNS = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
};

const ALIGN_STYLES = {
  [ALIGNS.LEFT]: 'text-left',
  [ALIGNS.CENTER]: 'text-center',
  [ALIGNS.RIGHT]: 'text-right',
};

const COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
  BLACK: 'black',
  WHITE: 'white',
  BLUE: 'blue',
  GREEN: 'green',
  CUSTOM: 'custom',
};

const COLOR_STYLES = {
  [COLORS.PRIMARY]: 'text-indigo-500',
  [COLORS.SECONDARY]: 'text-green-500',
  [COLORS.DANGER]: 'text-pink-500',
  [COLORS.BLACK]: 'text-black',
  [COLORS.WHITE]: 'text-white',
  [COLORS.BLUE]: 'text-blue-500',
  [COLORS.GREEN]: 'text-green-500',
  [COLORS.CUSTOM]: '',
};

const WEIGHTS = {
  THIN: 'thin',
  EXTRALIGHT: 'extralight',
  LIGHT: 'light',
  NORMAL: 'normal',
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
  [WEIGHTS.NORMAL]: 'font-normal',
  [WEIGHTS.MEDIUM]: 'font-medium',
  [WEIGHTS.SEMIBOLD]: 'font-semibold',
  [WEIGHTS.BOLD]: 'font-bold',
  [WEIGHTS.EXTRABOLD]: 'font-extrabold',
  [WEIGHTS.BLACK]: 'font-black',
};

const HEADINGS = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
};

const HEADING_STYLES = {
  H1: 'text-4xl',
  H2: 'text-3xl',
  H3: 'text-2xl',
  H4: 'text-xl',
  H5: 'text-lg',
  H6: 'text-base',
};

const getComponentByLevel = (level) => {
  switch (level) {
    case 1:
      return { Heading: HEADINGS.H1, headingClasses: HEADING_STYLES.H1 };
    case 2:
      return { Heading: HEADINGS.H2, headingClasses: HEADING_STYLES.H2 };
    case 3:
      return { Heading: HEADINGS.H3, headingClasses: HEADING_STYLES.H3 };
    case 4:
      return { Heading: HEADINGS.H4, headingClasses: HEADING_STYLES.H4 };
    case 5:
      return { Heading: HEADINGS.H5, headingClasses: HEADING_STYLES.H5 };
    case 6:
      return { Heading: HEADINGS.H6, headingClasses: HEADING_STYLES.H6 };
    default:
      return { Heading: HEADINGS.H1, headingClasses: HEADING_STYLES.H1 };
  }
};

const Component = ({ children, level, align, color, weight, italic, underline }) => {
  const alignStyles = ALIGN_STYLES?.[align] || null;
  const colorStyles = COLOR_STYLES?.[color] || null;
  const weightStyles = WEIGHT_STYLES?.[weight] || null;
  const italicStyle = italic ? 'italic' : null;
  const underlineStyle = underline ? 'underline' : null;
  const { Heading, headingClasses } = getComponentByLevel(level);

  return (
    <Heading
      children={children}
      className={classNames(
        headingClasses,
        colorStyles,
        weightStyles,
        alignStyles,
        italicStyle,
        underlineStyle,
      )}
    />
  );
};

Component.defaultProps = {
  children: null,
  level: null,
  color: null,
  align: null,
  weight: null,
  italic: null,
  underline: null,
};

Component.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  align: PropTypes.oneOf(Object.values(ALIGNS)),
  color: PropTypes.oneOf(Object.values(COLORS)),
  weight: PropTypes.oneOf(Object.values(WEIGHTS)),
  italic: PropTypes.bool,
  underline: PropTypes.bool,
};

const Heading = { Component, ALIGNS, COLORS, WEIGHTS };

export default Heading;
