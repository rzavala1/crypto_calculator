import { useTable } from "react-table";
import { useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";
import { cryptoAtom } from "../../jotai/CryptoAtom";

function TableCrypto() {
  const [dataAtom] = useAtom(cryptoAtom);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataAtom);
  }, [dataAtom]);

  const getColor = (value) => {
    return (
      <div
        style={{
          color: value >= 0 ? "green" : "red",
          padding: "2px",
          borderRadius: "4px",
        }}
      >
        {value >= 0 ? "+" + value + "%" : value + "%"}
      </div>
    );
  };

  const columns = useMemo(
    () => [
      { Header: "ASSET", accessor: "name" },
      {
        Header: "Price (USD)",
        accessor: "price_usd",
        Cell: ({ value }) => "$" + value,
      },
      {
        Header: "CHANGE VS USD (1H)",
        accessor: "percent_change_usd_last_1_hour",
        Cell: ({ value }) => getColor(value),
      },
      {
        Header: "CHANGE VS USD (24H)",
        accessor: "percent_change_usd_last_24_hours",
        Cell: ({ value }) => getColor(value),
      },
      { Header: "7 DAY TREND", value: "current_marketcap_usd" },
      {
        Header: "REPORTED MARKETCAP",
        accessor: "current_marketcap_usd",
        Cell: ({ value }) => "$" + value,
      },
      {
        Header: "REAL VOLUME (24H)",
        accessor: "real_volume_last_24_hours",
        Cell: ({ value }) => "$" + value,
      },
      {
        Header: "CHANGE VS USD (7D)",
        accessor: "percent_change_last_1_week",
        Cell: ({ value }) => getColor(value),
      },
      {
        Header: "CHANGE VS USD (30D)",
        accessor: "percent_change_last_1_month",
        Cell: ({ value }) => getColor(value),
      },
      {
        Header: "CHANGE VS USD(YTD)",
        accessor: "percent_change_last_1_year",
        Cell: ({ value }) => getColor(value),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: useMemo(() => data, [data]) });

  const getImage = (name) => {
    const srcStr = name + ".png";
    return <img src={srcStr} alt={name} className="w-[30px]" />;
  };

  return (
    <div className="pt-3">
      <div>
        <table {...getTableProps()} className="table w-[100%]">
          <thead className="bg-black text-white">
            {headerGroups.map((headerGroup,index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <>
                    {index === 0 ? (
                      <th {...column.getHeaderProps()} className="p-2 text-sm" key={index}>
                        {column.render("Header")}
                      </th>
                    ) : (
                      <th {...column.getHeaderProps()} className="p-2 text-sm" key={index}>
                        {column.render("Header")}
                      </th>
                    )}
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
                  {row.cells.map((cell, index) => (
                    <>
                      {index === 0 ? (
                        <td key={index}
                          {...cell.getCellProps()}
                          className="text-center text-primary flex p-3 text-base ml-2"
                        >
                          <div className="mr-1">{getImage(cell.value)}</div>
                          {cell.render("Cell")}
                        </td>
                      ) : (
                        <td key={index}
                          {...cell.getCellProps()}
                          className="text-center p-2 text-base"
                        >
                          {cell.render("Cell")}
                        </td>
                      )}
                    </>
                  ))}
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
