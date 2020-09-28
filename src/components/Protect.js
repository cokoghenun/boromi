/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Redirect, Route } from 'react-router-dom';

const Protect = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Redirect to='/login' />;
  return <Route render={(props) => <Component {...props} {...rest} />} />;
};

export default Protect;
