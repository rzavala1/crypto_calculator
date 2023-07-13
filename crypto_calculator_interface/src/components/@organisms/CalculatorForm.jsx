import { useState } from "react";
import calculatorService from "../../services/CalculatorService";
import CalculatorFields from "../@molecules/CalculatorFields";
import TableInvestment from "../@molecules/TableInvestment";

function CalculatorForm() {

    const[data, setData]=useState([]);
    const [investment, setInvestment]=useState(0);
  
    const calculateCrypto = (investmentReq) => {
        setInvestment(investmentReq)
    calculatorService
      .calculate(investmentReq)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <CalculatorFields onCalculate={calculateCrypto}/>
        <h1 className="text-white pt-5">Proyección de ganancias</h1>
        <TableInvestment data={data} investment={investment}/>
      </div>
    </div>
  );
}

export default CalculatorForm;
