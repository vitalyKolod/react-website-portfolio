import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  user: string;
  role: string;
}
const ClientReviewCard = ({ image, role, user }: Props) => {
  return (
    <div className="m-2 hover:bg-gray-700 transition-all duration-300 rounded-lg">
      <div className="border-2 p-4 border-gray-700 rounded-x1">
        <Image
          src={`${image}`}
          alt={user}
          width={200}
          height={200}
          className="rounded-full mx-auto mt-[2rem]"
        />
        <div>
          <SparklesIcon className="w-[6rem] h-[6rem] text-white opacity-15 fixed" />
        </div>
        <div>
          <p className="text-[15px] text-white opacity-65 mt-[2rem] text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            enim asperiores, quia minima placeat quas inventore voluptate?
            Vitae, commodi exercitationem.
          </p>
        </div>
        <h1 className="text-[20px] text-center text-white mt-[1rem] font-medium">
          {user}
        </h1>
        <p className="text-yellow-400 text-[18px] text-center mb-[3rem]">
          {role}
        </p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
