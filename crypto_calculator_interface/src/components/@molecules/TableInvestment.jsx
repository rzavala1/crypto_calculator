import BodyTable from "../@atoms/BodyTable.jsx";
import HeadTable from "../@atoms/HeadTable";

function TableInvestment(props) {
  const { data, investment } = props;
  const values=["Cryptomoneda", "Inversión USD", "Precio compra USD", "Cryptos compradas", "Proyección anual", "Proyección Cryptos"]

  return (
    <div className="pt-4">
      <div>
        <HeadTable values={values} />
        <BodyTable data={data}investment={investment} />
      </div>
    </div>
  );
}

export default TableInvestment;
