import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Account from './views/Account';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/account" component={Account} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App; 