import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import React from "react";
import { educations } from "../data";

const Testimonials = () => {
  return (
    <section id="educations">
      <div className="container px-5 py-10 mx-auto text-center">
        <img
          alt="testimonial"
          src="edu-logo.png"
          className="w-12 rounded-full flex-shrink-0 object-cover object-center inline "
        />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          EDUCATIONS
        </h1>
        <div className="flex flex-wrap m-4">
          {educations.map((edu) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <img
                  alt="testimonial"
                  src={edu.image}
                  className="w-12 rounded-full flex-shrink-0 object-cover object-center inline "
                />
                <div className="items-center ">
                  <h4 className="inline font-bold text-purple-600">Grade : </h4>
                  <p className="inline text-white"> {edu.grade}</p>
                </div>
                <div className="items-center">
                  <h4 className="inline font-bold text-purple-600">
                    University Name :{" "}
                  </h4>
                  <p className="inline text-white"> {edu.uniname}</p>
                </div>
                <div className="items-center">
                  <h4 className="inline font-bold text-purple-600">
                    Graduation Date :{" "}
                  </h4>
                  <p className="inline text-white"> {edu.gradu_date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
