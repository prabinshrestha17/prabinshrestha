"use client";

import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navbar from "@/layout/Navbar";
import React, { useEffect, useState } from "react";

const page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 text-white overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.1), transparent 80%)`,
        }}
      />
      <Navbar />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};

export default page;
