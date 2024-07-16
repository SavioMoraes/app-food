import Navbar from "./components/navbar/navbar.jsx";
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
