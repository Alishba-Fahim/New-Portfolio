import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CountUp from "react-countup";
import profileImg from "../assets/about.png";

const About = () => {
  return (
    <section className="section pt-[100px] lg:pt-[50px]" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 h-auto lg:h-screen">
          {/* ✅ Image Section */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]
              rounded-full border-4 border-purple-500 overflow-hidden shadow-xl"
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* ✅ Text Section */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="h2 text-accent text-lg font-bold lg:text-[50px] md:text-xl">
              About Me
            </h2>
            <h3 className="h3 mb-3 text-md md:text-lg">
              I'm a Freelance Front-end Developer with over 2 years of
              experience.
            </h3>
            <p className="mb-4 text-gray-300 text-sm md:text-base">
              🚀 I specialize in **modern, responsive, and high-performance web
              applications** 🎨 Passionate about **UI/UX design and clean code
              architecture** 🛠️ Skilled in **React, Tailwind CSS, JavaScript,
              and Firebase**
            </p>

            {/* ✅ Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10 mb-6">
              <div className="text-center">
                <div className="text-[30px] font-tertiary text-gradient mb-1">
                  <CountUp start={0} end={2} duration={3} />+
                </div>
                <div className="font-primary text-xs tracking-[1px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-[30px] font-tertiary text-gradient mb-1">
                  <CountUp start={0} end={15} duration={3} />+
                </div>
                <div className="font-primary text-xs tracking-[1px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-[30px] font-tertiary text-gradient mb-1">
                  <CountUp start={0} end={10} duration={3} />+
                </div>
                <div className="font-primary text-xs tracking-[1px]">
                  Happy <br /> Clients
                </div>
              </div>
            </div>

            {/* ✅ Buttons */}
            <div className="flex gap-x-4 justify-center lg:justify-start items-center">
              <a href="#contact">
                <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 btn btn-sm text-white text-sm sm:text-base md:text-lg font-semibold">
                  Contact me
                </button>
              </a>
              <a
                href="/Alishba Fahim.pdf"
                download="Alishba Fahim.pdf"
                className="text-gradient btn-link text-sm md:text-base"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
