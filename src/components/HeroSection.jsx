import { HERO_CONTENT, BRAND_LOGOS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-28 lg:pt-36"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        {/* badgeText*/}
        <motion.div
          variants={fadeInUp}
          className="mb-8 text-neutral-800 px-3 py-2 text-xs"
        >
          {HERO_CONTENT.badgeText}
        </motion.div>

        {/* mainHeading*/}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter
        bg-gradient-to-b from-black via-neutral-700 to-neutral-400 bg-clip-text text-transparent "
        >
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </motion.h1>

        {/* subHeading*/}
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-neutral-400 max-w-xl"
        >
          {HERO_CONTENT.subHeading}
        </motion.p>

        {/* callToAction*/}
        <motion.div variants={fadeInUp} className="mt-6 space-x-4">
          <a
            href="#chatgpt"
            className="inline-block bg-black rounded-lg 
            hover:bg-neutral-700 text-white py-3 px-6 font-medium"
          >
            {HERO_CONTENT.callToAction.primary}
          </a>
          <a
            href="#pricing"
            className="inline-block border border-black bg-white rounded-lg 
            hover:bg-neutral-300 text-black py-3 px-6 font-medium"
          >
            {HERO_CONTENT.callToAction.secondary}
          </a>
        </motion.div>

        {/* trustedByText*/}
        <motion.div
          variants={fadeInUp}
          className="hidden md:flex flex-col py-10"
        >
          <p className="text-gray-400 text-center mb-2">
            {HERO_CONTENT.trustedByText}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {BRAND_LOGOS.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-28 w-auto"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
