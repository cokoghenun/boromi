/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Button from '../components/Button';
import TopBar from '../components/TopBar';

const Detail = () => {
  return (
    <div>
      <TopBar ccss={{ textTransform: 'capitalize' }}>details</TopBar>
      <div
        css={{
          width: '620px',
          padding: '2rem',
          margin: '0 auto',
          borderRadius: '6px',
          boxShadow: '0 0 20px 0 rgba(46,61,73,.15)',
        }}
      >
        <header
          css={{
            fontWeight: '300',
            fontSize: '1.7rem',
            textAlign: 'center',
            textTransform: 'capitalize',
          }}
        >
          Loan Dafm
        </header>
        <p
          css={{
            color: '#58646d',
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          delectus, dolores odio possimus quis alias ab, blanditiis aperiam
          magni explicabo.
        </p>
        <Button ccss={{ display: 'block', margin: '20px auto 0' }}>Back</Button>
      </div>
    </div>
  );
};

export default Detail;
