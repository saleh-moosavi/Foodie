import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Header() {
  const [isSideBar, SetIsSideBar] = useState(false);
  const handleSideBar = () => {
    SetIsSideBar(!isSideBar);
  };
  return (
    <nav className="flex justify-between px-5 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto py-7 font-semibold border-b-2">
      <h2 className="cursor-pointer hover:scale-110 transition-all duration-300">
        Foodie
      </h2>
      {/* desktop menu */}
      <ul className="justify-center gap-x-10 *:font-semibold hidden md:flex *:cursor-pointer">
        <li>Home</li>
        <li>Recipes</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>About Us</li>
      </ul>
      <div className="gap-x-5 *:w-5 *:h-5 hidden md:flex *:cursor-pointer hover:*:scale-110 *:transition-all *:duration-300">
        <FaFacebook className="hover:text-blue-700" />
        <FaTwitter className="hover:text-sky-400" />
        <FaInstagram className="hover:text-rose-600" />
      </div>

      {/* mobile menu */}
      <article
        className={`fixed inset-0 left-1/2 z-50 bg-white pt-5 shadow-lg md:hidden transition-all duration-300 translate-x-${
          isSideBar ? "0" : "full"
        } `}
      >
        <CgClose
          className="cursor-pointer text-xl ms-5 hover:text-rose-600 hover:rotate-180 transition-all duration-300"
          onClick={handleSideBar}
        />
        <ul className="flex flex-col justify-center gap-x-10 mt-10 *:font-semibold *:p-5 hover:*:border-l-4 hover:*:border-sky-600 hover:*:shadow-md transition-all *:duration-300 *:cursor-pointer">
          <li>Home</li>
          <li>Recipes</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
        <div className="flex gap-x-5 *:w-5 *:h-5 md:hidden mt-7 px-5 *:cursor-pointer hover:*:-translate-y-1 *:transition-all *:duration-300">
          <FaFacebook className="hover:text-blue-700" />
          <FaTwitter className="hover:text-sky-400" />
          <FaInstagram className="hover:text-rose-600" />
        </div>
      </article>

      <BiMenu
        className="text-2xl cursor-pointer hover:scale-110 transition-all duration-300 md:hidden"
        onClick={handleSideBar}
      />
    </nav>
  );
}
