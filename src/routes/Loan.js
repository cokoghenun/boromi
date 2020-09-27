/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import TopBar from '../components/TopBar';
import Button from '../components/Button';

const Loan = () => {
  return (
    <div>
      <TopBar ccss={{ textTransform: 'capitalize' }}>plans</TopBar>
      <div css={{ maxWidth: '700px', margin: '0 auto' }}>
        <div
          css={{
            display: 'flex',
            margin: '0 0 3rem',
            alignItems: 'center',
            borderRadius: '.5rem',
            padding: '1.5rem 2rem',
            boxShadow: '0 0 20px 0 rgba(46,61,73,.15)',
            backgroundColor: '#9d5ffa1c',
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
              basic
            </div>
            <div css={{ fontSize: '.875rem', color: '#58646d' }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.
            </div>
          </div>
          <div css={{ width: '25%', textAlign: 'center', marginLeft: '10px' }}>
            <Button ccss={{ fontSize: '.95rem' }}>start plan</Button>
          </div>
        </div>{' '}
        <div
          css={{
            display: 'flex',
            margin: '0 0 3rem',
            alignItems: 'center',
            borderRadius: '.5rem',
            padding: '1.5rem 2rem',
            boxShadow: '0 0 20px 0 rgba(46,61,73,.15)',
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
              standard
            </div>
            <div css={{ fontSize: '.875rem', color: '#58646d' }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.
            </div>
          </div>
          <div css={{ width: '25%', textAlign: 'center', marginLeft: '10px' }}>
            <Button ccss={{ fontSize: '.95rem' }}>start plan</Button>
          </div>
        </div>{' '}
        <div
          css={{
            display: 'flex',
            margin: '0 0 3rem',
            alignItems: 'center',
            borderRadius: '.5rem',
            padding: '1.5rem 2rem',
            boxShadow: '0 0 20px 0 rgba(46,61,73,.15)',
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
              premium
            </div>
            <div css={{ fontSize: '.875rem', color: '#58646d' }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.
            </div>
          </div>
          <div css={{ width: '25%', textAlign: 'center', marginLeft: '10px' }}>
            <Button ccss={{ fontSize: '.95rem' }}>start plan</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
