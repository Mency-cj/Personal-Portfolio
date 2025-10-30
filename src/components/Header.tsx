"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBriefcase, FaComments, FaEnvelopeOpen, FaFileAlt, FaHome, FaUser } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex items-center right-10 top-40 fixed ">
        <ul >
          <Link href="/" prefetch={true}>
          <li className={`w-12 h-12 my-5 rounded-full flex items-center justify-center transition duration-300 ${
            pathname === "/"
              ? "bg-amber-400  "
              : "bg-gray-700 hover:bg-amber-400"
          }`}>
            <FaHome className="text-white text-xl" /></li></Link>
          
          <Link href="/about" prefetch={true}>
          <li className={`w-12 h-12 my-5 rounded-full flex items-center justify-center transition duration-300 ${
            pathname === "/about"
              ? "bg-amber-400"
              : "bg-gray-700 hover:bg-amber-400"
          }`}>
            <FaUser className="text-white text-lg" /></li></Link>
          <Link href="/portfolio" prefetch={true}>
          <li className={`w-12 h-12 my-5 rounded-full flex items-center justify-center transition duration-300 ${
            pathname === "/portfolio"
              ? "bg-amber-400 "
              : "bg-gray-700 hover:bg-amber-400"
          }`}>
            <FaBriefcase className="text-white text-lg" /></li></Link>
          <Link href="/contact" prefetch={true}>
          <li className={`w-12 h-12 my-5 rounded-full flex items-center justify-center transition duration-300 ${
            pathname === "/contact"
              ? "bg-amber-400 "
              : "bg-gray-700 hover:bg-amber-400"
          }`}>
            <FaEnvelopeOpen className="text-white text-lg" /></li></Link>
          <Link href="/blog" prefetch={true}>
          <li className={`w-12 h-12 my-5 rounded-full flex items-center justify-center transition duration-300 ${
            pathname === "/blog"
              ? "bg-amber-400 "
              : "bg-gray-700 hover:bg-amber-400"
          }`}>
            <FaComments className="text-white text-[21px]"/></li></Link>
          
        </ul>
      </div>
    </>
  );
}
