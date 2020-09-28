/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const Button = ({ children, ccss, ...props }) => {
  return (
    <button
      {...props}
      css={{
        color: '#fff',
        border: 'none',
        fontWeight: 600,
        maxWidth: '100%',
        cursor: 'pointer',
        overflow: 'hidden',
        textAlign: 'center',
        borderRadius: '4px',
        whiteSpace: 'nowrap',
        padding: '1.2em 2em',
        background: '#9d5ffa',
        letterSpacing: '.165em',
        display: 'inline-block',
        textOverflow: 'ellipsis',
        textTransform: 'uppercase',
        fontFamily: 'Open Sans,sans-serif',
        WebkitFontSmoothing: 'antialiased',
        boxShadow: '12px 15px 20px rgba(0,0,0,.1)',
        transition:
          'box-shadow .2s ease-in-out,background-color .2s ease-in-out,border-color .2s ease-in-out',
        ':hover': {
          background: '#7748bd',
          boxShadow: '2px 4px 8px 0 rgba(0,0,0,.1)',
        },
        ...ccss,
        fontSize: '12px',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
