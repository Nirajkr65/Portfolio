import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5 flex-1'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{description}</p>
        </div>

        <div className='mt-8 flex gap-3'>
          {live_link && (
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              className='bg-green-500 text-white flex items-center gap-2 px-6 py-2 rounded-xl text-[14px] font-bold shadow-md hover:bg-green-600 transition-all duration-300'
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4"
              >
                <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L10.53 14.53a.75.75 0 1 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
              </svg>
              Live Demo
            </a>
          )}
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-[#FFA07A] text-[#1D1D1D] flex items-center gap-2 px-6 py-2 rounded-xl text-[14px] font-bold shadow-md hover:bg-[#ff8c69] transition-all duration-300'
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="github"
              className="w-4 h-4"
            />
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
