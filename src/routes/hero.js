import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import HeroPage from '@/pages/Hero';
import NotFound from '@/pages/NotFound';

const HeroRouter = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path={url} component={HeroPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default HeroRouter;
