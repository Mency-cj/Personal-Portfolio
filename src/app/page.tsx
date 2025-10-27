"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
            <h1 className=" text-center text-3xl">I'm a Developer</h1>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              type="submit"
              className="flex items-center gap-3 hover:bg-yellow-400 border-amber-400 border-2 font-semibold px-9 py-4 rounded-full transition shadow-md"
            >
              More About Me
              <FaArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
