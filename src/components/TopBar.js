/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import mq from '../utils/mq';
import Button from './Button';

const TopBar = ({ children, ccss, pathname = '', history = {} }) => {
  const [showSetting, setShowSetting] = useState(false);

  return (
    <div
      css={{
        display: 'flex',
        padding: '1rem',
        alignItems: 'center',
        marginBottom: '50px',
        textTransform: 'capitalize',
        width: 'calc(100% - 2rem)',
        [mq[0]]: {
          padding: '1rem 2rem',
          width: 'calc(100% - 4rem)',
        },
        justifyContent: 'space-between',
        boxShadow: '0 5px 15px 0 rgba(46,61,73,.12)',
        ...ccss,
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          css={{ width: '25px' }}
          src='/image/boromi_dark.png'
          alt='boromi'
        />
        <span
          css={{
            fontSize: '1.3rem',
            marginLeft: '10px',
            display: 'none',
            [mq[0]]: {
              display: 'block',
            },
          }}
        >
          boromi
        </span>
      </div>

      <div css={{ fontSize: '1.5rem' }}>{children}</div>

      <div css={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
        {pathname.includes('admin') ? (
          <Link to='/loan'>
            <Button>new loan</Button>
          </Link>
        ) : null}
        {localStorage.getItem('token') ? (
          <div
            css={{
              [mq[0]]: { marginLeft: '2rem' },
              marginLeft: '1rem',
              position: 'relative',
            }}
          >
            <img
              css={{ width: '24px', cursor: 'pointer' }}
              src='/image/user.svg'
              alt='account'
              onClick={() => {
                setShowSetting(!showSetting);
              }}
            />
            <div
              css={{
                right: '0',
                width: '200px',
                padding: '2rem',
                textAlign: 'center',
                borderRadius: '6px',
                position: 'absolute',
                backgroundColor: '#fff',
                display: showSetting ? 'block' : 'none',
                boxShadow: '0 5px 15px 0 rgba(46,61,73,.12)',
              }}
            >
              <div css={{ marginBottom: '.5rem' }}>
                {localStorage.getItem('name')}
              </div>
              <div
                css={{
                  color: '#58646d',
                  fontSize: '0.8rem',
                  marginBottom: '1rem',
                  textTransform: 'initial',
                }}
              >
                {localStorage.getItem('email')}
              </div>
              <Link to='/'>
                <Button
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  sign out
                </Button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
