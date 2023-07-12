// types
import type { Props } from './types';

function Message({ children }: Props) {
  return (
    <div className='grid w-full text-lg rounded h-96 place-content-center text-sonic-silver bg-lotion'>
      {children}
    </div>
  );
}

export default Message;
