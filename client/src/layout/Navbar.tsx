"use client";
import { Menu, X } from "lucide-react";
import EmailIcon from "@/components/icons/Email";
import FacebookIcon from "@/components/icons/Facebook";
import GithubIcon from "@/components/icons/Github";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedinIcon from "@/components/icons/Linkedin";
import Logo from "@/components/ui/Logo";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const MENU_HASH = "#menu-open";

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => {
      const newState = !prev;
      if (newState) {
        // Menu is opening: push the hash state
        window.history.pushState(null, "", MENU_HASH);
      } else {
        // Menu is closing: if the hash is present, go back to remove it
        if (window.location.hash === MENU_HASH) {
          window.history.back();
        }
      }
      return newState;
    });
  }, []);

  // Function to handle link clicks: close menu and smooth scroll
  const onHashLinkClick = (href: string) => {
    if (menuOpen) {
      toggleMenu(); // Close the menu if open
    }

    // Smooth scroll logic
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    // This is required to make sure the hash is set in the URL for direct access
    window.history.pushState(null, "", href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleHashChange = () => {
      // Close menu if hash is gone (user pressed back button)
      if (menuOpen && window.location.hash !== MENU_HASH) {
        setMenuOpen(false);
      }
      // Close menu if user navigated to a different section hash
      else if (
        menuOpen &&
        navLinks.some(link => link.href === window.location.hash)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [scrolled, menuOpen]);

  // Clean up history state when component unmounts
  useEffect(() => {
    return () => {
      if (window.location.hash === MENU_HASH) {
        window.history.back();
      }
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "#", label: "Github", icon: GithubIcon },
    { href: "#", label: "LinkedIn", icon: LinkedinIcon },
    { href: "#", label: "Instagram", icon: InstagramIcon },
    { href: "#", label: "Facebook", icon: FacebookIcon },
    {
      href: "mailto:prabin.shrestha@example.com",
      label: "Email",
      icon: EmailIcon,
    },
  ];

  const headerSocialLinks = socialLinks.filter(link => link.label !== "Email");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            {/* Desktop Brand Link with manual scroll handler */}
            <Link
              href="#home"
              scroll={false}
              onClick={() => onHashLinkClick("#home")}
              className="text-white text-xl flex items-center justify-center gap-2 hover:text-purple-300 transition-all duration-300 font-semibold tracking-wider"
            >
              <Logo />
              Prabin Shrestha
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    scroll={false} // Disable Next.js scroll handling
                    onClick={() => onHashLinkClick(link.href)} // Manually handle scroll
                    className="text-neutral-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center ml-6 space-x-4">
              {headerSocialLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-neutral-400 hover:text-purple-400 transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            <div className="flex items-center ml-4 md:hidden">
              <button
                type="button"
                className="text-neutral-300 hover:text-purple-400 focus:outline-none p-1 -m-1"
                aria-label="Toggle menu"
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-900 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-24">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                scroll={false} // Disable Next.js scroll handling
                onClick={() => onHashLinkClick(link.href)} // Manually handle scroll and close menu
                className="text-neutral-300 hover:text-purple-400 py-2 text-lg font-medium capitalize transition-colors border-b border-neutral-800 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-start mt-8 space-x-6 border-t border-neutral-800 pt-6">
            {socialLinks.map(link => (
              <Link
                key={`mobile-${link.label}`}
                href={link.href}
                aria-label={link.label}
                className="text-neutral-400 hover:text-purple-400 transition-colors"
              >
                <link.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
