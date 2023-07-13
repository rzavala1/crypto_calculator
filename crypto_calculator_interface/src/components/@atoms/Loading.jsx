import React from 'react';
import ImgGif from '../../assets/images/loader.gif'
const Loading = ({ text, onClick }) => {
  return (
    <div className='text-white text-center mt-[50px]'>
      <div className='flex justify-center'>
        <img src={ImgGif} alt="" className='w-[80px]'/>
      </div>
      Loading...
      </div>
  );
};

export default Loading;
