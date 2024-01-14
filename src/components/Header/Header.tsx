'use client';

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);
  const handleLinkClick = () => setToggle(false); // Add this function

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-white">
        TL
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#blog" onClick={handleLinkClick}>
              Blog
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
        <ul className="flex flex-col">
          <li>
            <a href="/#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#blog" onClick={handleLinkClick}>
              Blog
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          
        </ul>
      </nav>

      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
