// types
import type { Props } from './types';

function ButtonNoOutline(props: Props) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`text-cerulean-blue cursor-pointer disabled:cursor-not-allowed ${props.classNames}`}
    >
      {props.children}
    </button>
  );
}

export default ButtonNoOutline;
