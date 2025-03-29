import { TextEffect } from "@/components/ui/text-effect";
import PhotoShuffle from "./PhotoShuffle";

const Hero = () => {
  return (
    <section className="bg-[#e6e8dd] py-24 px-4 lg:px-20 lg:flex gap-8 items-center ">
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        {/* <h2 className="text-xl text-primary font-medium">
          <TypewriterEffectSmooth
            words={wordss}
            className={"text-xl  font-medium"}
            cursorClassName={"bg-primary"}
          />
        </h2> */}
        <TextEffect
          per="char"
          preset="fade"
          className="text-xl text-primary font-medium"
        >
          IEEE Computer Society Jagannath University Chapter
        </TextEffect>

        <TextEffect
          per="char"
          preset="fade"
          className="text-4xl md:text-5xl font-bold my-4"
        >
          Empowering the Future of Computer Science
        </TextEffect>

        <p className="text-base md:text-lg  my-4 md:my-6">
          Welcome to the IEEE Computer Society Bangladesh Chapter website. Our
          mission is to provide a platform for computer science professionals to
          connect, collaborate, and innovate
        </p>
        <div>
          <button className="bg-primary text-white font-medium py-2 px-4 rounded transition-all hover:bg-secondary duration-500 ease-in-out w-32 flex gap-2 items-center">
            Join Now
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <PhotoShuffle />
      </div>
    </section>
  );
};

export default Hero;
