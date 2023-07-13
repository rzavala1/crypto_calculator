import React from 'react';

const HeadCryptoTable = ({ values }) => {
  return (
    <div className='flex bg-black p-2'>
      {values.map((obj, index) => {
          return <div key={index} className="p-2 text-sm text-white w-[100px]">{obj}</div>;
        })}
    </div>
    
  );
};

export default HeadCryptoTable;
