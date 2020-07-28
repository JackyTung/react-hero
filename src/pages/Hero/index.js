import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeroCard from '@/components/HeroCard';
import Progress from '@/components/Progress';
import { getHeros, getHerosCancelled } from '@/features/hero';

const Hero = () => {
  const dispatch = useDispatch();
  const loaded = useSelector(state => state.hero.loaded);
  const sources = useSelector(state => state.hero.sources);

  useEffect(() => {
    dispatch(getHeros());

    return () => dispatch(getHerosCancelled());
  }, [dispatch]);

  if (!loaded) {
    return <Progress />;
  }

  return (
    <div>
      {sources.map(s => (
        <HeroCard key={s.id} imgUrl={s.image} title={s.name} />
      ))}
    </div>
  );
};

export default Hero;
