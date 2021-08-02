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

const TYPE_STYLES = {
  [TYPES.PRIMARY]:
    'text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-100 focus:ring-2 hover:shadow-button transition-all disabled:bg-gray-200',
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

const SIZES = {
  ICON: 'icon',
  BIG: 'big',
  DEFAULT: 'default',
  SMALL: 'small',
  CUSTOM: 'custom',
  MIDDLE: 'middle',
};

const SIZE_STYLES = {
  [SIZES.ICON]: 'w-7 h-7 rounded-lg',
  [SIZES.SMALL]: 'px-3 py-1',
  [SIZES.MIDDLE]: 'text-12 rounded-lg py-2 px-6',
  [SIZES.BIG]: 'px-6 py-3',
  [SIZES.CUSTOM]: '',
};

const HTML_TYPES = { RESET: 'reset', SUBMIT: 'submit', BUTTON: 'button' };
const DEFAULT_STYLES = 'flex-shrink-0 active:opacity-75';
const DISABLED_STYLES = 'cursor-not-allowed';

const Button = forwardRef(
  ({ children, className, type, size, htmlType, onClick, disabled, ...buttonProps }, ref) => {
    const typeStyles = TYPE_STYLES?.[type] || null;
    const sizeStyles = SIZE_STYLES?.[size] || null;

    return (
      <button
        ref={ref}
        type={htmlType}
        onClick={onClick}
        children={children}
        className={classNames(
          typeStyles,
          sizeStyles,
          className,
          disabled ? DISABLED_STYLES : DEFAULT_STYLES,
        )}
        disabled={disabled}
        {...buttonProps}
      />
    );
  },
);

Button.defaultProps = {
  children: null,
  className: null,
  type: TYPES.PRIMARY,
  size: SIZES.MIDDLE,
  htmlType: HTML_TYPES.BUTTON,
  onClick: null,
  buttonProps: null,
  disabled: null,
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPES)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  htmlType: PropTypes.oneOf(Object.values(HTML_TYPES)),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
