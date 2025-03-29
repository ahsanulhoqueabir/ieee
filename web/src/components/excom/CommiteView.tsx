"use client";
import { FaEnvelopeOpenText } from "react-icons/fa";
import data from "../../assets/data/excom.json";
import { useEffect, useState } from "react";

interface Member {
  name: string;
  position: string;
  email: string;
  image: string;
}

interface Data {
  [year: string]: {
    [section: string]: Member[];
  };
}

const typedData: Data = data;

const CommiteeView = ({ year, section }: { year: string; section: string }) => {
  const [members, setMembers] = useState<Member[]>([]);
  useEffect(() => {
    if (typedData[year] && typedData[year][section]) {
      setMembers(typedData[year][section]);
    } else {
      setMembers([]);
    }
  }, [year, section]);
  return (
    <div className="px-4 lg:px-8">
      {members.length > 0 ? (
        <>
          {" "}
          <div className="flex items-center justify-center space-x-4 ">
            <ChairCard
              name={members[0].name}
              position={members[0].position}
              image={
                members[0].image !== ""
                  ? members[0].image
                  : "https://res.cloudinary.com/dgv0tczin/image/upload/v1742927707/ivuu6vnu2bfrvfprbeab.jpg"
              }
              email={members[0].email}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {members
              .slice(1, members.length)
              .map((member: CardProps, index: number) => (
                <Card
                  name={member.name}
                  position={member.position}
                  key={index}
                  image={
                    member.image !== ""
                      ? member.image
                      : "https://res.cloudinary.com/dgv0tczin/image/upload/v1742927707/ivuu6vnu2bfrvfprbeab.jpg"
                  }
                  email={member.email}
                />
              ))}
          </div>{" "}
        </>
      ) : (
        <h1>No members</h1>
      )}
    </div>
  );
};

export default CommiteeView;

interface CardProps {
  name: string;
  position: string;
  image: string;
  email: string;
}
const ChairCard = ({ name, position, image, email }: CardProps) => {
  return (
    <div className="flex flex-col text-center items-center space-y-4 border w-fit mx-auto p-5 rounded border-primary hover:border-secondary transition-all duration-300 group">
      <div>
        <img
          className="size-60 rounded-lg shadow-md object-cover"
          src={image}
          alt="Profile"
        />
      </div>
      <div>
        <h4 className="text-lg lg:text-xl font-medium">{name}</h4>
        <p className="text-secondary font-semibold">{position}</p>
      </div>
      <hr className="border border-teal-800 w-1/2 group-hover:w-full duration-300 transition-all" />
      <div>
        <a href={`mailto:${email}`}>
          <FaEnvelopeOpenText className="text-green-700 text-xl" />
        </a>
      </div>
    </div>
  );
};
const Card = ({ name, position, image, email }: CardProps) => {
  return (
    <div className="flex flex-col text-center items-center space-y-4 border w-full mx-auto p-5 rounded border-primary hover:border-secondary transition-all duration-300 group">
      <div>
        <img
          className="size-60 rounded-lg shadow-md object-cover"
          src={image}
          alt="Profile"
        />
      </div>
      <div>
        <h4 className="text-lg lg:text-xl font-medium">{name}</h4>
        <p className="text-secondary font-semibold">{position}</p>
      </div>
      <hr className="border border-teal-800 w-1/2 group-hover:w-full duration-300 transition-all" />
      <div>
        <a href={`mailto:${email}`}>
          <FaEnvelopeOpenText className="text-green-700 text-xl" />
        </a>
      </div>
    </div>
  );
};
