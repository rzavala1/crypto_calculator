import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { atom, useAtom } from 'jotai';
import TableCrypto from "../@molecules/TableCrypto";
import { cryptoAtom } from '../../jotai/CryptoAtom';

const URl_SOCKET = process.env.REACT_APP_SOCKET_URL;

function CryptoForm() {

  const [dataAtom, setDataAtom] = useAtom(cryptoAtom);


  useEffect(() => {
    const socket = io(URl_SOCKET); 

    socket.on("connect", () => {
      console.log("Connect socket server");
    });

    socket.on("crypto", (data) => {
      console.info(data)
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
        <TableCrypto/>       
       
        </>
      ):
      <div>Loading..</div>}
    </div>
  </div>
  );
}

export default CryptoForm;
