// packages
import { Tooltip } from 'react-tooltip';

// types
import type { Props } from './types';

function Card({ beer }: Props) {
  return (
    <li className='flex flex-row h-40 gap-5 p-6 overflow-visible transition-all bg-white rounded cursor-pointer card drop-shadow-md hover:bg-alice-blue'>
      <img
        id={`all-beer-img-${beer.id}`}
        src={beer.image_url}
        alt={beer.name}
        className='hidden object-contain h-full sm:block min-w-[75px] max-w-[75px]'
      />

      <div>
        <p className='text-2xl font-semibold line-clamp-1'>{beer.name}</p>
        <p className='mt-2 text-sm font-semibold text-lemon-curry line-clamp-1'>
          {beer.tagline}
        </p>
        <p className='mt-2 text-sm line-clamp-2'>{beer.description}</p>
      </div>

      <Tooltip
        anchorSelect={`#all-beer-img-${beer.id}`}
        delayShow={150}
        place='top'
        className='px-2 py-1 bg-raisin-black max-w-[250px]'
      >
        {typeof beer.ingredients === 'string'
          ? beer.ingredients
          : beer.ingredients.join(', ')}
      </Tooltip>
    </li>
  );
}

export default Card;
