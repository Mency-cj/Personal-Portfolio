"use client";
import Link from "next/link";
import { useState } from "react";

export default function PortfolioPage() {
  const [links, setLinks] = useState<string[]>([]);

  const addLink = () => {
    setLinks([...links, "https://github.com/Mency-cj/ZapRide"]);
  };
  return (
    <>
      <div className="px-49">
        <div className="text-center pt-14 pb-24">
          <h1 className="font-light text-lg text-gray-500 pb-6">
            Showcasing some of my work
          </h1>
          <div className="relative">
            <h1 className="font-extrabold text-[56px]">
              MY <span className="text-amber-400">PORTFOLIO</span>
            </h1>
            <span className="absolute left-0 right-0 top-[50%] font-[800] tracking-[.8] text-[110px] transform -translate-y-1/2 text-[hsla(0,0%,100%,0.07)]">
              WORKS
            </span>
          </div>
        </div>
        <div className="mb-20">
          <div className="grid grid-cols-3 gap-15">
            <div className="max-w-sm rounded-3xl overflow-hidden text-white bg-white shadow-lg">
              <div className="p-[4px] rounded-2xl bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% shadow-[0_0_50px_#0b0b0b]/50 m-3 max-w-sm">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 border bg-[#0b0b0b]">
                  <a href="https://github.com/Mency-cj/ZapRide">
                    <img
                      src="/ZapRide.png"
                      alt="ZapRide website image"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </a>
                </article>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-gray-800 mb-9">
                  ZapRide (Ride Booking App)
                </div>
                <p className="text-gray-700 text-base">
                  Developed and deployed a full-stack ride-booking web app with
                  authentication, vehicle management, and seamless interactions
                  between drivers and customers.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Next.js
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  PostgreSQL
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Vercel
                </span>
              </div>
              <div className="flex justify-center py-3 my-2">
                <Link
                  href={"https://github.com/Mency-cj/ZapRide"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 rounded-2xl px-5 py-2 font-bold hover:bg-amber-500 transition-all duration-500 ease-in-out"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="max-w-sm rounded-3xl overflow-hidden text-white bg-white shadow-lg">
              <div className="p-[4px] rounded-2xl bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% shadow-[0_0_50px_#0b0b0b]/50 m-3 max-w-sm">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 border bg-[#0b0b0b]">
                  <a href="https://github.com/Mency-cj/To-do-app">
                    <img
                      src="/TaskFlow.png"
                      alt="TaskFlow website image"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </a>
                </article>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-gray-800 mb-2">
                  TaskFlow (Task Management App)
                </div>
                <p className="text-gray-700 text-base">
                  Developed a dynamic and responsive to-do list web application
                  that allows users to authenticate and manage their personal
                  tasks with an interactive and seamless user experience.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  React
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  MySql
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Vercel
                </span>
              </div>
              <div className="flex justify-center py-3 my-2">
                <Link
                  href={"https://github.com/Mency-cj/To-do-app"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 rounded-2xl px-5 py-2 font-bold  hover:bg-amber-500 transition-all duration-500 ease-in-out"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="max-w-sm rounded-3xl overflow-hidden text-white bg-white shadow-lg">
              <div className="p-[4px] rounded-2xl bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% shadow-[0_0_50px_#0b0b0b]/50 m-3 max-w-sm">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 border bg-[#0b0b0b]">
                  <a href="https://github.com/Mency-cj/Personal-Portfolio">
                    <img
                      src="/portfolio.png"
                      alt="Personal Portfolio website image"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </a>
                </article>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-gray-800 mb-9">
                  Personal Portfolio
                </div>
                <p className="text-gray-700 text-base">
                  Developed a responsive personal portfolio website to showcase
                  projects, skills, and contact information, with a clean,
                  interactive UI and live deployment for recruiters.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Next.js
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Vercel
                </span>
              </div>
              <div className="flex justify-center py-3 my-2">
                <Link
                  href={"https://github.com/Mency-cj/Personal-Portfolio"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 rounded-2xl px-5 py-2 font-bold  hover:bg-amber-500 transition-all duration-500 ease-in-out"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
