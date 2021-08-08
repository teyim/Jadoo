import React from "react";
import githubLogo from "../../../Assets/images/github.svg";
import linkedInLogo from "../../../Assets/images/linkedin.svg";
import twitterLogo from "../../../Assets/images/twitter.svg";
import arrowUp from "../../../Assets/images/up.svg";

export default function Footer() {
  return (
    <div className="max-w-8xl bg-gray-200 py-5 px-20 font-rubik">
      <div className="md:flex">
        <div className="md:w-1/4 w-full text-center md:text-left mb-3 md:my-0">
          <a
            href="#"
            className=" mx-auto py-2 px-2 text-blue-700 font-boing text-4xl">
            Jadoo.
          </a>
          <p>
            Your Convenience, Our Priority Book a ride with us. Reconnect with
            your loved ones
          </p>
        </div>
        <div className="md:w-2/5 flex justify-evenly  items-center">
          <img className="w-12 h-12" src={githubLogo} alt="github Logo"></img>
          <img className="w-12 h-12" src={linkedInLogo} alt="github Logo"></img>
          <img className="w-12 h-12" src={twitterLogo} alt="github Logo"></img>
        </div>
        <div className="flex md:w-1/3 w-full justify-center items-center mt-6 md:mt-0 ">
          <img className="w-12 h-12 mt-3" src={arrowUp} alt="arrowup"></img>
        </div>
      </div>
    </div>
  );
}
