/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from '../utils/mq';
import Button from './Button';

const Card = ({ ccss, title, id = '', content, cta, ctaCB = () => {} }) => {
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
      <div css={{ width: '70%', [mq[0]]: { width: '75%' } }}>
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
        <div
          css={{
            color: '#58646d',
            fontSize: '.875rem',
            textTransform: id ? 'capitalize' : 'initial',
          }}
        >
          {content}
        </div>
      </div>
      <div css={{ width: '30%', [mq[0]]: { width: '25%' }, textAlign: 'center', marginLeft: '10px' }}>
        <Button
          ccss={{ fontSize: '.95rem' }}
          onClick={() => {
            ctaCB({ title, id });
          }}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
};

export default Card;
