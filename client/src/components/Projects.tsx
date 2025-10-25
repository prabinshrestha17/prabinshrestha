"use client";
import React, { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = (await import("../data/projects.json")).default;
        setProjects(data);
      } catch (error) {
        console.error("Could not load projects:", error);
      }
    };
    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
          My Projects
        </h2>
        <p className="text-lg text-neutral-400 text-center max-w-2xl mx-auto mt-4 mb-16">
          Here are some of the projects I've worked on, showcasing my skills in
          creating modern and functional web applications.
        </p>

        <div className="relative">
          {projects.length > 0 && (
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{ clickable: true }}
              navigation={false}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper"
            >
              {projects.map(project => (
                <SwiperSlide key={project.id}>
                  <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col justify-end">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent"></div>
                    <div className="relative p-6 z-10 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-neutral-300 text-sm mb-4">
                        {project.description}
                      </p>
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <style jsx global>{`
            .swiper-pagination-bullet-active {
              background-color: #a78bfa !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Projects;
