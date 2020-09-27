/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import TopBar from '../components/TopBar';
import Card from '../components/Card';

const Admin = () => {
  return (
    <div>
      <TopBar ccss={{ textTransform: 'capitalize' }}>Your Loans</TopBar>
      <div css={{ maxWidth: '700px', margin: '0 auto' }}>
        <p
          css={{
            color: '#7b8fa2',
            fontWeight: '600',
            fontSize: '.8125rem',
            letterSpacing: '1.5px',
            margin: '50px 0 1.5rem',
            textTransform: 'uppercase',
          }}
        >
          active
        </p>
        <Card
          title='basic'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.'
          cta='view'
        />
        <p
          css={{
            color: '#7b8fa2',
            fontWeight: '600',
            fontSize: '.8125rem',
            letterSpacing: '1.5px',
            margin: '50px 0 1.5rem',
            textTransform: 'uppercase',
          }}
        >
          other
        </p>
        <Card
          title='standard'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.'
          cta='view'
        />
        <Card
          title='premium'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.'
          cta='view'
        />
      </div>
    </div>
  );
};

export default Admin;
