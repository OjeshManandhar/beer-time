import { useState } from 'react';

// components
import List from '@/components/List';
import Message from '@/components/Message';

// models
import BeerModel from '@/models/beer.model';

// types
import type { Props } from './types';

function MyBeers(props: Props) {
  const [beers, setBeers] = useState(BeerModel.getAll());

  const content = () => {
    if (!beers.length) {
      return (
        <Message>
          <p className='text-center'>Nothing to see yet.</p>
          <p className='text-center'>Click here to add your first beer!</p>
        </Message>
      );
    }

    return <List beers={beers} />;
  };

  return (
    <div
      className={`my-5 transition-all ${props.display ? 'block' : 'hidden'}`}
    >
      {content()}
    </div>
  );
}

export default MyBeers;
