"use client";

import { DiCss3, DiMysql } from "react-icons/di";
import {
  FaBriefcase,
  FaDownload,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiPrisma } from "react-icons/si";

export default function AboutPage() {
  const skills = [
    { name: "HTML", value: 25, icon: <FaHtml5 /> },
    { name: "CSS", value: 70, icon: <DiCss3 /> },
    { name: "JAVASCRIPT", value: 89, icon: <IoLogoJavascript /> },
    { name: "REACT", value: 66, icon: <FaReact /> },
    { name: "NEXTJS", value: 95, icon: <RiNextjsFill /> },
    { name: "NODE", value: 50, icon: <FaNodeJs /> },
    { name: "EXPRESS", value: 65, icon: <SiExpress /> },
    { name: "MYSQL", value: 45, icon: <DiMysql /> },
    { name: "PRISMA", value: 70, icon: <SiPrisma /> },
  ];
  const education = [
    {
      year: "2020-2024",
      title: "ENGINEERING DEGREE",
      school: "St. Xavier's Catholic College of Engineering",
      description: "COURSE: Computer Science and Engineering",
      percentage: "CGPA: 8.43",
    },
    {
      year: "2019-2020",
      title: "HSC",
      school: "Adline Matric Higher Secondary School",
      description: "COURSE: Bio-Maths",
      percentage: "Percentage: 66%",
    },
  ];
  return (
    <>
      <div className="xl:px-49 px-3">
        <div className="text-center pt-14 lg:pb-24  md:pb-13">
          <h1 className="font-light text-lg text-gray-500 pb-6">
            Get to know me
          </h1>
          <div className="relative">
            <h1 className="font-extrabold md:text-[56px] text-[40px]">
              ABOUT <span className="text-amber-400">ME</span>
            </h1>
            <span className="absolute left-0 right-0 top-[50%] font-[800] tracking-[.8] md:text-[110px] text-[70px] transform -translate-y-1/2 text-[hsla(0,0%,100%,0.07)]">
              RESUME
            </span>
          </div>
        </div>
        <div className="md:px-8 pt-10 pb-20">
          <div className="lg:flex">
            <div className="">
              <img src="/Photo.jpg" alt="" className="rounded-4xl hidden lg:block" />
            </div>
            <div className="hidden md:block lg:hidden pb-9">
              <img src="/Photo-1.jpg" alt="" className="rounded-full w-[240px] h-[240px] border-[4px] border-[#252525] block mx-auto" />
            </div>
            <div className="lg:pl-10 px-3">
              <div>
                <h2 className="text-amber-400 text-2xl font-extralight">
                  Who am I?
                </h2>
                <h6 className="text-3xl font-bold leading-relaxed pb-5">
                  I'm Little Mency, a Full Stack Developer and a Tech
                  Enthusiast.
                </h6>
                <div className="text-justify text-31px">
                  <p className="pb-8 text-neutral-500 font-medium ">
                    Passionate and detail-oriented Full Stack Developer
                    (Fresher) with hands-on experience in building web
                    applications using React, Node.js, Express, and MySQL
                    (Prisma ORM). Proficient in developing responsive user
                    interfaces, RESTful APIs, and managing databases. Completed
                    personal projects such as a user authentication and to-do
                    list app, showcasing strong problem-solving and deployment
                    skills using Railway and Vercel. Eager to contribute to
                    real-world projects, learn new technologies, and grow as a
                    developer in a collaborative environment.
                  </p>
                  <hr className="border-t-2 border-neutral-600" />
                </div>
                <div>
                  <div className="md:flex md:justify-between p-3">
                    <div className="pt-2">
                      <p className="text-neutral-400 font-semibold">
                        <span className="text-gray-100 font-sans font-semibold mr-3">
                          Name:
                        </span>
                        Little Mency
                      </p>
                    </div>
                    <div className="pt-2">
                      <p className="text-neutral-400 font-semibold">
                        <span className="text-gray-100 font-sans font-semibold mr-3">
                          Email:
                        </span>
                        littlecjmency@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="md:flex p-3">
                    <div className="xl:mr-85 lg:mr-67 md:mr-85">
                      <p className="text-neutral-400 font-semibold">
                        <span className="text-gray-100 font-sans font-semibold mr-3">
                          Age:
                        </span>
                        23
                      </p>
                    </div>
                    <div>
                      <p className="text-neutral-400 font-semibold">
                        <span className="text-gray-100 font-sans font-semibold mr-3">
                          From:
                        </span>
                        Tamil Nadu (India)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-3">
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Mency_CV.pdf"
                  >
                    <button className="group relative inline-flex h-[calc(48px+6px)] items-center justify-center rounded-full border-[2px] border-amber-400 bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50 cursor-pointer">
                      <span className="z-10 text-[17px] font-semibold px-1">
                        Download CV
                      </span>
                      <div className="absolute right-0 inline-flex h-13 w-13 items-center justify-end rounded-full bg-amber-400 transition-[width] duration-400 ease-in-out group-hover:w-[calc(101%-1px)]">
                        <div className="mr-3.5 flex items-center justify-center">
                          <FaDownload className="text-[20px]" />
                        </div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-1 mx-auto max-w-lg border-[#252525]" />
        <div className="flex flex-col items-center justify-center text-white py-12">
          <h2 className="text-2xl font-bold mb-12">MY SKILLS</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-36 px-17">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative md:w-30 md:h-30 w-25 h-25">
                  <svg
                    className="w-full h-full rotate-[-90deg]"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-gray-800"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="
                    M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831
                  "
                    />
                    <path
                      className="text-yellow-500 transition-all duration-1000 ease-in-out"
                      strokeDasharray={`${skill.value}, 100`}
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      d="
                    M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831
                  "
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-4xl">
                    {skill.icon}
                  </div>
                </div>

                <p className="text-white mt-2 font-semibold text-md">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-t-1 mx-auto max-w-lg border-[#252525]" />
        <section className=" text-white py-16 lg:px-4 md:px-10">
          <h2 className="text-3xl font-bold text-center mb-12">EDUCATION</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            {/* <div className="space-y-8">
          {experiences.map((item, index) => (
            <div key={index} className="flex items-start gap-4 relative">
              <div className="flex-shrink-0">
                <div className="bg-yellow-500 text-gray-900 w-10 h-10 flex items-center justify-center rounded-full">
                  <FaBriefcase />
                </div>
              </div>
              <div className="flex-1 border-l border-gray-700 pl-6">
                <span className="text-gray-400 text-sm">{item.year}</span>
                <h3 className="font-bold text-lg mt-1">
                  {item.title} <span className="text-gray-400">— {item.company}</span>
                </h3>
                <p className="mt-1 text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div> */}
            {/* Education */}
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="flex items-start gap-4 relative ">
                  {/* Circle icon */}
                  <div className="flex-shrink-0">
                    <div className="bg-yellow-500 text-white w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
                      <FaBriefcase />
                    </div>
                    {/* <div className="flex-1 absolute border-1 text-xs border-gray-700 top-0 bottom-0 overflow-visible left-5"></div> */}
                  </div>
                  {/* Content */}

                  <div className="flex-1 border-l border-gray-700 pl-6">
                    <span className="text-gray-400 font-[600] px-2 py-0.5 bg-[#252525] rounded-full text-xs">
                      {item.year}
                    </span>
                    <h3 className="font-bold text-lg mt-1">
                      {item.title}{" "}
                      <span className="text-gray-400">— {item.school}</span>
                    </h3>
                    <p className="mt-1 text-gray-300">{item.description}</p>
                    <p className="mt-1 text-gray-300">{item.percentage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
