import React from 'react';
import Image from 'next/image';

const ServiceCategory = ({ url, name }) => {
  return (
    <div className='flex justify-center items-center m-[0.5] border-2 border-porabay/20 shadow-md bg-transparent rounded-2xl transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer '>
      <div className='p-1'>
        <Image src={url} width={150} height={150} className='rounded-md' />
        <p className='text-center'>{name}</p>
      </div>
    </div>
  );
};

export default ServiceCategory;
