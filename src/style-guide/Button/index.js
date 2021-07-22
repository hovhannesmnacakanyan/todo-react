import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  BLUE: 'blue',
  DANGER: 'danger',
  GHOST: 'ghost',
  DARK: 'dark',
  NOT_BORDER: 'not-border',
  UNDERLINE_BUTTON: 'underline-button',
  ICON: 'icon',
  CUSTOM: 'custom',
};

const SIZES = {
  ICON: 'icon',
  BIG: 'big',
  DEFAULT: 'default',
  SMALL: 'small',
  CUSTOM: 'custom',
  MIDDLE: 'middle',
};

const HTML_TYPES = { RESET: 'reset', SUBMIT: 'submit', BUTTON: 'button' };

const TYPE_STYLES = {
  [TYPES.PRIMARY]:
    'text-white bg-indigo-500  hover:bg-indigo-700 focus:ring-indigo-100 focus:ring-2 hover:shadow-button transition-all disabled:bg-black-25',
  [TYPES.BLUE]:
    'text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-100 focus:ring-2 hover:shadow-button transition-all',
  [TYPES.SECONDARY]:
    'text-white bg-green-500 hover:bg-green-700 focus:ring-green-100 focus:ring-2 hover:shadow-button transition-all',
  [TYPES.DANGER]:
    'text-white bg-pink-500 hover:bg-pink-700 focus:ring-pink-100 focus:ring-2 hover:shadow-button transition-all',
  [TYPES.DARK]:
    'text-white bg-dark transition-all border-0.5 border-white hover:bg-white-25 focus:border-white-25 focus:ring-white-25 focus:ring-2 focus:bg-dark',
  [TYPES.NOT_BORDER]:
    'text-white border-1 border-transparent transition-all hover:bg-white-25 focus:border-white-25 focus:ring-white-25 focus:ring-2 focus:bg-dark',
  [TYPES.GHOST]:
    'text-indigo-500 bg-white border-indigo-100 border-0.5 hover:bg-indigo-50 focus:ring-indigo-100 focus:ring-1 hover:shadow-button',
  [TYPES.UNDERLINE_BUTTON]: 'underline transition-all',
  [TYPES.ICON]:
    'text-indigo-500 bg-white border-indigo-100 border-0.5 hover:bg-indigo-50 hover:shadow-icon focus:ring-indigo-100 focus:ring-2 flex justify-center items-center disabled:text-black-25 disabled:border-black-25 disabled:shadow-none disabled:bg-transparent',
  [TYPES.CUSTOM]: '',
};

const SIZE_STYLES = {
  [SIZES.ICON]: 'w-7 h-7 m-2px rounded-lg',
  [SIZES.SMALL]: 'px-3 py-1',
  [SIZES.DEFAULT]: 'text-sm rounded-lg py-2 w-25',
  [SIZES.MIDDLE]: 'text-sm rounded-lg py-2 px-6',
  [SIZES.BIG]: 'px-6 py-3',
  [SIZES.CUSTOM]: '',
};

const DEFAULT_STYLES = 'flex-shrink-0 active:opacity-75';

const Button = forwardRef((props, ref) => {
  const {
    children,
    className,
    type = TYPES.PRIMARY,
    size = SIZES.MIDDLE,
    htmlType = HTML_TYPES.BUTTON,
    onClick,
    ...buttonProps
  } = props;
  const typeStyles = TYPE_STYLES?.[type] || '';
  const sizeStyles = SIZE_STYLES?.[size] || '';
  return (
    <button
      ref={ref}
      type={htmlType}
      onClick={onClick}
      children={children}
      className={classNames(typeStyles, sizeStyles, className, DEFAULT_STYLES)}
      {...buttonProps}
    />
  );
});

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([
    TYPES.PRIMARY,
    TYPES.BLUE,
    TYPES.SECONDARY,
    TYPES.DANGER,
    TYPES.GHOST,
    TYPES.UNDERLINE_BUTTON,
    TYPES.ICON,
    TYPES.CUSTOM,
    TYPES.NOT_BORDER,
    TYPES.DARK,
  ]),

  size: PropTypes.oneOf([
    SIZES.ICON,
    SIZES.SMALL,
    SIZES.DEFAULT,
    SIZES.BIG,
    SIZES.CUSTOM,
    SIZES.MIDDLE,
  ]),
  htmlType: PropTypes.oneOf([HTML_TYPES.SUBMIT, HTML_TYPES.RESET, HTML_TYPES.BUTTON]),
  onClick: PropTypes.func,
};

export default Button;
