import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Account from './views/Account';
import Login from './views/Login';
import Register from './views/Register';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/account" component={Account} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;