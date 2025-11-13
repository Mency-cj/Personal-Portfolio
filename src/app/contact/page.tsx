"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { IoLogoLinkedin, IoMap } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";

export default function ContactPage() {
  // const ContactForm = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (e:any) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <>
      <div className="xl:px-49 px-3 lg:px-20">
        <div className="text-center pt-14 pb-24">
          <h1 className="font-light text-lg text-gray-500 pb-6">
            Feel free to contact me
          </h1>
          <div className="relative">
            <h1 className="font-extrabold md:text-[56px] text-[35px]">
              GET IN <span className="text-amber-400">TOUCH</span>
            </h1>
            <span className="absolute left-0 right-0 top-[50%] font-[800] tracking-[.8] md:text-[110px] text-[60px] transform -translate-y-1/2 text-[hsla(0,0%,100%,0.07)]">
              CONTACT
            </span>
          </div>
        </div>
        <div className="pb-32 md:px-8 lg:px-0">
          <div className="lg:flex">
            <div className="w-fit pb-18">
              <div>
                <h1 className="text-[25px] font-bold pb-4">DON'T BE SHY !</h1>
                <p className="text-[16px] mb-7">
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </p>
              </div>
              <div className="flex mb-6">
                <div className="pr-4">
                  <IoMap className="text-[43px] text-amber-400" />
                </div>
                <div>
                  <h2 className="opacity-[.8]">ADDRESS POINT</h2>
                  <p className="font-semibold font-sans">
                    Nagarcoil, Kanyakumari District, Tamil Nadu, India.
                  </p>
                </div>
              </div>
              <div className="flex mb-6">
                <div className="pr-4">
                  <FaEnvelopeOpen className="text-[35px] text-amber-400" />
                </div>
                <div>
                  <h2 className="opacity-[.8]">MAIL ME</h2>
                  <a
                    href="mailto:littlecjmency@gmail.com"
                    className="font-semibold font-sans"
                  >
                    littlecjmency@gmail.com
                  </a>
                  {/* <p className="font-semibold font-sans">littlecjmency@gmail.com</p> */}
                </div>
              </div>
              <div className="flex mb-6">
                <div className="pr-4">
                  <FaPhoneSquareAlt className="text-[39px] text-amber-400" />
                </div>
                <div>
                  <h2 className="opacity-[.8]">CALL ME</h2>
                  <p className="font-semibold font-sans">91+ 9445163962</p>
                </div>
              </div>
              <div>
                <ul className="flex">
                  <Link href={"https://www.linkedin.com/in/little-mency-c-j-a69312250/"} target="_blank"
                  rel="noopener noreferrer">
                  <li className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2b2a2a] mr-4 hover:bg-amber-400">
                    
                      <IoLogoLinkedin className="text-[18px]" />
                  </li>
                  </Link>
                  <li className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2b2a2a] mr-4 hover:bg-amber-400">
                    <a href="https://github.com/Mency-cj">
                      <VscGithub className="text-[19px]" />
                    </a>
                  </li>
                  <li className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2b2a2a] mr-4 hover:bg-amber-400">
                    <a href="">
                      <FaInstagram className="text-[19px]" />
                    </a>
                  </li>
                  <li className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2b2a2a] mr-4 hover:bg-amber-400">
                    <a href="">
                      <FaFacebookF className="text-[18px]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:pl-4 lg:ml-6">
              <form
                // onSubmit={handleSubmit}
                className="space-y-8 text-gray-300"
              >
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    // value={formData.name}
                    // onChange={handleChange}
                    className="flex-1 bg-[#1a1a1a] placeholder-gray-500 text-gray-200 px-20 md:px-16 lg:px-20 py-3 rounded-full outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="flex-1 bg-[#1a1a1a] placeholder-gray-500 text-gray-200 px-20 md:px-16 lg:px-20 py-3 rounded-full outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="YOUR SUBJECT"
                  // value={formData.subject}
                  // onChange={handleChange}
                  className="w-full bg-[#1a1a1a] placeholder-gray-500 text-gray-200 px-6 py-3 rounded-full outline-none focus:ring-2 focus:ring-yellow-500 transition"
                />

                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  // value={formData.message}
                  // onChange={handleChange}
                  rows={6}
                  className="w-full bg-[#1a1a1a] placeholder-gray-500 text-gray-200 px-6 py-4 rounded-3xl outline-none focus:ring-2 focus:ring-yellow-500 transition"
                ></textarea>

                <div className="flex items-center gap-4">
                  <button className="group relative inline-flex h-[calc(48px+6px)] items-center justify-center rounded-full border-[2px] border-amber-400 bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
                    <span className="z-10 text-[15px] font-semibold px-2">
                      SEND MESSAGE
                    </span>
                    <div className="absolute right-0 inline-flex h-13 w-13 items-center justify-end rounded-full bg-amber-400 transition-[width] duration-400 ease-in-out group-hover:w-[calc(101%-1px)]">
                      <div className="mr-3.5 flex items-center justify-center">
                        <GrSend className="text-[20px]" />
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
