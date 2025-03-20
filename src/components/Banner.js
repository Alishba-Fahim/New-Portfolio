import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/avatar.png";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

// ✅ Animation Variants
const fadeIn = (direction = "up", delay = 0.3) => {
  return {
    hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } },
  };
};

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center justify-center h-screen px-6 lg:px-16  pt-10 lg:pt-0 lg:pb-14"
      id="home"
    >
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-y-8 lg:gap-x-12">
        {/* Left - Text */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          {/* ✅ Motion.h1 fixed */}
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[32px] sm:text-[40px] md:text-[50px] leading-[0.8] lg:text-[70px] font-bold leading-tight"
          >
            ALISHBA <span className="text-accent">FAHIM</span>
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] font-semibold uppercase"
          >
            I am a{" "}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Tailwind CSS Expert",
                2000,
                "Passionate Coder",
                2000,
              ]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md mx-auto lg:mx-0"
          >
            I love building interactive and responsive websites that provide a
            great user experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex gap-5 items-center mt-4 justify-center lg:justify-start"
          >
            <a href="/Alishba Fahim.pdf" download="Alishba Fahim.pdf" >
              <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 btn btn-sm text-white text-sm sm:text-base md:text-lg font-semibold">
              📄 Download CV       
              </button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex gap-6 text-[18px] sm:text-[22px] md:text-[24px] mt-4 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/Alishba-Fahim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alishba-fahim18/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:alishbafahim18@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="relative flex items-center justify-center"
        >
          <div className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[300px] rounded-full border-[5px] border-transparent bg-gradient-to-r from-pink-500 to-purple-500 p-[4px]">
            <img
              src={Image}
              className=" w-full h-full rounded-full object-cover"
              alt="profile"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
