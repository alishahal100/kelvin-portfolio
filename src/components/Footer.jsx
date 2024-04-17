import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone, FaEnvelope, FaMap, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaLocationPin } from "react-icons/fa6";
import { IoLocateSharp, IoLocation } from "react-icons/io5";
import { Helmet } from "react-helmet";
const Footer = () => {
  return (
    <section  className="w-screen  h-auto bg-[#1a3118] mt-28 -mb-28 -ml-10 " id="contact">
        <Helmet>
        <title>Contact Us - Aquilaa Facility Management</title>
        <meta name="description" content="Contact Aquilaa Facility Management for property maintenance and facility management services in Qatar. Call us at +974 4488 5151 or visit us at PO Box 32573, Al Sadd, Doha." />
      </Helmet>
      <footer id="contact" className="flex  flex-col lg:flex-row items-center  justify-center pb-16 gap-52 lg:gap-[800px]">
        <div>
<h1 className=" text-2xl text-white">Kelvin charles</h1>
        </div>
        <div>
          <div className="mt-6 flex gap-4">
            
           

            <div className="flex flex-col gap-3">
              <h1 className="text-white text-2xl">Contact Us</h1>
              <div className="flex items-center gap-3 text-white">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
              <FaPhone className="text-[#1a3118] rotate-90" />
            </div>
                <p>+974 4488 5151</p>
              </div>
              <div className="flex items-center gap-3 text-white">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
              <IoLocation className="text-[#1a3118]" />
            </div>
                <p>PO Box 32573, Al Sadd, Doha - Qatar</p>
              </div>
              <div className="flex items-center gap-3 text-white">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
              <FaFacebookF className="text-[#1a3118]" />

            </div>
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">

              <FaLinkedinIn className="text-[#1a3118]" />
            </div>
                <p>Follow us</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
