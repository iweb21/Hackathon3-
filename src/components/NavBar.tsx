"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      setCurrentDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
   
<header className="text-gray-400 body-font shadow-lg">
  <div className="container mx-auto flex items-center justify-between p-4">
    {/* Left Section: Current Date and Time */}
    <div className="text-black flex-1">
      <span>{currentDateTime}</span>
    </div>

    {/* Center Section: Navigation Links */}
    <nav className="flex flex-wrap items-center text-black space-x-5">
      <Link
        href={"http://localhost:3000/"}
        className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
      >
        Home
      </Link>
      <Link
        href={"http://localhost:3000/about"}
        className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
      >
        About
      </Link>
      <Link
        href={"http://localhost:3000/blog"}
        className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
      >
        Blog
      </Link>
      <Link
        href={"http://localhost:3000/contact"}
        className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
      >
        Contact
      </Link>
    </nav>

    {/* Right Section: Button */}
    <button className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white transition-colors duration-300 ml-4">
      GitHub
      <FaArrowRightLong className="ml-2" />
    </button>
  </div>
</header>


   );
}