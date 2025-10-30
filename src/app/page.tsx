"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-36  ">
        {/* <div>
          <img src="/free-nature-images.jpg" alt="free nature images" width={600} height={400} />
        </div> */}
        <div>
          <div className="pt-28 pb-10">
            <h1 className="font-semibold text-6xl pb-8 text-amber-400">
              LITTLE MENCY
            </h1>
            
            <h1 className=" text-center text-3xl">I'm a <TypeAnimation
              sequence={[
                "Developer",
                3000,
                "Designer",
                3000,
                "Innovator",
                3000,
              ]}
              speed={40}
              deletionSpeed={30}
              wrapper="span"
              repeat={Infinity}
              className="inline-block transition-opacity duration-400 ease-in-out text-[32px] font-semibold text-amber-400"
            /></h1>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="group relative inline-flex h-[calc(48px+6px)] items-center justify-center rounded-full border-[2px] border-amber-400 bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
              <span className="z-10 text-[18px] font-semibold px-3">
                More About Me
              </span>
              <div className="absolute right-0 inline-flex h-13 w-13 items-center justify-end rounded-full bg-amber-400 transition-[width] duration-400 ease-in-out group-hover:w-[calc(101%-1px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <FaArrowRight className="text-[20px]" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
