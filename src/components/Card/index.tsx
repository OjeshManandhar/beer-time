// packages
import { Tooltip } from 'react-tooltip';

// assets
import noImagePlaceholder from '@/assets/images/no-image-placeholder.svg';

// types
import type { Props } from './types';

function Card({ beer, placeholderImage }: Props) {
  return (
    <li className='flex flex-row h-40 gap-5 p-6 overflow-visible transition-all bg-white rounded cursor-pointer card drop-shadow-md hover:bg-alice-blue'>
      <img
        id={`all-beer-img-${beer.id}`}
        src={
          beer.image_url
            ? beer.image_url
            : placeholderImage
            ? placeholderImage
            : noImagePlaceholder
        }
        alt={beer.name}
        className='hidden object-contain h-full sm:block min-w-[75px] max-w-[75px]'
      />

      <div>
        <p className='text-2xl font-semibold line-clamp-1'>{beer.name}</p>
        <p className='mt-2 text-sm font-semibold text-lemon-curry line-clamp-1'>
          {beer.tagline}
        </p>
        <p className='mt-2 text-sm whitespace-pre-wrap line-clamp-2'>
          {beer.description}
        </p>
      </div>

      <Tooltip
        anchorSelect={`#all-beer-img-${beer.id}`}
        delayShow={150}
        place='top'
        className='px-2 py-1 bg-raisin-black max-w-[250px]'
      >
        {typeof beer.ingredients === 'string'
          ? beer.ingredients
          : Array.isArray(beer.ingredients)
          ? beer.ingredients.join(', ')
          : (() => {
              return (
                <>
                  <p>
                    <strong>Malt:</strong> {beer.ingredients.malt.join(', ')}
                  </p>
                  <p>
                    <strong>Hops:</strong> {beer.ingredients.hops.join(', ')}
                  </p>
                  <p>
                    <strong>Yeast:</strong> {beer.ingredients.yeast}
                  </p>
                </>
              );
            })()}
      </Tooltip>
    </li>
  );
}

export default Card;
