"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, FileText, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: currentTime,
          title: "Portfolio Contact",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error : any) => {
        console.error("FAILED...", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div id="contact-section" className="min-h-screen bg-[#0b0c10] text-[#e4ded7] px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="w-full flex justify-center items-center mb-12 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] text-[#e4ded7] leading-[0.8] text-center transform scale-y-140 font-sans">
          CONTACT ME
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-20 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="space-y-6 ">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e4ded7] leading-tight font-mono"
              >
                Ready to bring your
                <br />
                <span className="text-[#e4ded7]">vision to life?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#e4ded7] font-mono text-lg sm:text-xl leading-relaxed"
              >
                Let's create something amazing together.
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex lg:flex-col gap-4 sm:flex-row sm:gap-6 justify-center lg:justify-start"
            >
              <motion.a
                href="https://www.linkedin.com/in/nirmeet-parmar-34a148300/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-3 text-[#e4ded7] hover:text-[#e4ded7] transition-colors duration-300 text-base sm:text-lg font-mono"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>

              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-3 text-[#e4ded7] hover:text-[#e4ded7] transition-colors duration-300 text-base sm:text-lg font-mono"
              >
                <FileText size={20} />
                Resume
              </motion.a>

              <motion.a
                href="https://github.com/Nirmeet47"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-3 text-[#e4ded7] hover:text-[#e4ded7] transition-colors duration-300 text-base sm:text-lg font-mono"
              >
                <Github size={20} />
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#13161f] border border-[#242730] rounded-xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 sm:py-4 bg-[#0b0c10] border border-[#2d313d] rounded-lg text-[#e4ded7] placeholder-[#b5afa7] focus:border-[#3d4250] focus:outline-none transition-colors duration-300 font-mono"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 sm:py-4 bg-[#0b0c10] border border-[#2d313d] rounded-lg text-[#e4ded7] placeholder-[#b5afa7] focus:border-[#3d4250] focus:outline-none transition-colors duration-300 font-mono"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Your Message"
                className="w-full px-4 py-3 sm:py-4 bg-[#0b0c10] border border-[#2d313d] rounded-lg text-[#e4ded7] placeholder-[#b5afa7] focus:border-[#3d4250] focus:outline-none transition-colors duration-300 font-mono resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer w-full flex items-center justify-center gap-3 px-6 py-3 sm:py-4 bg-[#e4ded7] rounded-lg text-[#0b0c10] font-mono font-medium text-base sm:text-lg  transition-all duration-300"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
