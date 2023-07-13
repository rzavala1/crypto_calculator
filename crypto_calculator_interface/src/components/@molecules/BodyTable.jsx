import React from "react";

const BodyTable = ({ data, investment }) => {
  const getImage = (name) => {
    const srcStr = name + ".png";
    return <img src={srcStr} alt={name} className="w-[40px]" />;
  };

  return (
    <div className="text-secundary flex">
      {data.map((obj, index) => {
        return (
          <div
            key={index}
            className="items-center mt-[-50px] w-[150px] bg-white mr-[30px] rounded-md text-center"
          >
            <div className="p-2 flex justify-center">{getImage(obj.name)}</div>
            <div className="p-2">{obj.name}</div>
            <div className="p-2">${investment}</div>
            <div className="p-2">${obj.price.toFixed(3)}</div>
            <div className="p-2">{obj?.profit?.buyInit.toFixed(4)}</div>
            <div className="p-2">${obj?.profit?.profitTotal.toFixed(3)}</div>
            <div className="p-2">{obj?.profit?.buyFinal.toFixed(4)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BodyTable;
