/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Loan = ({ location: { pathname } }) => {
  const [toRequestPage, setToRequestPage] = useState(false);

  const handleCTA = ({title}) => {
    localStorage.setItem('loan', JSON.stringify({ plan: title }));
    setToRequestPage(true);
  };

  if (toRequestPage) return <Redirect to='/request' />;
  return (
    <div>
      <TopBar ccss={{ textTransform: 'capitalize' }} pathname={pathname}>
        plans
      </TopBar>
      <div css={{ maxWidth: '700px', margin: '0 auto' }}>
        <Card
          ccss={{ backgroundColor: '#9d5ffa1c' }}
          title='basic'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.'
          cta='start plan'
          ctaCB={handleCTA}
        />
        <Card
          title='standard'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.'
          cta='start plan'
          ctaCB={handleCTA}
        />
        <Card
          title='premium'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo.'
          cta='start plan'
          ctaCB={handleCTA}
        />
      </div>
    </div>
  );
};

export default Loan;
