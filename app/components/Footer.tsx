import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container pt-20 pb-20" id="contact">
      <div className="flex justify-around">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]"></p>
        </div>
        {/* <div className="space-y-4">
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div> */}

        <div>
          <div className="flex gap-8 text-2xl pt-16">
            <FaInstagramSquare />
            <FaFacebookF />
            <BsTwitterX />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
