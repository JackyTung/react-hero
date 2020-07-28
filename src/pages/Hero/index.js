import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Progress from '@/components/Progress';
import { getHeros, getHerosCancelled } from '@/features/hero';

const Hero = () => {
  const dispatch = useDispatch();
  const loaded = useSelector(state => state.hero);

  useEffect(() => {
    dispatch(getHeros());

    return () => dispatch(getHerosCancelled());
  }, [dispatch]);

  if (!loaded) {
    return <Progress />;
  }

  return <div>This is hero page</div>;
};

export default Hero;
