/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Loan from './routes/Loan';

function App() {
  return (
    <div className='App' css={{ fontFamily: '\'Noto Sans JP\', sans-serif !Important' }}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/loan' component={Loan} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
