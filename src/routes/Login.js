/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import TopBar from '../components/TopBar';

const tabCss = {
  signup: {
    backgroundColor: '#f9f9fa',
    borderRight: '1px solid #c8cdd2',
    borderBottom: '1px solid #c8cdd2',
  },
  signin: {
    backgroundColor: '#f9f9fa',
    borderLeft: '1px solid #c8cdd2',
    borderBottom: '1px solid #c8cdd2',
  },
};

const Login = () => {
  const [activeTab, setActiveTab] = useState('signup');
  return (
    <div>
      <TopBar>
        <img
          css={{ width: '40px' }}
          src='/image/boromi_dark.png'
          alt='boromi'
        />
        <span css={{ fontSize: '2rem' }}>boromi</span>
      </TopBar>
      <div
        css={{
          margin: '50px auto 30px',
          width: '620px',
          border: '1px solid #c8cdd2',
          boxShadow: '2px 2px 3px 0 rgba(117,124,129,.12)',
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
          <input
            css={{
              color: '#FFF',
              fontWeight: 500,
              fontSize: '1.2rem',
              background: '#9d5ffa',
              textDecoration: 'none',
              height: '50px !important',
              width: '170px !important',
              textTransform: 'uppercase',
              border: '2px #9d5ffa solid !important',
              ':hover': {
                color: '#9d5ffa',
                background: '#FFF',
              },
            }}
            type='submit'
            value={activeTab === 'signup' ? 'sign up' : 'sign in'}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
