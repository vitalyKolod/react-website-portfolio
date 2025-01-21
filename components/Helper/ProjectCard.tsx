import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  image: string;
}

const ProjectCard = ({ title, tech1, tech2, tech3, tech4, image }: Props) => {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] sm:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="p-4 rounded-x1 relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image
          src={`${image}`}
          alt={title}
          width={800}
          height={800}
          className="object-contain rounded-x1 mx-auto shadow-md"
        />
      </div>
      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <p className="text-[17px] opacity-65 text-white mt-[1rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
          laboriosam corrupti maiores adipisci perferendis eveniet sunt quasi
          cumque rerum
        </p>
        <div className="mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
          <h1 className="px-6 py-3 bg-orange-700 text-white rounded-lg text-center">
            {tech1}
          </h1>
          <h1 className="px-6 py-3 bg-blue-700 text-white rounded-lg text-center">
            {tech2}
          </h1>{" "}
          <h1 className="px-6 py-3 bg-yellow-600 text-white rounded-lg text-center">
            {tech3}
          </h1>
          <h1 className="px-6 py-3 bg-yellow-600 text-white rounded-lg text-center">
            {tech4}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
