import { ReactNode } from 'react';

interface ReusuableProps {
  colDigit?: string;
  children: ReactNode;
}

const ReusableCol = ({ colDigit = '3', children }: ReusuableProps) => {
  return <div className={`col-md-${colDigit}`}>{children}</div>;
};

export default ReusableCol;
