/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import TopBar from '../components/TopBar';
import Button from '../components/Button';

const Loan = () => {
  return (
    <div>
      <TopBar ccss={{ textTransform: 'capitalize' }}>select a plan</TopBar>
      <div css={{ maxWidth: '600px', margin: '0 auto' }}>
        <div
          css={{
            boxShadow:
              '0 0 8px 0 rgba(17,22,26,.16),0 4px 8px 0 rgba(17,22,26,.08),0 8px 16px 0 rgba(17,22,26,.08)',
            display: 'flex',
            margin: '1.5rem',
            alignItems: 'center',
            borderRadius: '.5rem',
            padding: '1.5rem 2rem',
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
            <Button ccss={{ width: '120px', fontSize: '.9rem', height: '35px' }}>
              start plan
            </Button>
          </div>
        </div>{' '}
        <div
          css={{
            boxShadow:
              '0 0 8px 0 rgba(17,22,26,.16),0 4px 8px 0 rgba(17,22,26,.08),0 8px 16px 0 rgba(17,22,26,.08)',
            display: 'flex',
            margin: '1.5rem',
            alignItems: 'center',
            borderRadius: '.5rem',
            padding: '1.5rem 2rem',
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
            <Button ccss={{ width: '120px', fontSize: '.9rem', height: '35px' }}>
              start plan
            </Button>
          </div>
        </div>{' '}
        <div
          css={{
            boxShadow:
              '0 0 8px 0 rgba(17,22,26,.16),0 4px 8px 0 rgba(17,22,26,.08),0 8px 16px 0 rgba(17,22,26,.08)',
            display: 'flex',
            margin: '1.5rem',
            alignItems: 'center',
            borderRadius: '.5rem',
            padding: '1.5rem 2rem',
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
            <Button ccss={{ width: '120px', fontSize: '.9rem', height: '35px' }}>
              start plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
