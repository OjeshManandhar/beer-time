// types
import type { Props } from './types';

function Card({ beer }: Props) {
  return (
    <li className='flex flex-row h-40 gap-5 p-6 overflow-hidden bg-white rounded cursor-pointer drop-shadow-md hover:bg-alice'>
      <img
        src={beer.image_url}
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
  );
}

export default Card;
