import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // ✅ form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  // ✅ handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ handle submit → Gmail
  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `
      mailto:shifankichu100@gmail.com
      ?subject=New Contact Message from ${formData.name}
      &body=
      Name: ${formData.name}%0D%0A
      Email: ${formData.email}%0D%0A
      Website: ${formData.website}%0D%0A%0D%0A
      Message:%0D%0A${formData.message}
    `;

    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="px-5 my-8 lg:my-16 lg:px-28"
      id="contact"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl text-center lg:text-4xl"
      >
        Contact <span className="font-extrabold">Me!</span>
      </motion.h2>

      <div className="flex flex-col items-center justify-between mt-8 lg:mt-16 lg:flex-row">
        {/* FORM */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[40%]"
        >
          <form
            className="w-full space-y-3 lg:space-y-5"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 text-sm border-2 border-black rounded"
              type="text"
              placeholder="Your name"
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 text-sm border-2 border-black rounded"
              type="email"
              placeholder="Email"
              required
            />

            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-5 py-3 text-sm border-2 border-black rounded"
              type="text"
              placeholder="Your website (If exists)"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 px-5 py-3 text-sm border-2 border-black rounded resize-none"
              placeholder="How can I help?"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="flex items-center justify-center px-4 py-3 font-medium text-white bg-black rounded hover:shadow-lg"
            >
              Get In Touch
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="mt-5 space-y-1 text-2xl font-extrabold lg:text-5xl">
            <h2>
              Let's{" "}
              <span
                className="text-white"
                style={{ WebkitTextStroke: "1px black" }}
              >
                talk
              </span>
            </h2>
            <h2>Something special</h2>
          </div>

          <p className="text-[#71717A] mt-4">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly experiences.
          </p>

          <div className="flex flex-col gap-3 mt-6 font-semibold">
            <a
              href="mailto:shifankichu100@gmail.com"
              className="flex items-center gap-2"
            >
              <IoMdMail /> shifankichu100@gmail.com
            </a>

            <a href="tel:1234567890" className="flex items-center gap-2">
              <FaPhone /> 1234567890
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
  