import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { skillCategories } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const SkillCard = ({ category, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-[#101010] p-7 rounded-[28px] border border-white-100/10 shadow-card flex-1 min-w-[280px] max-w-[400px] h-full hover:border-white-100/20 transition-all duration-300'
  >
    <div className='flex items-center gap-4 mb-10'>
      <span className='text-3xl'>{category.icon}</span>
      <h3 className='text-white text-[26px] font-bold tracking-tight'>{category.title}</h3>
    </div>

    <div className='grid grid-cols-3 gap-y-10 gap-x-4 justify-items-center'>
      {category.skills.map((skill) => (
        <div key={skill.name} className='flex flex-col items-center gap-4 group cursor-pointer w-full'>
          <div className='w-20 h-20 rounded-2xl bg-[#151515] flex items-center justify-center p-4 shadow-lg border border-white-100/5 group-hover:scale-110 group-hover:bg-[#202020] transition-all duration-300'>
            <img
              src={skill.icon}
              alt={skill.name}
              className='w-full h-full object-contain'
            />
          </div>
          <p className='text-secondary text-[14px] text-center font-medium group-hover:text-white transition-colors duration-300 truncate w-full px-1'>
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My technical proficiencies
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          My Skills
        </h2>
      </motion.div>

      <div className='mt-14 flex flex-wrap justify-center gap-10 px-0 sm:px-10'>
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} index={index} category={category} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "work");
