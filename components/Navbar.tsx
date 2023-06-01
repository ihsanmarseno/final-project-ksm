"use client";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="fixed bg-white z-10 top-0 left-0 right-0 p-8">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center space-x-8">
          <Link href={"/"} className="font-bold text-4xl">
            Shortly
          </Link>
          <div className="hidden sm:flex">
            <ul className="hidden sm:flex space-x-4">
              <li className="">
                <Link href={"#"} className="hover:font-bold">
                  Features
                </Link>
              </li>
              <li className="">
                <Link href={"#"} className="hover:font-bold">
                  Pricing
                </Link>
              </li>
              <li className="">
                <Link href={"#"} className="hover:font-bold">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex space-x-4 items-center">
            <li className="">
              <Link href={"#"} className="hover:font-bold">
                Login
              </Link>
            </li>
            <li className="bg-teal-400 text-white px-4 py-2 rounded-full hover:bg-teal-200">
              <Link href={"#"}>Sign Up</Link>
            </li>
          </ul>
        </div>

        <div className="sm:hidden">
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setToggle(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 border bg-violet-950 text-white font-bold rounded-2xl p-4 w-5/6">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-between items-center text-center space-y-8 p-6 divide-y divide-white/30 w-full">
                    <ul className="mt-5 space-y-4">
                      <li className="">
                        <Link href={"#"}>Features</Link>
                      </li>
                      <li className="">
                        <Link href={"#"}>Pricing</Link>
                      </li>
                      <li className="">
                        <Link href={"#"}>Resources</Link>
                      </li>
                    </ul>

                    <ul className="space-y-4 w-full pt-6">
                      <li className="">
                        <Link href={"#"}>Login</Link>
                      </li>
                      <li className="bg-teal-400 text-white md:py-2 rounded-full w-full py-3 cursor-pointer">
                        <Link href={"#"}>Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
