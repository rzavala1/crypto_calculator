import { useState } from "react";
import Button from "../@atoms/Buttom";
import TextField from "../@atoms/TextField";

function CalculatorFields(props) {
     const [investment, setInvestment] = useState('');

    const handleNameChange = (e) => {
        setInvestment(e.target.value);
    };

    const handleClick = () => {
        props.onCalculate(investment);
    };

    return (
        <div className="flex items-end">
            <div>
                <TextField label="Inversión" value={investment} onChange={handleNameChange}/>
            </div>
            <div className="ml-3">
                <Button text="Calcular" onClick={handleClick} />
            </div>
        </div>
    );
  }
  
  export default CalculatorFields;
  