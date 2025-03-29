import GetIcon from "@/utilities/getIcon";
import benefits from "../../assets/data/benefits.json";
import { Link } from "react-router-dom";
const Benefits = () => {
  return (
    <section className="px-5 lg:px-20 py-10">
      <div className="badge badge-accent mx-auto flex">Benefits</div>
      <div className="text-center max-w-3xl mx-auto mt-10">
        <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-secondary sm:text-4xl md:mx-auto">
          Join IEEE CS BDC and Enjoy Exclusive Membership
        </h2>
        <p className="text-base  md:text-lg">
          As a member of the IEEE Computer Society Bangladesh Chapter, you will
          have access to a wide range of resources and tools to help you advance
          your career in computer science. Access to Latest Research Get
          discounts to conferences and tap into mentorship programs, career
          development webinars, and more.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            data-id={`card-${index}`}
            key={index}
            className="space-y-2 items-center mt-5 border hover:border-primary border-textC p-4 rounded  transition-colors duration-500 ease-in-out"
          >
            <div className="p-4 border border-textC w-fit text-xl rounded-full text-[#26bfe5]">
              <GetIcon icon={`${benefit.icon.trim()}`} lib={benefit.lib} />
            </div>
            <p className="font-bold">{benefit.title}</p>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8  flex justify-center ">
        <Link to={"/membership"}>
          <button className="bg-secondary text-white px-6 py-2 rounded w-full hover:shadow-lg transition-colors duration-500 ease-in-out hover:outline-dotted">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Benefits;
