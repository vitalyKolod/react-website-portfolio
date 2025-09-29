import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { RssIcon } from "@heroicons/react/16/solid";
import { FilmIcon } from "@heroicons/react/16/solid";
import { EnvelopeOpenIcon, MapPinIcon } from "@heroicons/react/16/solid";
import { PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="font-logo text-white text-[18px]">
            <span className="text-[30px] md:text[40px] text-yellow-400">
              VK
            </span>
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            ad atque mollitia id dicta commodi illum odit amet quibusdam, totam
            ipsa accusamus sint in facere a deserunt, voluptas quia accusantium?
          </h1>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1rem] text-[19px]">
            Quick Link
          </h1>
          <p className="text-[15px] text-white mb-[1rem] text-center cursor-pointer hover:text-yellow-300">
            Home
          </p>
          <p className="text-[15px] text-white mb-[1rem] text-center cursor-pointer hover:text-yellow-300">
            About
          </p>
          <p className="text-[15px] text-white mb-[1rem] text-center cursor-pointer hover:text-yellow-300">
            Services
          </p>
          <p className="text-[15px] text-white mb-[1rem] text-center cursor-pointer hover:text-yellow-300">
            Contacts
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapPinIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              105 Kyznechnaya street, Russia
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              @kolochenkovitaly250@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +7-961-971-63-39
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70 text-center">
        &#169; Copyright Kolodchenko Vitaly 2025
      </div>
    </div>
  );
};

export default Footer;
