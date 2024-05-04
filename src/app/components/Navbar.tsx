"use client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuStyle() {
    let menuStyles = [];
    if (isOpen) {
      menuStyles = [
        "flex",
        "absolute",
        "top-[60px]",
        "bg-blue-200",
        "w-full",
        "p-4",
        "left-0",
        "gap-10",
        "flex-col",
      ];
    } else {
      menuStyles.push("hidden", "md:flex");
    }
    return menuStyles.join(" ");
  }

  return (
    <nav className="gap-8 bg-blue-600 text-white font-semibold p-4 sm:p-6 md:flex md:justify-center md:items-center">
      <div className="container mx-auto items-center flex justify-between">
        <Link href="/" className="text-white font-bold text-2xl">
          Rampop
        </Link>
        <div className={handleMenuStyle()}>
          <Link href={"/"} className="mx-2 hover:text-gray-400">
            Home
          </Link>
          <Link href={""} className="mx-2 hover:text-gray-400">
            About
          </Link>
          <Link href={""} className="mx-2 hover:text-gray-400">
            Contact
          </Link>
          <Link href={""} className="mx-2 hover:text-gray-400">
            Login
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          {isOpen ? ( // Display cancel icon if isOpen is true
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
