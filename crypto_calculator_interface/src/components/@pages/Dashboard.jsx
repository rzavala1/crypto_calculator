import Layout from "../@templates/Layout";
import CalculatorForm from "../@organisms/CalculatorForm";
import CryptoForm from "../@organisms/CryptoForm";

function Dashboard() {
  return (
    <Layout>
      <div className="p-[45px]">
        <div>
            <CalculatorForm />
        </div>
        <div>
        <h1 className="text-white pt-7 text-center">Escaner Cryto</h1>
            <CryptoForm />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
