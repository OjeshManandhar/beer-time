// packages
import { useLiveQuery } from 'dexie-react-hooks';

// components
import List from '@/components/List';
import Message from '@/components/Message';
import ButtonNoOutline from '@/components/Buttons/NoOutline';

// models
import { db } from '@/models/beer.model';

// assets
import MyBeer from '@/assets/images/my-beer.png';

// types
import type { Props } from './types';

function MyBeers(props: Props) {
  const beers = useLiveQuery(() => db.beers.toArray());

  const content = () => {
    if (!beers) {
      return (
        <Message>
          <p>
            Loading{' '}
            <i className='ml-3 fa-solid fa-circle-notch animate-spin'></i>
          </p>
        </Message>
      );
    }

    if (!beers.length) {
      return (
        <Message>
          <p className='text-center'>Nothing to see yet.</p>
          <p className='text-center'>
            <ButtonNoOutline onClick={() => props.openModal()}>
              Click here
            </ButtonNoOutline>{' '}
            to add your first beer!
          </p>
        </Message>
      );
    }

    return <List beers={beers} placeholderImage={MyBeer} />;
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
