import Lottie from "lottie-react";
import err from "../assets/animation/periodic-loader.json";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Lottie className="w-[60%] h-96 flex-1" animationData={err}></Lottie>
    </div>
  );
};

export default LoadingPage;
