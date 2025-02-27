import React, { useState } from "react";
import logo from "../assets/fav-icon.png";

const Navbar = () => {
  // Menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Link style State
  const [activeLink, setActiveLink] = useState("#home");

  //   Array of links
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-15 border-b border-gray-100">
      <div className="flex-between contain px-4 sm:px-6 lg:px-8  h-16 md:h-20">
        {/* logo */}
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-400"
        />
        {/* desktop menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <li>
              <a
                href={link.href}
                className={`link ${
                  activeLink === link.href
                    ? "text-blue-600 after:w-full"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveLink((prev) => (prev = link.href))}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* get in touch button */}
        <button className="nav-button">
          <a href="#newsletter">Get in touch</a>
        </button>
        {/* mobile menu */}
      </div>
    </nav>
  );
};

export default Navbar;
