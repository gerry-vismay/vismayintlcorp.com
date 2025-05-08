import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

const GuestLayout = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default GuestLayout;
