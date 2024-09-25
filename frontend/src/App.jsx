import Navbar from "./components/navbar/navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer.jsx";
import { CartProvider } from "./contexts/useCartContext.jsx";

export default function App() {

  return (
    <>
      <CartProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  );
}
