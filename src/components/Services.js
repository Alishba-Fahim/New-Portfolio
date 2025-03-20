import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description: "Creating visually appealing and user-friendly designs.",
    link: "Learn more",
  },
  {
    name: "Development",
    description: "Building responsive and functional web applications.",
    link: "Learn more",
  },
  {
    name: "Performance Optimization",
    description: "Improving load times and user experience.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text & Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 space-y-5"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-8">
              I'm a Freelance Front-end Developer with over 2 years of
              experience.
            </h3>
            <a href="#work">
              <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 btn btn-sm text-white text-sm sm:text-base md:text-lg font-semibold">
              See my work
              </button>
              </a>

          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/50 pb-4 flex flex-col gap-3"
                    key={index}
                  >
                    <h4 className="text-[22px] font-semibold text-white">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight text-gray-300">
                      {description}
                    </p>

                    <div className="flex items-center justify-between">
                      <a
                        href="#"
                        className="btn w-8 h-8 flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;




