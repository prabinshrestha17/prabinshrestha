"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion"; // Import motion and Variants

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  // Add support for Framer Motion props like variants
  variants?: Variants;
  initial?: string;
  animate?: string;
}

// Update BentoCard to use motion.div
const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
  variants,
  initial,
  animate,
}) => (
  <motion.div
    variants={variants}
    initial={initial}
    animate={animate}
    // The rest of the classNames remain the same
    className={`relative w-full h-full rounded-2xl hover:rounded-3xl  bg-neutral-900 border border-neutral-800 p-8 overflow-hidden transition-all duration-300 ease-in-out hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 ${className}`}
  >
    {children}
  </motion.div>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // Delay before the first child starts
      staggerChildren: 0.15, // Delay between each child item
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 // Apply motion to the title
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl relative md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4"
        >
          About Me
        </motion.h2>

        <motion.div // Apply motion to the grid container
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto"
        >
          {/* Main Bio Card */}
          <BentoCard className="md:col-span-2" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              A Passion for Building
            </h3>
            <div className="text-lg text-neutral-300 space-y-4 leading-relaxed">
              <p>
                Hello! I'm Prabin Shrestha, a Full Stack Developer dedicated to
                creating beautiful, functional, and user-centric web
                applications. My journey into code evolved from a simple "Hello
                World" into a full-fledged passion for solving complex problems
                and building amazing things for the web.
              </p>
              <p>
                I specialize in the MERN stack and have a strong command of
                modern frontend technologies like Next.js and Tailwind CSS. I
                thrive on turning ideas into reality, with a keen eye for
                detail.
              </p>
            </div>
          </BentoCard>

          {/* Image Card */}
          <BentoCard
            className="relative overflow-hidden group"
            variants={itemVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Abstract code"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
            />
            <div className="relative z-10 flex flex-col justify-end h-full">
              <h3 className="text-2xl font-semibold text-neutral-100">
                Prabin Shrestha
              </h3>
              <p className="text-purple-400">Full Stack Developer</p>
            </div>
          </BentoCard>

          {/* Philosophy Card */}
          <BentoCard className="group" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">
              From Concept to Code
            </h3>
            <p className="text-neutral-400">
              I believe in a holistic development process, ensuring every line
              of code serves a purpose and contributes to a seamless user
              experience.
            </p>
            <ArrowRight className="w-6 h-6 text-neutral-500 absolute bottom-8 right-8 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-400" />
          </BentoCard>

          {/* Skills Highlight Card */}
          <BentoCard className="md:col-span-2 group" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">
              My Tech Toolbox
            </h3>
            <p className="text-neutral-400 mb-4">
              Leveraging a modern tech stack to build robust and scalable
              applications.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express",
                "Tailwind CSS",
                "TypeScript",
              ].map(skill => (
                <span
                  key={skill}
                  className="bg-neutral-800 text-neutral-300 text-sm font-medium px-3 py-1 rounded-full border cursor-default hover:bg-neutral-700  transition-all duration-300 border-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;