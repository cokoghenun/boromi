/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import Button from '../components/Button';
import TopBar from '../components/TopBar';

const tabCss = {
  signup: {
    backgroundColor: '#f9f9fa',
    borderBottomRightRadius: '6px',
    borderRight: '1px solid #c8cdd2',
    borderBottom: '1px solid #c8cdd2',
  },
  signin: {
    backgroundColor: '#f9f9fa',
    borderBottomLeftRadius: '6px',
    borderLeft: '1px solid #c8cdd2',
    borderBottom: '1px solid #c8cdd2',
  },
};

const Login = () => {
  const [activeTab, setActiveTab] = useState('signup');
  return (
    <div>
      <TopBar>
        get started
      </TopBar>
      <div
        css={{
          width: '620px',
          margin: '0 auto',
          borderRadius: '6px',
          boxShadow: '0 0 20px 0 rgba(46,61,73,.15)',
        }}
        >
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            div: {
              width: '50%',
              padding: '1rem 0',
              cursor: 'pointer',
              textAlign: 'center',
              textTransform: 'uppercase',
            },
          }}
        >
          <div
            css={activeTab === 'signin' ? tabCss['signup'] : {}}
            onClick={() => {
              setActiveTab('signup');
            }}
          >
            sign up
          </div>
          <div
            css={activeTab === 'signup' ? tabCss['signin'] : {}}
            onClick={() => {
              setActiveTab('signin');
            }}
          >
            sign in
          </div>
        </div>
        <header
          css={{
            fontSize: '2rem',
            fontWeight: '300',
            margin: '30px 0',
            textAlign: 'center',
            textTransform: 'capitalize',
          }}
        >
          {activeTab === 'signin'
            ? 'Sign in to your account'
            : 'crate your account'}
        </header>
        <form
          css={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            input: {
              width: '80%',
              height: '2rem',
              margin: '20px 0',
              display: 'block',
              borderRadius: '.25rem',
              padding: '.625rem 1rem',
              border: '1px solid #96a0aa',
              ':focus': {
                boxShadow: '0 0 0 4px #9d5ffa ',
              },
            },
          }}
        >
          {activeTab === 'signup' ? (
            <React.Fragment>
              <input
                type='text'
                name='firstName'
                required
                placeholder='First Name'
              />
              <input
                type='text'
                name='LastName'
                required
                placeholder='Last Name'
              />
            </React.Fragment>
          ) : null}
          <input type='email' name='email' required placeholder='Email' />
          <input
            type='password'
            name='password'
            required
            placeholder='Password'
          />
          <Button type='submit' ccss={{ margin: '20px 0'}}>{activeTab === 'signup' ? 'sign up' : 'sign in'}</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
