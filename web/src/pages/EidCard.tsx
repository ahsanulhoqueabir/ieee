import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import wishes from "../assets/data/wishes.json";
import lists from "../assets/data/lists.json";
import fawishes from "../assets/data/facwishes.json";
import LoadingPage from "./LoadingPage";
import { useParams } from "react-router-dom";

export default function EidMubarakWish() {
  const [msg, setMsg] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const generateIndex = () => {
    const index = Math.floor(Math.random() * 10) + 1;
    return index;
  };
  useEffect(() => {
    setLoading(true);
    const ind = generateIndex();
    lists.forEach((item) => {
      if (item.id === id) {
        setName(item.name);
      }
    });
    if (id && id[0] === "f") {
      setMsg(fawishes[ind]);
    } else {
      setMsg(wishes[ind]);
    }
    setLoading(false);
  }, [msg, id]);
  if (loading || typeof msg === "undefined") {
    return <LoadingPage />;
  }
  return (
    <div className="eidbg py-16 flex flex-col items-center justify-center min-h-screen bg-green-100 p-4 text-center relative">
      {/* Animated Eid Elements */}
      <motion.div
        className="absolute top-5 lg:top-20 left-0 lg:left-1/4 z-[500]"
        initial={{ x: "100vw", y: "100vh", opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <motion.div
          className="bg-yellow-200 lg:text-3xl rounded-full lg:p-2 p-2 shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
        >
          🌙
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 animate-bounce"
        style={{ animationDuration: "3.5s" }}
        initial={{ x: "-100vw", y: "-100vh", opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <div className="bg-yellow-500 rounded-full p-2 shadow-lg">🪔</div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-5xl text-yellow-300">🎉</div>
      </motion.div>

      {/* Fireworks */}
      <motion.div
        className="absolute top-10 right-20 animate-pulse"
        style={{ animationDuration: "2s" }}
        initial={{ x: "-100vh", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="text-5xl text-white">🎆</div>
      </motion.div>
      <motion.div
        className="absolute bottom-15 left-0 lg:left-15 animate-pulse z-[500]"
        style={{ animationDuration: "2s" }}
        initial={{ x: "100vw", y: "-100vh", opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <div className="text-5xl text-white">🎇</div>
      </motion.div>

      {/* Floating Balloons */}
      <motion.div
        className="absolute bottom-1/2 left-0 lg:left-1/4 z-[500]"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="text-5xl lg:text-[70px] text-yellow-400">🎈</div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-0 lg:right-1/3 z-[500]"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="text-5xl lg:text-[70px] text-yellow-400">🎈</div>
      </motion.div>

      <motion.div
        className="absolute top-5 right-5 animate-pulse"
        style={{ animationDuration: "5s" }}
      >
        <div className="text-3xl text-white">⭐</div>
      </motion.div>
      <motion.div
        className="absolute top-2 left-20 animate-pulse"
        style={{ animationDuration: "4s" }}
      >
        <div className="text-3xl text-white">⭐</div>
      </motion.div>

      {/* Handwritten Letter Style */}
      <motion.div
        className="mt-6 p-6 bg-white ring-1 ring-[#006A71] rounded-2xl shadow-xl w-full max-w-md text-center relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Inline SVG for Grid Background */}
        <svg
          className="absolute inset-0 w-full h-full "
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="linePattern"
              width="100"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="25"
                x2="100"
                y2="25"
                stroke="#ddd"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#linePattern)" />
        </svg>

        <div className="relative z-10 text-left font-handwritten ">
          <div className="flex gap-4 text-3xl text-left font-handwritten">
            <h2>Dear </h2>
            <h2 className=" text-green-700 mb-2">{name || id}</h2>
          </div>
          <div>
            <h2 style={{ color: "#2c7a7b" }}>🌙✨ Eid Mubarak! ✨🌙</h2>
            <br />
            <p style={{ color: "#333", fontSize: "16px", lineHeight: "1.6" }}>
              {msg.length > 0
                ? msg[0]
                : "May this Eid bring you closer to your loved ones and fill your heart with joy. May your prayers be answered, and may you find peace and happiness in every moment."}
            </p>
            <br />
            <p style={{ color: "#333", fontSize: "16px", lineHeight: "1.6" }}>
              {msg.length > 0
                ? msg[1]
                : "May the blessings of Eid fill your life with happiness and joy. Wishing you a day filled with love, laughter, and cherished moments."}
            </p>
            <br />
            <h3 style={{ color: "#2c7a7b" }}>
              🎉 Eid Mubarak to You & Your Family! 🎉
            </h3>
            <br />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
