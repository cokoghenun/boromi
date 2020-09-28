/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../components/Button';
import Loading from '../components/Loading';
import TopBar from '../components/TopBar';
import fetcher from '../utils/fetcher';
import mq from '../utils/mq';

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
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [showLoding, setShowLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    setShowLoading(true);
    e.preventDefault();
    const payLoad = { firstname, lastname, email, password };
    const [error, { token, name: sName, email: sEmail }] = await fetcher(
      'post',
      `${process.env.REACT_APP_API}/${
        activeTab === 'signup' ? 'signup' : 'signin'
      }`,
      payLoad
    );
    if (error) console.log({ error });

    if (token) {
      localStorage.setItem('name', sName);
      localStorage.setItem('email', sEmail);
      localStorage.setItem('token', `Bearer ${token}`);
      setToken(true);
    }
    setShowLoading(false);
  };
  if (token) return <Redirect to='/admin' />;

  return (
    <div>
      {showLoding ? <Loading /> : null}
      <TopBar>get started</TopBar>
      <div
        css={{
          margin: '0 auto',
          borderRadius: '6px',
          maxWidth: 'calc(100% - 2rem)',
          [mq[0]]: { maxWidth: '650px' },
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
            margin: '30px 0',
            fontWeight: '300',
            fontSize: '1.7rem',
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
              height: '44px',
              fontSize: '14px',
              margin: '20px 0',
              color: '#2e3d49',
              borderRadius: '4px',
              paddingLeft: '15px',
              paddingRight: '15px',
              border: '1px solid #dbe2e8',
              boxShadow: '5px 5px 10px 0 rgba(0,0,0,.05)',
              ':focus': {
                boxShadow: '0 0 0 4px #9d5ffa ',
              },
            },
          }}
          onSubmit={handleFormSubmit}
        >
          {activeTab === 'signup' ? (
            <React.Fragment>
              <input
                type='text'
                name='firstName'
                value={firstname}
                onChange={({ target }) => {
                  setFirstname(target.value);
                }}
                required
                placeholder='First Name'
              />
              <input
                type='text'
                name='LastName'
                value={lastname}
                onChange={({ target }) => {
                  setLastname(target.value);
                }}
                required
                placeholder='Last Name'
              />
            </React.Fragment>
          ) : null}
          <input
            type='email'
            name='email'
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            required
            placeholder='Email'
          />
          <input
            type='password'
            name='password'
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
            required
            placeholder='Password'
          />
          <Button type='submit' ccss={{ margin: '20px 0' }}>
            {activeTab === 'signup' ? 'sign up' : 'sign in'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
