import { motion } from "framer-motion";
import { styles } from "../styles";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto flex items-center justify-center overflow-hidden py-20`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#915EFF]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-900/10 rounded-full blur-[150px] animate-float" />

      <div className={`max-w-6xl mx-auto ${styles.paddingX} w-full relative z-10`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="premium-glass rounded-[3.5rem] p-4 sm:p-12 lg:p-16 relative flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16"
        >
            {/* Left Column: Text & Content */}
            <div className='flex-1 flex flex-col items-center sm:items-start'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className='font-black text-white lg:text-[76px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[88px] tracking-tight text-glow-purple whitespace-normal sm:whitespace-nowrap text-center sm:text-left'>
                {personalInfo.name}
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='mt-6 text-white-100/70 text-[18px] max-w-lg leading-[28px] font-medium text-center sm:text-left'
            >
                {personalInfo.description}
            </motion.p>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className='h-[1px] bg-gradient-to-r from-white-100/20 to-transparent my-10 max-w-md' 
            />

            {/* Stats Section */}
            <div className='flex flex-wrap gap-8 sm:gap-20 mb-8 justify-center sm:justify-start w-full'>
                {personalInfo.stats.map((stat, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  key={stat.label} 
                  className='flex flex-col gap-2 items-center sm:items-start'
                >
                    <span className='text-white text-[34px] sm:text-[42px] font-black leading-none drop-shadow-lg'>{stat.value}</span>
                    <span className='text-white-100/40 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold'>
                    {stat.label}
                    </span>
                </motion.div>
                ))}
            </div>

            {/* Actions Section */}
            <div className='flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-4 w-full'>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("#", "_blank")} 
                  className='bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-2xl flex items-center gap-3 font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.1)]'
                >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                <span className='text-[16px] whitespace-nowrap'>Download Resume</span>
                </motion.button>

                <div className='flex items-center gap-4'>
                  {personalInfo.socialLinks.map((social, index) => (
                  <motion.div
                      whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + (index * 0.1), type: "spring", stiffness: 300 }}
                      key={social.name}
                      onClick={() => window.open(social.link, "_blank")}
                      className={`w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex justify-center items-center cursor-pointer transition-all duration-300 border border-white-100/10 shadow-lg group overflow-hidden p-2.5`}
                  >
                      <img 
                          src={social.icon} 
                          alt={social.name} 
                          className='w-full h-full object-contain brightness-90 group-hover:brightness-110 transition-all rounded-lg' 
                      />
                  </motion.div>
                  ))}
                </div>
            </div>
            </div>

            {/* Right Column: Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className='flex-1 flex justify-center lg:justify-end relative'
            >
              <div className='relative w-[180px] h-[180px] sm:w-[260px] sm:h-[260px]'>
                  {/* Multi-layered Glowing Aura */}
                  <div className='absolute -inset-10 bg-[#915EFF]/20 rounded-full blur-[80px] animate-pulse' />
                  <div className='absolute -inset-4 bg-gradient-to-tr from-[#915EFF] via-purple-500 to-blue-400 rounded-full opacity-30 blur-xl animate-pulse delay-700' />
                  
                  <div className='relative w-full h-full rounded-full border-[8px] border-white/5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20'>
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#915EFF]/10 to-transparent z-10 pointer-events-none" /> */}
                  <img 
                      src={personalInfo.profilePic} 
                      alt='profile' 
                      className='w-full h-full object-cover transition-all duration-700 hover:scale-110 contrast-125 brightness-110' 
                  />
                  </div>
              </div>
            </motion.div>
        </motion.div>
      </div>

      <div className='absolute bottom-5 w-full flex justify-center items-center z-20'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary/20 flex justify-center items-start p-2 hover:border-secondary transition-all duration-300 bg-[#050816] z-10'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
