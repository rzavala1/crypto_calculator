import { useState } from "react";
import calculatorService from "../../services/CalculatorService";
import CalculatorFields from "../@molecules/CalculatorFields";
import TableInvestment from "../@molecules/TableInvestment";

function CalculatorForm() {

    const[data, setData]=useState([])
  
    const calculateCrypto = (investment) => {
    calculatorService
      .calculate(investment)
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <CalculatorFields onCalculate={calculateCrypto}/>
        <TableInvestment data={data} />
      </div>
    </div>
  );
}

export default CalculatorForm;
