import BodyCrytoTable from "./BodyCrytoTable.jsx";
import HeadCryptoTable from "./HeadCryptoTable";
import { useTable } from "react-table";
import { useMemo } from "react";

function TableCrypto(props) {
  const { data } = props;
  const values = [
    "ASSET",
    "Price (USD)",
    "CHANGE VS USD(1H)",
    "CHANGE VS USD(24H)",
    "7 DAY TREND",
    "REPORTED MARKETCAP",
    "REAL VOLUME (24H)",
    "CHANGE VS USD (7D)",
    "CHANGE VS USD (30D)",
    "CHANGE VS USD(YTD)",
  ];

  //const data = React.useMemo(() => generateData(), []);
  const columns = useMemo(
    () => [
      { Header: "ASSET", accessor: "name" },
      { Header: "Price (USD)", accessor: "price_usd" },
      {
        Header: "CHANGE VS USD(1H)",
        accessor: "percent_change_usd_last_1_hour",
      },
      {
        Header: "CHANGE VS USD(24H)",
        accessor: "percent_change_usd_last_24_hours",
      },
      { Header: "7 DAY TREND", accessor: "percent_change_last_1_week" },
      { Header: "REPORTED MARKETCAP", accessor: "current_marketcap_usd" },
      { Header: "REAL VOLUME (24H)", accessor: "real_volume_last_24_hours" },
      {
        Header: "CHANGE VS USD (30D)",
        accessor: "percent_change_last_1_month",
      },
      { Header: "CHANGE VS USD(YTD)", accessor: "percent_change_last_1_year" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const getImage = (name) => {
    const srcStr = name + ".png";
    return <img src={srcStr} alt={name} className="w-[30px] pr-2" />;
  };

  return (
    <div className="pt-10">
      <div>
        <table {...getTableProps()} className="table">
          <thead className="bg-black text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column,index) => (
                  <>
                  {index === 0 ? 
                    <th {...column.getHeaderProps()} className="p-2 text-sm">
                    {column.render("Header")}
                  </th>:
                  <th {...column.getHeaderProps()} className="p-2 text-sm">
                    {column.render("Header")}
                  </th>
                  }
                  </>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-black text-white">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, index) =>
                  <>
                    {index === 0 ? (
                      <td
                        {...cell.getCellProps()}
                        className="text-center p-2 text-primary flex"
                      >
                        <div>{getImage(cell.value)}</div>
                        {cell.render("Cell")}
                      </td>
                    ) : (
                      <td {...cell.getCellProps()} className="text-center p-2">
                        {cell.render("Cell")}
                      </td>
                    )}
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCrypto;
