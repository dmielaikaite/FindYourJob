import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store, { history } from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PrivateUser from './components/Private/mainPage.js';

const target = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/private" component={PrivateUser} />
        </div>
      </Router>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
