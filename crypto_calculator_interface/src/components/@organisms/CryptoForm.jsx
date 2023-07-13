import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import TableCrypto from "../@molecules/TableCrypto";

function CryptoForm() {

  const [dataCrypto, setDataCrypto]=useState([])
  
  useEffect(() => {
    const socket = io("http://localhost:4000"); 

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
