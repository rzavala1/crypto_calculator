import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { atom, useAtom } from 'jotai';
import TableCrypto from "../@molecules/TableCrypto";
import { cryptoAtom } from '../../jotai/CryptoAtom';
import ExportCSVButton from "../@molecules/ExportCSVButton";
import ExportJSONButton from "../@molecules/ExportJSONButton";
import Loading from "../@atoms/Loading";

const URl_SOCKET = process.env.REACT_APP_SOCKET_URL;

function CryptoForm() {

  const [dataAtom, setDataAtom] = useAtom(cryptoAtom);

  const headers = [
    { label: 'ASSET', key: 'name' },
    { label: 'SYMBOL', key: 'symbol' },
    { label: 'Price (USD)', key: 'price_usd' },
    { label: 'CHANGE VS USD (1H)', key: 'percent_change_usd_last_1_hour' },
    { label: 'CHANGE VS USD (24H)', key: 'percent_change_usd_last_24_hours' },
    { label: 'REPORTED MARKETCAP', key: 'current_marketcap_usd' },
    { label: 'REAL VOLUME (24H)', key: 'real_volume_last_24_hours' },
    { label: 'CHANGE VS USD (7D)', key: 'percent_change_last_1_week' },
    { label: 'CHANGE VS USD (30D)', key: 'percent_change_last_1_month' },
    { label: 'CHANGE VS USD (YTD)', key: 'percent_change_last_1_year' }
  ];


  useEffect(() => {
    const socket = io(URl_SOCKET); 

    socket.on("connect", () => {
      console.log("Connect socket server");
    });

    socket.on("crypto", (data) => {
      setDataAtom(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <div>
    <div>
      {dataAtom?.length>0 ? (
        <>
        <div className="flex justify-end mt-10">
          <ExportCSVButton data={dataAtom} title="Export CSV" headers={headers}/>
          <ExportJSONButton data={dataAtom} title="Export JSON"/>
        </div>
        
        <TableCrypto/>       
       
        </>
      ):
      <Loading />
      }
    </div>
  </div>
  );
}

export default CryptoForm;
