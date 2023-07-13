import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import TableCrypto from "../@molecules/TableCrypto";
const URl_SOCKET = process.env.REACT_APP_SOCKET_URL;

function CryptoForm() {

  const [dataCrypto, setDataCrypto]=useState([])
  
  useEffect(() => {
    const socket = io(URl_SOCKET); 

    socket.on("connect", () => {
      console.log("Connect socket server");
    });

    socket.on("crypto", (data) => {
      console.info(data);
      setDataCrypto(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
    <div>
      {dataCrypto?.length>0 && (
        <>
        <TableCrypto data={dataCrypto}/>       
       
        </>
      )}
    </div>
  </div>
  );
}

export default CryptoForm;
