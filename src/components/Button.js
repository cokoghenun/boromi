/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const Button = ({ children, ccss }) => {
  return (
    <div
      css={{
        color: '#FFF',
        width: '170px',
        height: '46px',
        fontWeight: 500,
        fontSize: '1.2em',
        cursor: 'pointer',
        alignItems: 'center',
        background: '#9d5ffa',
        display: 'inline-flex',
        borderRadius: '.25rem',
        textDecoration: 'none',
        justifyContent: 'center',
        textTransform: 'uppercase',
        border: '2px #9d5ffa solid',
        ':hover': {
          color: '#9d5ffa',
          background: '#FFF',
        },
        ...ccss,
      }}
    >
      <span>{children}</span>
    </div>
  );
};

export default Button;
