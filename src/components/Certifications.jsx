import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, name, issuer, icon, date, link, buttonText, isAI }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-black/40 backdrop-blur-md p-8 rounded-[2.5rem] border border-white-100/10 shadow-2xl relative group overflow-hidden'
  >
    {/* Decorative Glow */}
    <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl transition-all duration-500 ${
      isAI 
        ? "bg-gradient-to-br from-[#4285F4] via-[#9B72F3] to-[#D96570] opacity-20 group-hover:opacity-40" 
        : "bg-[#915EFF]/10 group-hover:bg-[#915EFF]/20"
    }`} />
    
    <div className="flex flex-col h-full relative z-10">
      <div className='w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center p-3 shadow-inner border border-white-100/10 group-hover:scale-110 group-hover:border-[#915EFF]/50 transition-all duration-300 mb-6'>
        <img
          src={icon}
          alt={issuer}
          className='w-full h-full object-contain'
          onError={(e) => {
            e.target.src = "https://cdn-icons-png.flaticon.com/512/612/612803.png"; // Generic badge fallback
          }}
        />
      </div>

      <div>
        <h3 className='text-white text-[22px] font-black leading-tight mb-2'>{name}</h3>
        <p className='text-[#915EFF] font-bold text-[16px] mb-1'>{issuer}</p>
        <p className='text-white-100/60 text-[14px] font-medium'>{date}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className='mt-8 w-fit flex items-center gap-2 bg-[#915EFF] text-white px-6 py-2 rounded-xl font-bold text-[14px] hover:bg-[#804dee] shadow-lg shadow-[#915EFF]/20 transition-all active:scale-95'
      >
        {buttonText || "Show credentials..."}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M13 2.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V4.56L11.53 10.53a.75.75 0 0 1-1.06-1.06l5.97-5.97h-2.19a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
