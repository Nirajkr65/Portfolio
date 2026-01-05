import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending email
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact me.</h2>
      </motion.div>

      <div
        className={`xl:mt-12 flex justify-center items-center overflow-hidden w-full pb-10`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[1] max-w-3xl bg-black/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white-100/10 shadow-2xl relative'
        >
          {/* Decorative Glow */}
          <div className='absolute -top-10 -right-10 w-40 h-40 bg-[#915EFF]/10 rounded-full blur-[80px]' />
          <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-[80px]' />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-8 relative z-10'
          >
            <div className="flex flex-col sm:flex-row gap-8">
                <label className='flex-1 flex flex-col'>
                    <span className='text-white font-bold mb-4 ml-1'>Full Name</span>
                    <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className='bg-black/20 py-5 px-6 placeholder:text-secondary text-white rounded-2xl outline-none border border-white-100/10 focus:border-[#915EFF]/50 focus:ring-2 focus:ring-[#915EFF]/20 transition-all font-medium text-[16px] shadow-inner'
                    />
                </label>
                <label className='flex-1 flex flex-col'>
                    <span className='text-white font-bold mb-4 ml-1'>Email Address</span>
                    <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className='bg-black/20 py-5 px-6 placeholder:text-secondary text-white rounded-2xl outline-none border border-white-100/10 focus:border-[#915EFF]/50 focus:ring-2 focus:ring-[#915EFF]/20 transition-all font-medium text-[16px] shadow-inner'
                    />
                </label>
            </div>

            <label className='flex flex-col'>
                <span className='text-white font-bold mb-4 ml-1'>Your Message</span>
                <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What do you want to say?'
                className='bg-black/20 py-5 px-6 placeholder:text-secondary text-white rounded-2xl outline-none border border-white-100/10 focus:border-[#915EFF]/50 focus:ring-2 focus:ring-[#915EFF]/20 transition-all font-medium text-[16px] shadow-inner resize-none'
                />
            </label>

            <button
              type='submit'
              className='bg-[#915EFF] py-4 px-10 rounded-2xl outline-none w-full sm:w-fit sm:self-center text-white font-black shadow-lg shadow-[#915EFF]/20 hover:bg-[#804dee] transition-all active:scale-95 flex items-center justify-center gap-3 group'
            >
              {loading ? "Sending..." : "Send Message"}
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
