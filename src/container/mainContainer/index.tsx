
import React, { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='px-[16px] max-w-[1240px] mx-auto'>
      {children}
    </div>
  );
};

export default Container;

