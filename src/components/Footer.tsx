"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/atchyutn", icon: "/github.svg" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/atchyutn",
    icon: "/linkedin.svg",
  },
  { name: "Email", url: "mailto:email@atchyutn.com", icon: "/mail.svg" },
  {
    name: "WhatsApp",
    url: "https://wa.me/918143339495",
    icon: "/whatsapp.svg",
  },
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
              Let's get in touch.
            </h2>
            <p className="text-gray-300 mb-6">
              My inbox is always open. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Me
            </Link>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/user.svg" alt="Name" width={24} height={24} />
              <span>Atchyut Nagabhairava</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/phone.svg" alt="Phone" width={24} height={24} />
              <span>+91 8498894886</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/mail.svg" alt="Email" width={24} height={24} />
              <a
                href="mailto:email@atchyutn.com"
                className="hover:text-blue-400 transition-colors"
              >
                email@atchyutn.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              <span>+91 8143339495 (Business)</span>
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-gray-700 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Atchyut Nagabhairava. All rights
            reserved.
          </p>
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
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
