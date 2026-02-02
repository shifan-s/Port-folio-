import  { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-white p-5 transition-shadow duration-300 ${hasShadow ? "shadow-md" : "shadow-none"
        }`}
    >
      <div className="container flex items-center justify-between mx-auto">

        <ul className="items-center hidden font-semibold lg:flex gap-x-7">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group"
              whileHover={{ scale: 1.1 }}
            >
              <button onClick={() => scrollToSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href=""
          className="relative hidden px-4 py-2 font-medium lg:inline-block group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <button className="group">
  <a
    href="/resume-image.png"
    download
    className="relative flex items-center text-black gap-x-3 group-hover:text-white"
  >
    Resume <TbDownload size={16} />
  </a>
</button>

        </motion.a>

        <motion.button
          className="text-2xl lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full bg-white shadow lg:hidden"
          >
            <button
              className="absolute text-2xl top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-start h-full ml-16 font-semibold mt-28 gap-y-6">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li
                  key={section}
                  className="border-b"
                  whileHover={{ scale: 1.1 }}
                >
                  <button onClick={() => scrollToSection(section)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}
              <motion.a
                href=""
                className="relative inline-block px-4 py-2 font-semibold group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative flex items-center text-black group-hover:text-white gap-x-3">
                  Resume <TbDownload size={16} />
                </span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
