"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import userLogo from "@/assets/user.png";
import Image from "next/image";
import { Button } from "@heroui/react";

const Navbar = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="container mx-auto px-5 mt-5">
      <div className="flex justify-between items-center">
        
        <div className="text-xl font-bold"></div>
        <div className="hidden md:flex space-x-6 text-[#706F6F] text-[18px] items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/career">Career</Link>
        </div>
        <div className="hidden md:flex space-x-3 items-center">
          <Image src={userLogo} alt="userLogo" width={40} height={40} />
          <Button className="bg-[#403F3F] text-white font-semibold py-2 px-6 rounded-[8px]">
            Login
          </Button>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (<FaRegWindowClose />) : (<GiHamburgerMenu />)}
        </button>
      </div>

      <div
        className={`md:hidden mt-4 bg-[#f3f3f3] p-4 rounded-xl space-y-4 transition-all duration-300 ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <Link href="/" className="block py-2" onClick={handleClose}>
          Home
        </Link>
        <Link href="/about" className="block py-2" onClick={handleClose}>
          About
        </Link>
        <Link href="/career" className="block py-2" onClick={handleClose}>
          Career
        </Link>

        <div className="flex items-center space-x-3 pt-3 border-t">
          <Image src={userLogo} alt="userLogo" width={35} height={35} />
          <Button className="bg-[#403F3F] text-white px-4 py-2 rounded-[8px] w-full">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;