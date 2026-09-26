"use client";

import Image from "next/image";
import { useState } from "react";

function Navbar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="navbar flex flex-row justify-between items-center bg-white h-[70px] sm:h-[80px] lg:h-[90px] px-4 sm:px-8 lg:px-0">
        <div className="logo">
          <Image
            src="/assets/ChatGPT Image May 11, 2025, 11_21_54 AM 2.png"
            width={46}
            height={44}
            alt="Converso"
            className="w-[34px] h-[32px] sm:w-[40px] sm:h-[38px] lg:w-[46px] lg:h-[44px] ml-0 sm:ml-8 lg:ml-20"
          />
        </div>

        {/* Desktop / Tablet Links */}
        <div className={`hidden sm:flex navbar-right ${className ?? ""}`}>
          {children}
        </div>

        {/* Hamburger Icon - Mobile only */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 mr-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 bg-white ${
          isOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-start gap-4 px-6">{children}</div>
      </div>
    </div>
  );
}

export default Navbar;