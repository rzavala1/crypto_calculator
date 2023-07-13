import React from 'react';

const BodyTable = ({ data, investment }) => {

  const getImage = (name) => {
    const srcStr = name + ".png";
    return <img src={srcStr} alt={name} className="w-[40px]"/>;
  };

  return (
    <div className='text-white'>
       {data.map((obj, index) => {
          return<div className='flex items-center'>
                <div key={index} className="p-2 w-[50px]">{getImage(obj.name)}</div>
                <div key={index} className="p-2 w-[110px]">{obj.name}</div>
                <div key={index} className="p-2 w-[160px]">${investment}</div>
                <div key={index} className="p-2 w-[160px]">${obj.price.toFixed(3)}</div>
                <div key={index} className="p-2 w-[160px]">{obj?.profit?.buyInit.toFixed(4)}</div>
                <div key={index} className="p-2 w-[160px]">${obj?.profit?.profitTotal.toFixed(3)}</div>
                <div key={index} className="p-2 w-[160px]">{obj?.profit?.buyFinal.toFixed(4)}</div>
            </div>;
        })}
    </div>
    
  );
};

export default BodyTable;
