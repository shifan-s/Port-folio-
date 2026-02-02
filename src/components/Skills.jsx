import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={46} /> },
    { id: 2, name: "React", icon: <FaReact size={46} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={46} /> },
    { id: 4, name: "Python", icon: <FaPython size={46} /> },
    { id: 5, name: "MongoDB", icon: <FaDatabase size={46} /> },
    { id: 6, name: "Java", icon: <FaJava size={46} /> },
    { id: 7, name: "PostgreSQL", icon: <BiLogoPostgresql size={46} /> },
    { id: 8, name: "Next.js", icon: <RiNextjsFill size={46} /> },
    { id: 9, name: "Tailwind CSS", icon: <RiTailwindCssFill size={46} /> },
    { id: 10, name: "Figma", icon: <CgFigma size={46} /> },
  ]);

  return (
    <section className="mt-10 lg:mt-24" id="skills">
      {/* ================= SKILLS ================= */}
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-3xl font-semibold tracking-tight text-center lg:text-5xl"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <div className="grid max-w-6xl grid-cols-2 gap-6 mx-auto mt-10 text-base font-medium place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:mt-16 gap-y-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="flex flex-col items-center justify-center gap-4 p-4 transition-all bg-white border border-black rounded-xl h-36 w-36 lg:h-44 lg:w-44 hover:bg-black hover:text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: skill.id * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
            >
              {skill.icon}
              <p className="text-sm tracking-wide lg:text-base">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= JOURNEY ================= */}
      <div className="w-full py-12 mt-16 bg-black lg:py-24">
        <motion.h2
          className="text-3xl font-semibold tracking-tight text-center text-white lg:text-5xl"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Journey</span>
        </motion.h2>

        <motion.div
          className="max-w-3xl px-6 mx-auto mt-10 text-center lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#D4D4D8] text-sm leading-relaxed lg:text-base lg:leading-8">
            I am a <span className="font-semibold text-white">fresher</span> with
            a strong passion for building modern web applications. I focus on
            writing clean code, creating responsive layouts, and delivering
            smooth user experiences.
          </p>

          <p className="mt-5 text-[#D4D4D8] text-sm leading-relaxed lg:text-base lg:leading-8">
            I am actively looking for opportunities where I can collaborate with
            experienced developers, contribute to meaningful projects, and grow
            as a full-stack developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
