import Header from "../@organisms/Header";
import Footer from "../@organisms/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
