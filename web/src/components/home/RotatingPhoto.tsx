import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const RotatingPhoto = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl   ">
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src="https://ieeecsbdc.org/assets/3-84af3b17.jpg"
            className="h-60 lg:h-72 lg:w-[750px] w-[450px]  object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default RotatingPhoto;
