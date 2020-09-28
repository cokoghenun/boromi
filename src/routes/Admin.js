/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { Fragment, useEffect, useState } from 'react';
import fetcher from '../utils/fetcher';

const Admin = ({ location: { pathname }, history }) => {
  const [loan, setLoan] = useState([]);
  const handleViewClick = ({ id }) => {
    // console.log(id);
    history.push(`/detail/${id}`);
  };
  useEffect(() => {
    (async () => {
      const [error, { data }] = await fetcher(
        'get',
        `${process.env.REACT_APP_API}/api/loan`
      );
      if (error) console.log({ error });
      if (data) {
        setLoan(data);
      }
    })();
  }, []);
  return (
    <div>
      <TopBar
        ccss={{ textTransform: 'capitalize' }}
        pathname={pathname}
        history={history}
      >
        Your Loans
      </TopBar>
      <div css={{ maxWidth: '700px', margin: '0 auto' }}>
        {loan[0] ? (
          <Fragment>
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
              cta='view'
              id={loan[0]._id}
              title={loan[0].plan}
              content={loan[0].paymentperiod + ' payment period'}
              ctaCB={handleViewClick}
            />
          </Fragment>
        ) : (
          <div
            css={{ textAlign: 'center', fontSize: '.875rem', color: '#58646d' }}
          >
            You have not made any loans. Click on <strong>New Loan</strong>{' '}
            button to get started
          </div>
        )}
        {loan.length > 1 ? (
          <Fragment>
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
            {loan.slice(1).map((l, k) => (
              <Card
                key={k}
                cta='view'
                id={l._id}
                title={l.plan}
                ctaCB={handleViewClick}
                content={l.paymentperiod + ' payment period'}
              />
            ))}
          </Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
