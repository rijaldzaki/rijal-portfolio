"use client";
import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Project", href: "project" },
  { name: "Contact", href: "contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop navbar */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-20 bg-white/80 backdrop-blur-xl shadow-lg rounded-xl px-8 py-2 space-x-4 w-max">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={`#${item.href}`}
            onClick={handleScroll(item.href)}
            className={`px-4 py-2 font-montserrat font-semibold rounded-lg transition hover:bg-[#3375CC]/25 ${
              active === item.href ? "text-black" : "text-black"
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          className="fixed top-6 right-6 z-30 bg-white/40 backdrop-blur-xl shadow-lg rounded-xl p-2 transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={25} className="transition-all duration-300 text-black" />
          ) : (
            <Menu size={25} className="transition-all duration-300 text-black" />
          )}
        </button>

        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full z-20 flex items-start justify-end">
            <div className="mt-20 mr-6 bg-white/40 backdrop-blur-xl shadow-xl rounded-xl py-4 px-6 flex flex-col items-start animate-fade-in min-w-[140px]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={handleScroll(item.href)}
                  className={`w-full py-2 text-center text-sm md:text-base font-montserrat font-semibold rounded-lg transition ${
                    active === item.href ? "text-black" : "text-black"
                  } hover:bg-[#3375CC]/25`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fade-in 0.2s ease;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
