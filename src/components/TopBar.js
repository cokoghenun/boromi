/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const TopBar = ({ children, ccss, pathname = '', history = {} }) => {
  const [showSetting, setShowSetting] = useState(false);

  return (
    <div
      css={{
        display: 'flex',
        padding: '1rem 2rem',
        alignItems: 'center',
        marginBottom: '50px',
        textTransform: 'capitalize',
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
        <span css={{ fontSize: '1.3rem', marginLeft: '10px' }}>boromi</span>
      </div>

      <div css={{ fontSize: '1.5rem' }}>{children}</div>

      <div css={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
        {pathname.includes('admin') ? (
          <Link to='/loan'>
            <Button>new loan</Button>
          </Link>
        ) : null}
        <div css={{ marginLeft: '2rem', position: 'relative' }}>
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
              position: 'absolute',
              backgroundColor: '#fff',
              display: showSetting ? 'block' : 'none',
              boxShadow: '0 5px 15px 0 rgba(46,61,73,.12)',
            }}
          >
            <div css={{ marginBottom: '1rem', textTransform: 'capitalize' }}>
              {localStorage.getItem('name')}
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
      </div>
    </div>
  );
};

export default TopBar;
