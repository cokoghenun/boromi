/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <div
        css={{
          width: '100vw',
          height: '100vh',
          filter: 'blur(5px)',
          position: 'absolute',
        }}
      ></div>
      <nav></nav>
      <div
        css={{
          top: '50%',
          left: '50%',
          color: '#000',
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <header>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img
              css={{ width: '50px' }}
              src='/image/boromi_dark.png'
              alt='boromi'
            />
            <span
              css={{
                fontSize: '3em',
              }}
            >
              Boromi
            </span>
          </div>
        </header>
        <section css={{ textAlign: 'center' }}>
          <div
            css={{
              display: 'flex',
              margin: '30px 0',
              justifyContent: 'center',
            }}
          >
            <div css={{ maxWidth: '500px' }}>
              <p>
                Do you have an urgent need for cash to settle bills, take care
                of emergencies or grab an opportunity? Does payday seem so far
                and bills are piling up? Don’t worry! Boromi has got you covered.
              </p>
              <p>
                Apply for a loan now and get the funds in less than 5 minuts.
              </p>
            </div>
          </div>
          <Link to='/login'>
            <Button>get started</Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
