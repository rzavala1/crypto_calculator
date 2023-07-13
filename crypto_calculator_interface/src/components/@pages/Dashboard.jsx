import Layout from "../@templates/Layout";
import CalculatorForm from "../@organisms/CalculatorForm";

function Dashboard() {
  return (
    <Layout>
      <div className="p-[45px]">
        <div>
            <CalculatorForm />
        </div>
        <div>
            
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
