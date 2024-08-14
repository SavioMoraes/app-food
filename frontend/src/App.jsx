import Navbar from "./components/navbar/navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer.jsx";

export default function App() {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
