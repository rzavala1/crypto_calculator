import Header from "../@organisms/Header";
import Footer from "../@organisms/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
        <main className="h-[100%] z-10">{children}</main>
        <div className="stars"></div>
        <div className="twinkling-blue"></div>
      <Footer />
    </>
  );
}

export default Layout;
