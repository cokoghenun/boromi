/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const TopBar = ({ children, ccss }) => {
  return (
    <div
      css={{
        display: 'flex',
        padding: '1rem 0',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize',
        boxShadow: '0 5px 15px 0 rgba(46,61,73,.12)',
        marginBottom: '50px',
        position: 'relative',
        ...ccss,
      }}
    >
      <div css={{ position: 'absolute' , left: '10px', display: 'flex', alignItems: 'center'}}>
        <img
          css={{ width: '25px' }}
          src='/image/boromi_dark.png'
          alt='boromi'
        />
        <span css={{ fontSize: '1.3rem', marginLeft: '10px' }}>boromi</span>
      </div>

      <div css={{fontSize: '1.5rem'}}>{children}</div>
    </div>
  );
};

export default TopBar;
