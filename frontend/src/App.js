import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Account from './views/Account';
import Login from './views/Login';
import Register from './views/Register';
import Error from './views/Error'
import DailyDiagnosis from './views/DailyDiagnosis';
import ForgotPassword from './views/ForgotPassword';
import ChangePassword from './views/ChangePassword';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/account" component={Account} />
          <Route path="/login/forgot" component={ForgotPassword} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/diagnosis" component={DailyDiagnosis} />
          <Route path="/change" component={ChangePassword} />
          <Route path="/error" component={Error} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;