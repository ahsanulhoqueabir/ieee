import { FaHome } from "react-icons/fa";
import { FaCalendarCheck, FaCircleInfo, FaUsers } from "react-icons/fa6";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { about, committee } from "../../assets/data/navitems";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <div className="flex justify-around fixed bottom-0 w-full bg-teal-600 py-3 z-[1000] border-t-2 border-white">
      <button className="bg-teal-600 text-white">
        <Link className="flex flex-col items-center" to="/">
          <FaHome className="h-5 w-5" />
          <span className="btm-nav-label">Home</span>
        </Link>
      </button>

      <div className="bg-teal-600 text-white">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="hover:text-primary">
              <div className="flex flex-col items-center text-white">
                <FaUsers className="h-5 w-5" />
                <p className="btm-nav-label">Ex-Com</p>
              </div>
            </MenubarTrigger>
            <MenubarContent>
              {committee.section.map((component) => (
                <MenubarItem key={component.name}>
                  <Link to={component.url}>{component.name}</Link>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className="bg-teal-600 text-white">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="hover:text-primary">
              <div className="flex flex-col items-center text-white">
                <FaCircleInfo className="h-5 w-5" />
                <p className="btm-nav-label">About</p>
              </div>
            </MenubarTrigger>
            <MenubarContent>
              {about.section.map((component) => (
                <MenubarItem key={component.name}>
                  <Link to={component.url}>{component.name}</Link>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <button className="bg-teal-600 text-white focus:ring-1 ring-yellow-600">
        <Link className="flex flex-col items-center" to="/events">
          <FaCalendarCheck className="h-5 w-5" />
          <span className="btm-nav-label">Events</span>
        </Link>
      </button>
    </div>
  );
};

export default BottomNavigation;
