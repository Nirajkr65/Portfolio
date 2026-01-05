import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { codingProfiles } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProfileCard = ({ index, name, icon, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-[#101010] p-8 rounded-[32px] border border-white-100/10 shadow-card flex-1 min-w-[300px] hover:border-white-100/20 transition-all duration-300 group flex flex-col items-center relative z-10'
  >
    <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={`View ${name} profile`} />
    <div className='w-24 h-24 rounded-full bg-[#151515] flex items-center justify-center p-5 shadow-lg border border-white-100/5 group-hover:scale-110 group-hover:bg-[#202020] transition-all duration-300 mb-6'>
      <img
        src={icon}
        alt={name}
        className='w-full h-full object-contain'
      />
    </div>

    <h3 className='text-white text-[24px] font-bold tracking-tight mb-8'>{name}</h3>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className='mt-auto flex items-center gap-2 text-white text-[14px] font-bold hover:text-secondary transition-colors duration-300'
    >
      View Profile
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
  </motion.div>
);

const CodingProfiles = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <div className='flex items-center justify-center gap-4 mb-4'>
           <span className='text-5xl'>🏆</span>
           <h2 className={`${styles.sectionHeadText}`}>Coding Profiles</h2>
        </div>
        <p className={`${styles.sectionSubText} max-w-3xl mx-auto`}>
          My problem-solving journey across top platforms.
        </p>
      </motion.div>

      <div className='mt-14 flex flex-wrap justify-center gap-10'>
        {codingProfiles.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CodingProfiles, "profiles");
