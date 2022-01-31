import React from 'react';
import Image from 'next/image';
import AuthPageImage from '../../public/home.png';

const sidePanel = () => {
  return (
    <>
      <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 hidden lg:block">
        <Image
          className="w-4/6 h-4/6 sm:w-5/6 sm:h-5/6"
          src={AuthPageImage}
          alt="In image of notes"
        />
      </div>
    </>
  );
};

export default sidePanel;
