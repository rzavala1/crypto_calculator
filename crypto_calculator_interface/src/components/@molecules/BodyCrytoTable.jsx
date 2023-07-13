import React from "react";

const BodyCrytoTable = ({ data }) => {
  const getImage = (name) => {
    const srcStr = name + ".png";
    return <img src={srcStr} alt={name} className="w-[40px]" />;
  };

  return (
    <div className="text-secundary text-white bg-black text-sm">
      {data.map((obj, index) => {
        return (
          <div className="flex items-center p-2">
            <div key={index} className="flex items-center w-[100px]">
              <div>
                {getImage(obj.symbol)}
              </div>
              <div className="p-2">{obj.name}</div>
            </div>
            <div key={index} className="p-2  w-[100px]">
              {obj.price_usd.toFixed(3)}
            </div>
            <div key={index} className="p-2  w-[100px]">
              {obj?.percent_change_usd_last_1_hour.toFixed(3)}
            </div>
            <div key={index} className="p-2  w-[100px]">
              {obj?.percent_change_usd_last_24_hours.toFixed(3)}
            </div>
            <div key={index} className="p-2  w-[100px]">
              faltante
            </div>
            <div key={index} className="p-2  w-[150px]">
              {obj?.current_marketcap_usd.toFixed(3)}
            </div>
            <div key={index} className="p-2  w-[100px]">
              {obj?.percent_change_usd_last_24_hours.toFixed(3)}
            </div>
            <div key={index} className="p-2  w-[100px]">
              {obj?.percent_change_last_1_week.toFixed(3)}
            </div>
            <div key={index} className="p-2  w-[100px]">
              {obj?.percent_change_last_1_month.toFixed(3)}
            </div>
            <div key={index} className="p-2  w-[100px]">
              {obj?.percent_change_last_1_year.toFixed(3)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BodyCrytoTable;
