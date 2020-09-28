/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import mq from '../utils/mq';

const Loan = ({ location: { pathname } }) => {
  const [toRequestPage, setToRequestPage] = useState(false);

  const handleCTA = ({ title }) => {
    localStorage.setItem('loan', JSON.stringify({ plan: title }));
    setToRequestPage(true);
  };

  if (toRequestPage) return <Redirect to='/request' />;
  return (
    <div>
      <TopBar ccss={{ textTransform: 'capitalize' }} pathname={pathname}>
        plans
      </TopBar>
      <div
        css={{
          margin: '0 auto',
          maxWidth: 'calc(100% - 2rem)',
          [mq[0]]: { maxWidth: '650px' },
        }}
      >
        <Card
          ccss={{ backgroundColor: '#9d5ffa1c' }}
          title='basic'
          content='This is the best loan plan for individuals with flexible interest rates and replayment plan. It is quick fast and convinient and helps you reach your next financial goals, with less fees, unprecedented service, and awesome loan help.'
          cta='start plan'
          ctaCB={handleCTA}
        />
        <Card
          title='standard'
          content='This is a friendly plan for SMEs and entrepreneurs, looking for quick cash to grow their business. It enables you withdraw from your account beyond your actual balance and with an agreed repayment plan.'
          cta='start plan'
          ctaCB={handleCTA}
        />
        <Card
          title='premium'
          content='This plan is designed to assist clients with business emergencies. It enables you withdraw from your account beyond your actual balance and with an agreed repayment plan. Overdraft enables clients have access to funds for emergencies at a very competitive interest.'
          cta='start plan'
          ctaCB={handleCTA}
        />
      </div>
    </div>
  );
};

export default Loan;
