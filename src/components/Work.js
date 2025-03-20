import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react"; 

import Img1 from "../assets/amazon website..png";
import Img2 from "../assets/Mackbook landing page...png";
import Img3 from "../assets/assistant..png";
import Img4 from "../assets/snake game...png";
import Img5 from "../assets/netflix website...png";
import Img6 from "../assets/linkedln website...png";
import Img7 from "../assets/crud operation(firebase).png";
import Img8 from "../assets/myportfolio.png";
import Img9 from "../assets/coffee website.png";

const projects = [
  {
    img: Img1,
    title: "Amazon Website Clone",
    category: "E-commerce UI",
    liveLink: "https://amazon-like-ecommerce.netlify.app/",
    githubLink: "https://github.com/Alishba-Fahim/Amazon-like-e-commerce",
  },
  {
    img: Img5,
    title: "Netflix Website Clone",
    category: "Entertainment UI",
    liveLink: "https://mynetflxapp.netlify.app/",
    githubLink: "https://github.com/Alishba-Fahim/Amazon-like-e-commerce",
  },
  {
    img: Img6,
    title: "LinkedIn Website Clone",
    category: "Social Media UI",
    liveLink: "https://linked-clone-project.netlify.app/",
    githubLink: "https://github.com/Alishba-Fahim/Linkedln-clone",
  },
  {
    img: Img7,
    title: "CRUD App (Firebase)",
    category: "Database & Backend Integration",
    liveLink: "https://firebase-tailwind-crud.netlify.app/",
    githubLink: "https://github.com/Alishba-Fahim/-firebase-tailwind-crud-",
  },
  {
    img: Img2,
    title: "MacBook Landing Page",
    category: "Product Landing UI",
    liveLink: "https://mack-book-pro-16.netlify.app/",
    githubLink: "https://github.com/Alishba-Fahim/Mack-Book-Pro-16",
  },
  {
    img: Img8,
    title: "Portfolio Website",
    category: "Personal Branding",
    liveLink: "https://portfolioweb-app.netlify.app/",
    githubLink: "https://github.com/Alishba-Fahim/My_Portfolio",
  },
  {
    img: Img3,
    title: "AI Assistant Web App",
    category: "Frontend & API Integration",
    liveLink: "https://aivoicepro.netlify.app/",
    githubLink: "https://github.com/Alishba-Fahim/AI-Voice-Assistant-using-JavaScript-",
  },
  {
    img: Img4,
    title: "Classic Snake Game",
    category: "JavaScript Game Development",
    liveLink: "https://snakegame-by-alishba.netlify.app/",
    githubLink: "https://github.com/Alishba-Fahim/Classic-Snake-Game",
  },
  {
    img: Img9,
    title: "Coffee Website UI",
    category: "UI/UX & Animation",
    liveLink: "https://example.com/coffee",
    githubLink: "https://github.com/Alishba-Fahim/Coffee-website",
  },
];

const Work = () => {
  return (
    <motion.section
      id="work"
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mt-10 text-center mb-12">
          <h2 className="text-4xl font-bold text-accent leading-tight">
            My Latest Work
          </h2>
          <p className="max-w-md mx-auto text-gray-400 mt-1">
            Explore my latest UI/UX, front-end, and web development projects.
          </p>
        </div>

        {/* Scrollable Project Gallery */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-gray-800 gap-6 p-1"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] sm:min-w-[330px] md:min-w-[380px] group relative rounded-xl overflow-hidden shadow-lg bg-gray-900"
            >
              {/* Image */}
              <img
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                src={project.img}
                alt={project.title}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Details */}
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-sm uppercase text-gradient tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
              </div>
              {/* Links */}
              <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition"
                  whileHover={{ scale: 1.2 }}
                >
                  <ExternalLink size={24} />
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition"
                  whileHover={{ scale: 1.2 }}
                >
                  <Github size={24} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work;
