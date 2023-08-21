"use client";

import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import Avatar from "react-avatar";
import "@/app/globals.css";
import { useBoardStore } from "@/store/BoardStore";
// import 'cross-fetch/polyfill';
const Header = () => {
  const [setSearchString] = useBoardStore((state) => [state.setSearchString]);
  const [searchString] = useBoardStore((state) => [state.searchString]);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center p-3 bg-gray-600/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md blur-3xl opacity-50 -z-50">
          {" "}
        </div>
        <div className="Logo w-50 sm:w-70 pb-6 md:pb-0 object-contain flex flex-row text-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 109 40"
            className=" h-12 w-auto ml-3"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
              fill="#2563EB"
            ></path>
          </svg>
        </div>
        <div className="flex items-center space-x-4 flex-1 justify-end w-full">
          <form className="flex item-center space-x-4 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-7 h-7 text-gray-600 mt-1" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none p-1"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          <Avatar name="Nikhil Mishra" round size="50" color="#2563EB" />
        </div>
      </div>

      <div className="flex items-center justify-center px-3 md:py-4 ">
        <p className="flex items-center text-sm font-medium shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#333] p-3 my-2">
          <UserCircleIcon
            className={`h-10 w-10 mt-1 mr-3 transition delay-1000 animate-spin text-[#0055d1] `}
          />
          Hello Nikhil, Please complete your remaining inprogress task as soon
          as possible
        </p>
      </div>
    </div>
  );
};

export default Header;
