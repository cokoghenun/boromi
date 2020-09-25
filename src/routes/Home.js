/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div
        css={{
          width: '100vw',
          height: '100vh',
          filter: 'blur(5px)',
          position: 'absolute',
          backgroundImage: 'url("/image/mad_bus.jpg")',
        }}
      ></div>
      <nav></nav>
      <div
        css={{
          top: '50%',
          left: '50%',
          color: '#FFF',
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
                textShadow: '1px 1px 2px #000',
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
              textShadow: '1px 1px 2px #000',
            }}
          >
            <p css={{ maxWidth: '500px' }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, dolores odio possimus quis alias ab, blanditiis aperiam
              magni explicabo recusandae nobis magnam beatae! In autem odio
              quaerat magni facilis.
            </p>
          </div>
          <Link
            css={{
              color: '#FFF',
              width: '170px',
              height: '46px',
              fontWeight: 500,
              fontSize: '1.2em',
              alignItems: 'center',
              borderRadius: '.25rem',
              background: '#9d5ffa',
              display: 'inline-flex',
              textDecoration: 'none',
              justifyContent: 'center',
              textTransform: 'uppercase',
              border: '2px #9d5ffa solid',
              ':hover': {
                color: '#9d5ffa',
                background: '#FFF',
              },
            }}
            to='/login'
          >
            <span>get started</span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
