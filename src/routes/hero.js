import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import HeroPage from '@/pages/Hero';
import NotFound from '@/pages/NotFound';
import ProfilePage from '@/pages/Profile';

const HeroRouter = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path={url} component={HeroPage} />
      <Route path={`${url}/:heroId`} component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default HeroRouter;
