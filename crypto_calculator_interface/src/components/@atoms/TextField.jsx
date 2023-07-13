import React from "react";

const TextField = ({ label, value, onChange }) => {
  return (
    <div>
      <div className="pb-1">
        <label htmlFor="investment" className="text-white text-xl">{label}</label>
      </div>
      <div>
        <input
          id="investment"
          type="number"
          min={0}
          max={100}
          value={value}
          onChange={onChange}
          className="border-solid p-2 bg-white rounded-md w-[200px]"
        />
        <label className="m-2 text-white">
            USD
        </label>
      </div>
    </div>
  );
};

export default TextField;
