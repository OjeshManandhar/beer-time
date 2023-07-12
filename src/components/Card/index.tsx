// packages
import { Tooltip } from 'react-tooltip';

// types
import type { Props } from './types';

function Card({ beer }: Props) {
  return (
    <>
      <li className='flex flex-row h-40 gap-5 p-6 overflow-hidden bg-white rounded cursor-pointer drop-shadow-md hover:bg-alice'>
        <img
          id={`all-beer-img-${beer.id}`}
          src={beer.image_url}
          alt={beer.name}
          className='hidden h-full min-w-[75px] object-contain sm:block'
        />

        <div>
          <p className='text-2xl font-semibold line-clamp-1'>{beer.name}</p>
          <p className='mt-2 text-sm font-semibold text-lemon line-clamp-1'>
            {beer.tagline}
          </p>
          <p className='mt-2 text-sm line-clamp-2'>{beer.description}</p>
        </div>
      </li>

      <Tooltip
        anchorSelect={`#all-beer-img-${beer.id}`}
        delayShow={500}
        place='top'
      >
        {typeof beer.ingredients === 'string'
          ? beer.ingredients
          : beer.ingredients.join(', ')}
      </Tooltip>
    </>
  );
}

export default Card;
