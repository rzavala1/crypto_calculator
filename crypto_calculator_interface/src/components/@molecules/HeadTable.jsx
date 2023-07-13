import React from 'react';

const HeadTable = ({ values }) => {
  return (
    <div className='text-white'>
      {values.map((obj, index) => {
          return <div key={index} className="p-2 text-normal text-white w-[180px] text-end mr-2 bg-resalt">{obj}</div>;
        })}
    </div>
    
  );
};

export default HeadTable;
