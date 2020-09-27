/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Button2 from '../components/Button2';
import TopBar from '../components/TopBar';

const Request = () => {
  return (
    <div>
      <TopBar>boromi</TopBar>
      <div
        css={{
          width: '860px',
          borderRadius: '6px',
          margin: '180px auto',
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
              fontsize: '24px',
              marginTop: '15px',
              marginBottom: '1em',
              textTransform: 'capitalize',
            }}
          >
            loan request information
          </div>
          <div
            css={{
              fontSize: '.8rem',
            }}
          >
            Please provide answers to the following questions
          </div>
        </div>
        <div
          css={{
            color: '#525c65',
            fontSize: '0.85rem',
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
            <p>Select a maintenance drone:</p>

            <label>
              <input type='radio' name='drone' value='huey' checked />
              Huey
            </label>

            <label>
              <input type='radio' name='drone' value='dewey' />
              Dewey
            </label>

            <label>
              <input type='radio' name='drone' value='louie' />
              Louie
            </label>
          </div>

          <div>
            <p>If you answered "Prefer to self-describe":</p>
            <p
              css={{
                color: '#7d97ad',
                fontSize: '0.8rem',
                fontStyle: 'italic',
              }}
            >
              Please note, this is optional.{' '}
            </p>
            <input
              css={{
                boxShadow: '5px 5px 10px 0 rgba(0,0,0,.05)',
                borderRadius: '4px',
                border: '1px solid #dbe2e8',
                width: '100%',
                paddingLeft: '15px',
                paddingRight: '15px',
                fontSize: '14px',
                color: '#2e3d49',
                height: '44px',
              }}
              type='text'
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
          <Button2
            ccss={{
              backgroundColor: '#dbe2e8',
              ':hover': { backgroundColor: '#dbe2e8' },
            }}
          >
            back
          </Button2>
          <Button2>continue</Button2>
        </div>
      </div>
    </div>
  );
};

export default Request;
