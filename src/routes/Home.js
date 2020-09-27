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
                fontSize: '2em',
              }}
            >
              boromi
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
            <p css={{ maxWidth: '500px' }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo recusandae nobis magnam beatae! In autem odio
              quaerat magni facilis.
            </p>
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
