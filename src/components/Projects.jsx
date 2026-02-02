
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";


import EcommerceImg from "../assets/E-commm.png";
import PortfolioImg from "../assets/port.png";

const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    description:
      "A fully responsive and feature-rich e-commerce website built with modern web technologies.",
    image: EcommerceImg,
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website showcasing my work and skills also use motion.",
    image: PortfolioImg,
    link: "#",
  },
];

export default function Projects() {
  return (
    <div
      className="px-5 py-8 my-8 bg-black lg:px-28 lg:py-16 lg:my-16"
      id="projects"
    >
      <h2 className="text-2xl text-center text-white lg:text-4xl">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="pb-3 mt-8 space-y-8 lg:mt-16 lg:space-y-16 lg:pb-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex items-center justify-between flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="w-full overflow-hidden rounded-2xl lg:w-[500px]">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 lg:w-1/2 lg:space-y-6">
              <h2 className="mt-5 text-3xl font-extrabold text-white lg:mt-0 lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>

              <p className="text-xl font-bold text-white lg:text-3xl">
                {project.title}
              </p>

              <p className="text-sm font-light text-[#71717A] lg:text-base">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white"
              >
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
