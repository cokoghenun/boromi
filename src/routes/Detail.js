/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import TopBar from '../components/TopBar';
import fetcher from '../utils/fetcher';

const Detail = ({ location: { pathname }, history: { goBack } }) => {
  const [loan, setLoan] = useState({ amount: 0, paymentamount: 0 });
  useEffect(() => {
    const id = pathname.replace('/detail/', '');
    (async () => {
      const [error, { data }] = await fetcher(
        'get',
        `${process.env.REACT_APP_API}/api/loan/${id}`
      );
      if (error) console.log({ error });
      if (data) setLoan(data);
    })();
  }, [pathname]);
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
          Loan Information
        </header>
        <div
          css={{
            color: '#58646d',
          }}
        >
          <p>
            Amount:{' '}
            <strong>
              N {String(loan.amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </strong>
          </p>
          <p>
            Plan Type: <strong>{loan.plan}</strong>
          </p>
          <p>
            Loan ID: <strong>{loan._id}</strong>
          </p>{' '}
          <p>
            Loan Date: <strong>{loan.createdAt}</strong>
          </p>
          <p>
            Category: <strong>{loan.category}</strong>
          </p>
          <p>
            Payment Period: <strong>{loan.paymentperiod}</strong>
          </p>
          <p>
            Payment Amount:{' '}
            <strong>
              N{' '}
              {String(loan.paymentamount)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </strong>
          </p>
        </div>
        <Button
          ccss={{ display: 'block', margin: '20px auto 0' }}
          onClick={() => goBack()}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Detail;
