import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div className="bg-background ">
      <Navbar />
      <div className="min-h-screen ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default App;
