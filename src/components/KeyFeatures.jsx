import { KEY_FEATURES_CONTENT } from "../constants";
import { motion } from "framer-motion";

const KeyFeatures = () => {
  // Animate the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="text-center mb-12 border-t border-neutral-300">
          {/* heading and paragraphs */}
          <h2
            className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-b
           from-black via-neutral-700 to-neutral-400 bg-clip-text text-transparent"
          >
            {KEY_FEATURES_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-black">
            {KEY_FEATURES_CONTENT.sectionDescription}
          </p>
        </div>

        {/* features and descriptions*/}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap justify-between"
        >
          {KEY_FEATURES_CONTENT.features.map((feature) => (
            <motion.div
              className="flex flex-col items-center 
              text-center w-full md:w-1/2 lg:w-1/3 p-6"
              key={feature.id}
              variants={featureVariants}
            >
              <div className="flex justify-center items-center mb-4 text-black">
                {feature.icon}
              </div>
              <h3 className="text-xl text-black">{feature.title}</h3>
              <p className="mt-2 text-black">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;
