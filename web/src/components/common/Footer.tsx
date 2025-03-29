import { getImage } from "@/utilities/functions";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-teal-600 text-teal-50 lg:flex gap-20 justify-between p-10 mb-16 lg:mb-0 ">
      <aside className="w-full">
        <img
          src={getImage("logo", "logo.png")}
          alt="logo"
          className="size-12"
        ></img>
        <p className="text-justify">
          IEEE Computer Society is the world&apos;s leading membership
          organization dedicated to computer science and technology. Serving
          more than 60,000 members, the IEEE Computer Society is the trusted
          information, networking, and career-development source for a global
          community of technology leaders that includes researchers, educators,
          software engineers, IT professionals, employers, and students.
        </p>
      </aside>
      <hr className="border border-white w-full lg:hidden" />
      <div className="flex gap-7 justify-between w-full">
        <nav className="w-full flex flex-col">
          <h6 className="footer-title">Company</h6>
          <Link to={"/about-us"} className="link link-hover">
            About us
          </Link>
          <Link to={"/contact"} className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav className="w-full flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <Link to={"/terms-of-use"} className="link link-hover">
            Terms of use
          </Link>
          <Link to={"/privacy-policy"} className="link link-hover">
            Privacy policy
          </Link>
          <Link to={"/cookie-policy"} className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
