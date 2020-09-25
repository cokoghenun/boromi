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
        boxShadow: '0 5px 15px 0 rgba(46,61,73,.12)',
        ...ccss,
      }}
    >
      {children}
    </div>
  );
};

export default TopBar;
