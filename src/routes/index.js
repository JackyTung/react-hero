import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Progress from '@/components/Progress';
import configureStore from '@/redux/stores/configureStore';

const history = createBrowserHistory();

const HeroRouter = lazy(() => import('./hero'));

const store = configureStore();

const BaseRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<Progress message="Loading..." />}>
          <Switch>
            <Route path="/hero" component={HeroRouter} />
            <Route path="/" render={() => <Redirect to="/hero" />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default BaseRouter;
