/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Loan from './routes/Loan';
import Request from './routes/Request';
import Repayment from './routes/Repayment';
import Admin from './routes/Admin';

function App() {
  return (
    <div
      className='App'
      css={{ fontFamily: "'Noto Sans JP', sans-serif !Important" }}
    >
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/loan' component={Loan} />
          <Route exact path='/request' component={Request} />
          <Route exact path='/repayment' component={Repayment} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
      </Router>
      <div css={{ marginTop: '50px' }}></div>
    </div>
  );
}

export default App;
