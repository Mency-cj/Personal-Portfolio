"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className="md:flex md:justify-center md:pt-36 pt-10">
        <div className="md:hidden">
          <img src="/Photo-1.jpg" alt="free nature images" className="rounded-full w-[240px] h-[240px] border-[4px] border-[#252525] block mx-auto " />
        </div>
        <div>
          <div className="md:pt-28 pb-10 pt-8">
            <h1 className="md:font-bold md:text-6xl text-center text-3xl font-bold pb-8 text-amber-400">
              <span className="text-amber md:hidden">I'M </span>LITTLE MENCY
            </h1>

            <h1 className=" text-center md:text-3xl text-2xl">
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Developer",
                  1000,
                  "Designer",
                  1000,
                  "Innovator",
                  1000,
                ]}
                speed={40}
                deletionSpeed={30}
                wrapper="span"
                repeat={Infinity}
                className="inline-block transition-opacity duration-400 ease-in-out md:text-[32px] text-[29px] font-semibold text-amber-400"
              />
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <Link href={"/about"}>
              <button className="group relative inline-flex h-[calc(48px+6px)] items-center justify-center rounded-full border-[2px] border-amber-400 bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50 cursor-pointer">
                <span className="z-10 text-[18px] font-semibold px-3">
                  More About Me
                </span>

                <div className="absolute right-0 inline-flex h-13 w-13 items-center justify-end rounded-full bg-amber-400 transition-[width] duration-400 ease-in-out group-hover:w-[calc(101%-1px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <FaArrowRight className="text-[20px]" />
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
