import React from 'react';
import classNames from 'classnames';
import { Space } from 'style-guide';

const TEXT_ALIGN = {
  DEFAULT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
};

const Card = (props) => {
  const {
    cardClasses = null,
    children = null,
    titleAlign = TEXT_ALIGN.DEFAULT,
    subTitleAlign = TEXT_ALIGN.DEFAULT,
    components: { header = null, body = null, footer = null },
    data: {
      title = null,
      subtitle = null,
      headerClasses = 'p-4',
      bodyClasses = 'p-4',
      footerClasses = 'p-4',
    },
  } = props;

  return (
    <div className={cardClasses} children={children}>
      {/* header */}
      {header ? (
        <Space className={headerClasses}>
          {title ? (
            <>
              <h2 className={classNames('text-3xl font-bold', titleAlign)}>{title}</h2>
              <Space className='pb-4' />
            </>
          ) : null}
          {header}
        </Space>
      ) : null}
      {/* body */}
      {body ? (
        <Space className={bodyClasses}>
          {subtitle ? (
            <>
              <h5
                className={classNames(
                  'text-sm text-gray-500 font-bold tracking-widest uppercase',
                  subTitleAlign,
                )}>
                {subtitle}
              </h5>
              <Space className='pb-2' />
            </>
          ) : null}
          {body}
        </Space>
      ) : null}
      {/* footer */}
      {footer ? (
        <Space className={footerClasses}>
          <div className='flex align-middle justify-center'>{footer}</div>
        </Space>
      ) : null}
    </div>
  );
};

export default Card;
