"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/atchyutn" },
  { name: "LinkedIn", url: "https://linkedin.com/in/atchyutn" },
  { name: "Email", url: "mailto:email@atchyutn.com" },
  { name: "WhatsApp", url: "https://wa.me/918143339495" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s get in touch.
            </h2>
            <p className="text-gray-300 mb-6">
              My inbox is always open. Whether you have a question or just want
              to say hi, I&apos;ll try my best to get back to you!
            </p>
            {/* <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Me
            </Link> */}
          </div>
          <div className="space-y-4">
            <div className="text-lg font-bold">Get in Touch</div>
            <div className="text-gray-300">Atchyut Nagabhairava</div>
            <div className="text-gray-300">
              <a
                href="mailto:email@atchyutn.com"
                className="hover:text-blue-400 transition-colors"
              >
                email@atchyutn.com
              </a>
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-gray-700 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            2023 Atchyut Nagabhairava. All rights reserved.
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
