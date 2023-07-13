import React from 'react';

const HeadTable = ({ values }) => {
  return (
    <div className='text-white'>
      {values.map((obj, index) => {
          return <div key={index} className="p-2 text-normal text-primary">{obj}</div>;
        })}
    </div>
    
  );
};

export default HeadTable;
