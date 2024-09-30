import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";

const PricingPlans = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-4 mt-20 ">
        {/* heading and paragraphs */}
        <motion.div
          className="text-center mb-12 border-t border-neutral-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2
            className="text-3xl lg:text-5xl mt-20 text-black tracking-tighter bg-gradient-to-b
            from-black via-neutral-700 to-neutral-400 bg-clip-text text-transparent"
          >
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-black">{PLANS_CONTENT.sectionDescription}</p>
        </motion.div>

        {/* pricing plans */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={childVariants}
              className={`rounded-xl shadow-lg p-8 bg-white ${
                plan.popular
                  ? "border border-neutral-900/80"
                  : "border border-neutral-300"
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="px-3 py-1 text-xs text-black bg-neutral-300/80 rounded-full uppercase">
                    {PLANS_CONTENT.popularBadge}
                  </span>
                </div>
              )}

              <h3 className="text-lg lg:text-xl text-black mb-4 tracking-tighter uppercase">
                {plan.name}
              </h3>

              <p className="text-black mb-6">{plan.description}</p>
              <div className="text-2xl lg:text-3xl font-medium mb-6 text-black">
                {plan.price}
              </div>
              <ul className="mb-8 space-y-2 text-black">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 px-4 bg-white border border-neutral-300 rounded-lg text-black
               hover:bg-neutral-300 transition-colors duration-300"
              >
                {PLANS_CONTENT.ctaText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
