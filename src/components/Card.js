/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Button from './Button';

const Card = ({ ccss, title, content, cta }) => {
  return (
    <div
      css={{
        display: 'flex',
        margin: '0 0 3rem',
        alignItems: 'center',
        borderRadius: '.5rem',
        padding: '1.5rem 2rem',
        boxShadow: '0 0 20px 0 rgba(46,61,73,.15)',
        ...ccss,
      }}
    >
      <div css={{ width: '75%' }}>
        <div
          css={{
            fontWeight: '500',
            fontSize: '1.125rem',
            marginBottom: '.5rem',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </div>
        <div css={{ fontSize: '.875rem', color: '#58646d' }}>{content}</div>
      </div>
      <div css={{ width: '25%', textAlign: 'center', marginLeft: '10px' }}>
        <Button ccss={{ fontSize: '.95rem' }}>{cta}</Button>
      </div>
    </div>
  );
};

export default Card;
