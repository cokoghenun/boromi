/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Button from '../components/Button';
import { useState } from 'react';
import TopBar from '../components/TopBar';
import fetcher from '../utils/fetcher';

const Repayment = ({ history: { goBack, push } }) => {
  const [paymentperiod, setPaymentPeriod] = useState('weekly');
  const [paymentamount, setPaymentAmount] = useState('');

  const handleContinue = async () => {
    const loan = JSON.parse(localStorage.getItem('loan'));

    const payLoad = { ...loan, paymentperiod, paymentamount };
    localStorage.setItem('loan', JSON.stringify(payLoad));

    const [error, { data }] = await fetcher(
      'post',
      `${process.env.REACT_APP_API}/api/loan`,
      payLoad
    );
    
    if (error) console.log({ error });
    
    if (data) {
      localStorage.removeItem('loan');
      push('/admin');
    }
  };

  return (
    <div>
      <TopBar>Repayment</TopBar>
      <div
        css={{
          margin: '0 auto',
          maxWidth: '700px',
          borderRadius: '6px',
          boxShadow: '0 0 20px 0 rgba(46,61,73,.15)',
        }}
      >
        <div
          css={{
            padding: '70px',
            color: '#2e3d49',
            fontWeight: '300',
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px',
            background: 'linear-gradient(224.86deg,#d6bff9,#f7f7f7)',
          }}
        >
          <div
            css={{
              fontSize: '1.7rem',
              marginTop: '15px',
              marginBottom: '1em',
              textTransform: 'capitalize',
            }}
          >
            loan repayment information
          </div>
          <div>Please provide answers to the following questions</div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div
            css={{
              color: '#525c65',
              padding: '15px 70px 45px',
              label: {
                display: 'block',
                margin: '.8rem 0',
              },
              'input[type="radio"]': {
                width: '12px',
                height: '12px',
                appearance: 'none',
                borderRadius: '50%',
                border: '1px solid #999',
                transition: '0.2 all linear',
                ':checked': {
                  border: '3px solid #9d5ffa',
                  boxShadow: '0 0 0 1px #9d5ffa,0 2px 1px 0 rgba(46,60,73,.05)',
                },
              },
            }}
          >
            <div>
              <p>Select a repayment period:</p>

              <label>
                <input
                  type='radio'
                  name='paymentperiod'
                  value='weekly'
                  checked={paymentperiod === 'weekly'}
                  onChange={({ target }) => {
                    setPaymentPeriod(target.value);
                  }}
                />
                Weekly
              </label>

              <label>
                <input
                  type='radio'
                  name='paymentperiod'
                  value='monthly'
                  checked={paymentperiod === 'monthly'}
                  onChange={({ target }) => {
                    setPaymentPeriod(target.value);
                  }}
                />
                Monthly
              </label>

              <label>
                <input
                  type='radio'
                  name='paymentperiod'
                  value='yearly'
                  checked={paymentperiod === 'yearly'}
                  onChange={({ target }) => {
                    setPaymentPeriod(target.value);
                  }}
                />
                Yearly
              </label>
            </div>

            <div css={{ marginTop: '2.5rem' }}>
              <p>Repayment amount for the specified period:</p>
              <p
                css={{
                  color: '#7d97ad',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                }}
              >
                Please note, this is not optional.
              </p>
              <input
                css={{
                  width: '100%',
                  height: '44px',
                  color: '#2e3d49',
                  fontSize: '14px',
                  borderRadius: '4px',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                  border: '1px solid #dbe2e8',
                  boxShadow: '5px 5px 10px 0 rgba(0,0,0,.05)',
                  ':focus': {
                    boxShadow: '0 0 0 4px #9d5ffa ',
                  },
                }}
                value={paymentamount}
                required
                onChange={({ target }) => {
                  setPaymentAmount(target.value);
                }}
                type='number'
              />
            </div>
          </div>

          <div
            css={{
              display: 'flex',
              padding: '45px 70px',
              borderTop: '1px solid #dbe2e8',
              justifyContent: 'space-between',
            }}
          >
            <Button
              ccss={{
                color: '#8796a4',
                backgroundColor: '#dbe2e8',
                ':hover': { backgroundColor: '#c8d0d7' },
              }}
              onClick={() => goBack()}
            >
              back
            </Button>
            <Button type='submit' onClick={handleContinue}>
              continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Repayment;
