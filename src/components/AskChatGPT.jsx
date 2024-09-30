import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AskChatGPT = () => {
  // define the variants for the container and fade in up animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      id="chatgpt"
    >
      <div
        className="flex flex-col items-center justify-center bg-white mt-20
    p-4 border border-gray-300 rounded-lg shadow-lg max-w-[1280px] min-h-[320px] md:min-h-[640px] mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-black"
        >
          Ask ChatGPT anything
        </motion.h1>
        <motion.div variants={fadeInUp} className="w-full max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Help me debug the code"
              className="w-full py-3 pl-4 pr-12 rounded-full bg-white text-black 
            placeholder-black focus:outline-none focus:ring-2 focus:ring-white border border-black"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full 
            bg-white hover:bg-gray-200 transition-colors duration-200"
            >
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AskChatGPT;
