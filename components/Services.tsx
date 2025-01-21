import React from "react";
import ServicesCard from "./Helper/ServicesCard";

const Services = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center" data-aos="fade-up">
        <p className="heading_mini">Popular Services</p>
        <h1 className="heading_primary">
          My Special <span className="text-yellow-300">Services</span> for You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div data-aos="fade-up">
          <ServicesCard title="React Website" num="01" />
        </div>{" "}
        <div data-aos="fade-up">
          <ServicesCard title="Next JS Website" num="02" />
        </div>{" "}
        <div data-aos="fade-up">
          <ServicesCard title="Full-Stack Website" num="03" />
        </div>{" "}
        <div data-aos="fade-up">
          <ServicesCard title="Telegram-bots Development" num="04" />
        </div>{" "}
        <div data-aos="fade-up">
          <ServicesCard title="React Website" num="05" />
        </div>{" "}
        <div data-aos="fade-up">
          <ServicesCard title="Bug Fixing" num="06" />
        </div>
      </div>
    </div>
  );
};

export default Services;
