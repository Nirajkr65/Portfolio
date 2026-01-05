import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets"; // We'll use text for logo if image missing

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-500`}
    >
      <div className={`w-full flex justify-between items-center transition-all duration-500 ${scrolled ? "glass-morphism-nav floating-nav-container py-1.5 px-5" : "mx-auto max-w-7xl"}`}>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex items-center gap-2 group">
            <span className='w-1 h-5 bg-[#915EFF] rounded-full group-hover:h-6 transition-all duration-300' />
            <p className='text-white text-[16px] font-black cursor-pointer flex items-center'>
                Niraj &nbsp;
                <span className={`sm:block hidden font-medium text-[12px] opacity-60 transition-opacity duration-300 ${scrolled ? "w-0 overflow-hidden" : ""}`}>
                    | &nbsp; 
                    <span className="text-white-100">Full Stack Developer</span>
                </span>
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-4">
            <ul className='list-none flex flex-row gap-1'>
            {navLinks.filter(nav => nav.id !== 'contact').map((nav) => (
                <li
                key={nav.id}
                className={`${
                    active === nav.title ? "text-white" : "text-white-100/60"
                } hover:text-white px-3 py-1 rounded-full text-[13px] font-bold cursor-pointer transition-all duration-300 relative group flex items-center gap-2 active:scale-95`}
                onClick={() => setActive(nav.title)}
                >
                <span className="text-[14px] group-hover:scale-110 transition-transform duration-300">{nav.icon}</span>
                <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
            </ul>

            <a 
                href="#contact"
                className="text-white border border-[#915EFF]/50 px-4 py-1.5 rounded-full font-bold text-[12px] hover:bg-[#915EFF]/10 hover:border-[#915EFF] hover:scale-105 transition-all duration-300 shadow-xl shadow-[#915EFF]/10 active:scale-95 whitespace-nowrap flex items-center gap-2 ml-1"
            >
                <span>✉️</span>
                Contact me
            </a>
        </div>

        {/* Tablet/Smaller Links */}
        <ul className='list-none hidden sm:flex lg:hidden flex-row gap-3'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white font-bold" : "text-white-100/60"
              } hover:text-white px-2.5 py-1 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-300 flex items-center gap-2`}
              onClick={() => setActive(nav.title)}
            >
              <span className="text-[14px]">{nav.icon}</span>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-[28px] h-[28px] cursor-pointer flex items-center justify-center text-white'
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </div>

          <AnimatePresence>
            {toggle && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    className='p-8 bg-black/90 backdrop-blur-2xl absolute top-16 right-0 mx-4 my-2 min-w-[240px] z-10 rounded-3xl border border-white/10 shadow-2xl overflow-hidden'
                >
                    {/* Decorative background for mobile menu */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#915EFF]/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

                    <ul className='list-none flex justify-end items-start flex-1 flex-col gap-6 relative z-10'>
                    {navLinks.map((nav) => (
                        <li
                        key={nav.id}
                        className={`font-poppins font-bold cursor-pointer text-[20px] w-full transition-all duration-300 flex items-center gap-3 ${
                            active === nav.title ? "text-white translate-x-3" : "text-white-100/50"
                        } hover:translate-x-3 hover:text-white`}
                        onClick={() => {
                            setToggle(!toggle);
                            setActive(nav.title);
                        }}
                        >
                        <span className="text-[24px]">{nav.icon}</span>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    </ul>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
