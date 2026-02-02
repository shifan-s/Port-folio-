import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='px-5 my-8 lg:my-16 lg:px-28'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl text-center lg:text-4xl'
      >
        Contact <span className='font-extrabold'>Me!</span>
      </motion.h2>

      <div className='flex flex-col items-center justify-between mt-8 lg:mt-16 lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form className='w-full space-y-3 lg:space-y-5'>
            <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="text" placeholder='Your name' required />
            <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="email" placeholder='Email' required />
            <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="text" placeholder='Your website (If exists)' />
            <textarea className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A]  rounded text-sm w-full' placeholder='How can I help?*'></textarea>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex flex-col justify-between gap-3 lg:gap-5 lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                className='flex items-center justify-center px-3 py-2 font-medium text-white bg-black rounded w-fit lg:w-auto lg:flex-1 hover:shadow-lg gap-x-3'
              >
                Get In Touch
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                {[BiLogoGmail, IoLogoLinkedin, IoLogoTwitter, BsGithub].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="p-2 bg-white border-2 border-black rounded lg:p-3"
                    whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='mt-5 space-y-1 text-2xl font-extrabold lg:text-5xl lg:mt-0 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>

          <div className='flex flex-col gap-2 mt-6 text-sm font-semibold lg:text-xl lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="mailto:Youremail@gmail.com"
            >
              <span className='p-1 transition-all border-2 border-transparent rounded-full group-hover:border-black'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              shifankichu100@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="tele:1234567890"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              1234567890
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
