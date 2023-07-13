import Layout from "../@templates/Layout";
import CalculatorForm from "../@organisms/CalculatorForm";

function Dashboard() {
  return (
    <Layout>
      <div className="p-[45px]">
        <div>
            <h1 className="text-white text-center">Proyeción de ganancias</h1>
            <CalculatorForm />
        </div>
        <div>
            
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
