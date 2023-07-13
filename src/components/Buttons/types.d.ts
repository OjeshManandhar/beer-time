import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;

  disabled?: boolean;
  classNames?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};
