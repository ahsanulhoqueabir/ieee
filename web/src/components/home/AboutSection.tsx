import { Link } from "react-router-dom";
import RotatingPhoto from "./RotatingPhoto";

const AboutSection = () => {
  return (
    <div className="newbg py-10 lg:py-16 w-full relative flex items-center justify-center ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" sm:text-7xl relative z-20 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 px-5 lg:px-20 lg:flex">
        <div className="lg:w-1/2">
          <h4 className="mb-4 text-2xl text-secondary font-semibold tracking-wide ">
            About Us
          </h4>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
            Who We Are: IEEE Computer Society Jagannath University Chapter
          </h2>
          <p className="text-base  md:text-lg ">
            IEEE Computer Society Bangladesh Chapter is a community of tech
            enthusiasts and leaders dedicated to advancing the boundaries of
            computing, bridging the gap between industry and academia, and
            enhancing professional development through knowledge sharing. With a
            vision of innovating for a better future and building a sustainable
            tech ecosystem in Bangladesh, this society is transforming the world
            through computer science.
          </p>
          <Link className="" to="/about-us">
            <button className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded-sm  md:w-auto md:mr-4 md:mb-0 bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border text-sm">
              Learn More
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2">
          <RotatingPhoto />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
