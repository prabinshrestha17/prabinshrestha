import EmailIcon from "@/components/icons/Email";
import FacebookIcon from "@/components/icons/Facebook";
import GithubIcon from "@/components/icons/Github";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedinIcon from "@/components/icons/Linkedin";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-neutral-900 border-t border-neutral-800 pt-16 pb-8 px-4 overflow-hidden">
      {/* Spotlight Effect */}
      <div
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-purple-500/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* About Section */}
        <div className="space-y-4">
          <Link
            href={"/"}
            className="text-xl flex items-center justify-start gap-2 font-semibold text-white"
          >
            <Logo />
            Prabin Shrestha
          </Link>
          <p className="text-neutral-400 max-w-xs">
            A passionate Full Stack Developer creating modern and responsive web
            applications.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="font-semibold text-neutral-200 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-neutral-400 hover:text-purple-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-neutral-400 hover:text-purple-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-neutral-400 hover:text-purple-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-neutral-400 hover:text-purple-400 transition-colors"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h4 className="font-semibold text-neutral-200 mb-4">
            Connect With Me
          </h4>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              aria-label="Github"
              className="text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:prabin.shrestha@example.com"
              aria-label="Email"
              className="text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <EmailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm relative z-10">
        <p>
          &copy; {new Date().getFullYear()} Prabin Shrestha. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
