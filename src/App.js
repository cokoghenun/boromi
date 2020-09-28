/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Loan from './routes/Loan';
import Request from './routes/Request';
import Repayment from './routes/Repayment';
import Admin from './routes/Admin';
import Detail from './routes/Detail';
import Protect from './components/Protect';

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
          <Route exact path='/loan'>
            <Protect component={Loan} />
          </Route>
          <Route exact path='/request'>
            <Protect component={Request} />
          </Route>
          <Route exact path='/repayment'>
            <Protect component={Repayment} />
          </Route>
          <Route exact path='/admin'>
            <Protect component={Admin} />
          </Route>
          <Route exact path='/detail/:id'>
            <Protect component={Detail} />
          </Route>
        </Switch>
      </Router>
      <div css={{ marginTop: '50px' }}></div>
    </div>
  );
}

export default App;
