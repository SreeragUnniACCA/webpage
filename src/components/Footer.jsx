import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-rgbGreen text-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
        <p className="mb-6">Feel free to reach out for opportunities or collaborations</p>
        
        <motion.div 
            className="flex justify-center  space-x-4 mb-6"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            {[
              { href: 'https://www.linkedin.com/in/sreeragunniacca/', icon: <FaLinkedin size={40} /> },
              { href: 'https://www.instagram.com/sreerag_u?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: <FaInstagramSquare size={40} /> },
              { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sreeraguacca@gmail.com', icon: <IoMdMail size={40} /> },
              { href: 'https://github.com/SreeragUnniACCA', icon: <FaGithub size={40} /> }
            ].map(({ href, icon }, index) => (
              <a 
                key={index} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-4 border-rgbHex hover:border-Green text-rgbHex hover:rgbHex bg-transparent 
             transition-all duration-300 ease-in-out 
             rounded-lg 
             hover:scale-130 hover:-translate-y-1.5 
             hover:bg-rgbGreen hover:rgbHext 
             hover:shadow-[0_0_25px_#FAC670] inline-block"
              >
                {icon}
              </a>
            ))}
      </motion.div>
        <p className="text-sm opacity-80">© 2025 Sreerag Unni. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;