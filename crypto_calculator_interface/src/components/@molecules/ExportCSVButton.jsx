import React from "react";
import { CSVLink } from "react-csv";

const ExportCSVButton = ({ data, title, headers }) => {
  return (
    <div className="bg-primary text-white h-[45px] mr-3 w-[110px] rounded-md flex items-center justify-center">
      <CSVLink data={data} headers={headers} filename="data.csv">
        {title}
      </CSVLink>
    </div>
  );
};

export default ExportCSVButton;
