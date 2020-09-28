/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const Loading = () => {
  return (
    <div
      css={{
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        cursor: 'pointer',
        backgroundColor: '#fff9',
      }}
    >
      <div
        css={{
          top: '50%',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <svg
          width='100px'
          height='100px'
          viewBox='0 0 32 32'
          css={{
            margin: '0 15rem',
            animationName: 'rotate',
            animationDuration: '0.75s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',

            '@keyframes rotate': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '100%': {
                transform: 'rotate(360deg)',
              },
            },
          }}
        >
          <circle
            cx='16'
            cy='16'
            fill='none'
            r='14'
            strokeWidth='4'
            style={{ stroke: '#9d5ffa', opacity: '0.5' }}
          ></circle>
          <circle
            cx='16'
            cy='16'
            fill='none'
            r='14'
            strokeWidth='4'
            style={{
              strokeDasharray: '80px',
              strokeDashoffset: '60px',
              stroke: '#9d5ffa',
            }}
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
