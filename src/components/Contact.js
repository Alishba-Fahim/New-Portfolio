import { motion } from "framer-motion";
import React from "react";
import Swal from "sweetalert2"; 
import contactGif from "../assets/contact.gif.gif";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "75b53e4f-360f-496c-8a40-37b430c7facd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success! 🎉",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonText: "OK",
          timer: 3000,
          timerProgressBar: true,
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Oops! ❌",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Network Error 🌐",
        text: "Please check your connection and try again.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section id="contact" className="section text-white flex justify-center items-center min-h-screen relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: -40 }} 
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl w-full p-6 bg-[#1a0730] rounded-xl shadow-xl relative z-10 flex flex-col md:flex-row items-center"
      >
        {/* Left Side - GIF/Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img 
            src={contactGif} 
            alt="Animated Contact GIF" 
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>
        
        {/* Right Side - Form with Emojis */}
        <div className="w-full md:w-1/2 p-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
            className="h2 text-gradient text-center text-lg"
          >
            🚀 Let's work together! 🤝
          </motion.h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              type="text"
              placeholder="👤 Your name"
              name="name"
              required
              className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-sm"
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              type="email"
              placeholder="📧 Your email"
              required
              name="email"
              className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-sm"
            />
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              placeholder="💬 Your message"
              rows="3"
              name="message"
              required
              className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white text-sm"
            ></motion.textarea>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              type="submit"
              className="btn btn-sm w-full"
            >
              📩 Send message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
  