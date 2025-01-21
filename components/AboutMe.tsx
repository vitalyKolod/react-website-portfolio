import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-[-3.5rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div data-aos="fade-right">
          <p className="heading_mini">About Me</p>
          <h1 className="heading_primary">
            Professional <span className="text-yellow-400">Website</span> for
            your business
          </h1>
          <p className="text-[16px] mt-[1.3rem] text-white opacity-75">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            assumenda ipsam accusamus a porro dicta voluptatem ullam fugit
            laboriosam perspiciatis repellat, eum quidem odio culpa eos quaerat.
            Quod, eius laboriosam.
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-green-400" />
              <p className=" text-[18px] text-white">Frontend Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-green-400" />
              <p className=" text-[18px] text-white">Backend Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-green-400" />
              <p className=" text-[18px] text-white">
                Telegram-bots Development
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">2</p>
              <p className="text-[20px] text-black font-600">
                Years experience
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">2</p>
              <p className="text-[20px] text-black font-600">
                Years experience
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">2</p>
              <p className="text-[20px] text-black font-600">
                Years experience
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">2</p>
              <p className="text-[20px] text-black font-600">
                Years experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
