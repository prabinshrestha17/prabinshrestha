"use client";

import React from "react";
import { useTypingAnimation } from "../hooks/useTypingAnimation";
import ExpressIcon from "./icons/Express";
import Mongo from "./icons/Mongo";
import Nextjs from "./icons/Nextjs";
import Postgres from "./icons/Postgres";
import ReactIcon from "./icons/ReactIcon";
import Redis from "./icons/Redis";
import Tailwindcss from "./icons/Tailwindcss";
import Vite from "./icons/Vite";
import { motion } from "framer-motion"; // Corrected Framer Motion import

const icons = [
  { id: 1, component: <Mongo className="h-12 w-12 text-neutral-400" /> },
  { id: 2, component: <ExpressIcon className="h-12 w-12 text-neutral-400" /> },
  { id: 3, component: <ReactIcon className="h-12 w-12 text-neutral-400" /> },
  { id: 4, component: <Postgres className="h-12 w-12 text-neutral-400" /> },
  { id: 5, component: <Redis className="h-12 w-12 text-neutral-400" /> },
  {
    id: 6,
    component: <Tailwindcss className="h-12 w-12 text-neutral-400" />,
  },
  { id: 7, component: <Nextjs className="h-12 w-12 text-neutral-400" /> },
  { id: 8, component: <Vite className="h-12 w-12 text-neutral-400" /> },
];

const Hero: React.FC = () => {
  const typingAnimationPhrases = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Application Developer",
    "Responsive Web Developer",
  ];
  const animatedText = useTypingAnimation(typingAnimationPhrases);

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-auto px-4"
    >
      <section className="max-w-7xl mx-auto flex flex-col items-center text-center py-16">
        <motion.h1 // Framer Motion for H1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2"
        >
          Hello everyone
        </motion.h1>
        <motion.h2 // Framer Motion for H2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold mt-4 text-neutral-300 h-12"
        >
          I'm a <span className="text-purple-400">{animatedText}</span>
          <span
            className="inline-block w-1 h-8 md:h-10 bg-purple-400 animate-pulse ml-1"
            aria-hidden="true"
          ></span>
        </motion.h2>
        <motion.p // Framer Motion for Paragraph
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-lg text-neutral-400 max-w-2xl"
        >
          I build modern, responsive, and scalable web applications using the
          latest technologies. Below are some of the tools I love to work with.
        </motion.p>
      </section>

      <motion.div // Framer Motion for the Icons container
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="w-full max-w-6xl mt-12 mb-20"
      >
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll">
            {icons.map(icon => (
              <li key={icon.id}>{icon.component}</li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll"
            aria-hidden="true"
          >
            {icons.map(icon => (
              <li key={icon.id}>{icon.component}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;