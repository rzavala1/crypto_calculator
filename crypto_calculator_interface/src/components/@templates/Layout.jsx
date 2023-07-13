import Header from "../@organisms/Header";
import Footer from "../@organisms/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
        <main className="bg-secondary h-[100%]">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
