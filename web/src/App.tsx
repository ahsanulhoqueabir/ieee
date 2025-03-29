import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import BottomNavigation from "./components/common/BottomNavigation";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen ">
        <Outlet />
      </div>

      <Footer />
      <div className="lg:hidden">
        <BottomNavigation />
      </div>
    </div>
  );
};
export default App;
