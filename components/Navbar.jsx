"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at 90% 5%)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    opened: {
      clipPath: "circle(150% at 90% 5%)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 },
    },
  };

  const navItems = ["home", "events", "clubs", "connect"];

  const scrollToSection = (id) => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      return true;
    }
    return false;
  };

  if (pathname !== "/") {
    router.push("/");
    // Repeatedly check until section appears (max 2 seconds)
    const interval = setInterval(() => {
      if (scrollTo(id)) clearInterval(interval);
    }, 200);
    setTimeout(() => clearInterval(interval), 2000);
  } else {
    scrollTo(id);
  }

  setIsOpen(false);
};


  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-6 px-4 lg:px-20 text-white z-[100] border-b-[0.3px] border-[#e99b63] bg-black">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 z-50"
      >
        <img
          src="/WebAssets/logo.png"
          alt="Logo"
          className="h-8 md:h-12 w-auto object-contain"
        />
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-light m-0 tracking-tighter">
          Tech Samaroh
        </h1>
      </motion.div>

      {/* Desktop Nav */}
      <motion.nav
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex items-center gap-12 ml-auto"
      >
        {navItems.map((item) => (
          <motion.div key={item} variants={linkVariants}>
            <button
              onClick={() => scrollToSection(item)}
              className="relative  tracking-[0.2em] transition-colors hover:text-[#e99b63] group text-xl uppercase cursor-pointer "
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e99b63] transition-all duration-300 group-hover:w-full" />
            </button>
          </motion.div>
        ))}
      </motion.nav>

      {/* Mobile Toggle */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="md:hidden text-4xl p-2 z-[60] flex items-center justify-center focus:outline-none"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Menu Icon */}
          <motion.i
            className="bx bx-menu absolute cursor-pointer"
            animate={{
              opacity: isOpen ? 0 : 1,
              rotate: isOpen ? 90 : 0,
              scale: isOpen ? 0.8 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            style={{
              color: "#ffffff",
              transformOrigin: "center",
              textShadow: "0 0 6px rgba(255,255,255,0.6)",
            }}
          />

          {/* Cross Icon */}
          <motion.i
            className="bx bx-x absolute cursor-pointer"
            animate={{
              opacity: isOpen ? 1 : 0,
              rotate: isOpen ? 0 : -90,
              scale: isOpen ? 1 : 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            style={{
              color: "#e99b63",
              transformOrigin: "center",
              textShadow: "0 0 8px rgba(233,155,99,0.8)",
            }}
          />
        </div>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 z-[40] bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col gap-8 items-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-4xl cursor-pointer tracking-[0.3em] font-light hover:text-[#e99b63] transition-colors uppercase"
                  >
                    {item}
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* ✅ Footer with Instagram icon only */}
            <motion.footer
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-8 text-center text-sm text-gray-400"
            >
              <p>© {new Date().getFullYear()} Tech Samarooh. All rights reserved.</p>
              <div className="flex justify-center mt-3 text-2xl">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e99b63] transition-colors"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;