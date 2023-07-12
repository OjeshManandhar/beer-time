// types
import type { Props } from './types';

function ButtonPrimary(props: Props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`p-2 text-white rounded bg-cerulean-blue cursor-pointer disabled:cursor-not-allowed ${props.classNames}`}
    >
      {props.children}
    </button>
  );
}

export default ButtonPrimary;
