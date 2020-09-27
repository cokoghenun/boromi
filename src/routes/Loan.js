/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import TopBar from '../components/TopBar';
import Card from '../components/Card';

const Loan = () => {
  return (
    <div>
      <TopBar ccss={{ textTransform: 'capitalize' }}>plans</TopBar>
      <div css={{ maxWidth: '700px', margin: '0 auto' }}>
        <Card
          ccss={{ backgroundColor: '#9d5ffa1c' }}
          title='basic'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.'
          cta='start plan'
        />
        <Card
          title='standard'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.'
          cta='start plan'
        />
        <Card
          title='premium'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.'
          cta='start plan'
        />
      </div>
    </div>
  );
};

export default Loan;
