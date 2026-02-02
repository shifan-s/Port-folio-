
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex flex-col-reverse items-center justify-between px-5 py-10 lg:px-28 lg:flex-row">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="flex flex-col gap-2 mt-8 text-2xl lg:text-5xl lg:mt-0 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, <TypeAnimation
                sequence={[
                  'I am Muhammed Shifan',
                  1000,
                  // 'I am a Web Developer',
                  // 1000,
                  // 'I am a UI/UX Designer',
                  // 1000,
                ]}
                speed={10}
                style={{ fontWeight:600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Fullstack</span>{" "}
              <span
                className="font-extrabold text-white"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">India.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about technology, I specialize in Web Development and Web Designing. I’m focused on building innovative solutions and continuously expanding my skills. My goal is to grow as a developer and contribute to impactful projects in the tech industry.
          </motion.p>

          <motion.div
            className="flex items-center mt-10 gap-x-5 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="w-full h-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
