import { useState } from "react";
import calculatorService from "../../services/CalculatorService";
import CalculatorFields from "../@molecules/CalculatorFields";
import TableInvestment from "../@molecules/TableInvestment";

function CalculatorForm() {
  const [data, setData] = useState([]);
  const [investment, setInvestment] = useState(null);

  const calculateCrypto = (investmentReq) => {
    setInvestment(investmentReq);
    calculatorService
      .calculate(investmentReq)
      .then((response) => {
        console.info("response", response);
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <CalculatorFields onCalculate={calculateCrypto} />
        {data?.length > 0 && (
          <>
            <div className="text-center">
              <h1 className="text-white pt-5 pb-[50px]">
                Proyección de ganancias
              </h1>
            </div>
            <div className="flex justify-center">
              <TableInvestment data={data} investment={investment} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CalculatorForm;
