import React from 'react';

const HeadTable = ({ values }) => {
  return (
    <div className='flex text-white'>
      {values.map((obj, index) => {
          return <div key={index} className="p-2 text-base w-[160px]">{obj}</div>;
        })}
    </div>
    
  );
};

export default HeadTable;
