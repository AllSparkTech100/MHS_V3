import { FaFacebook, FaLocationArrow, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { useState, useEffect } from "react";

function Footer() {
  const [year, setYear] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="h-full p-10 md:p-8 lg:p-12 mt-60 bg-[#1d3f39] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 md:grid-cols-2">
          <div className=" my-4">
            <h2 className="text-white text-lg lg:text-2xl font-medium uppercase">
              mental health <br /> plus &amp; saner limited
            </h2>
            <p className="mt-2 mb-3 text-white text-lg sentence">
              Mental health is preserved wealth.
            </p>
            <div className="flex items-center mt-4 mb-4 gap-5">
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 text-[#1d3f39] bg-[#88c040]">
                <a href="https://www.facebook.com/profile.php?id=61556235412055&mibextid=ZbWKwL" target="_blank" className=''>
                  <FaFacebook size={20} />
                </a>
              </div>
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 text-[#1d3f39] bg-[#88c040]">
                <a href="https://ng.linkedin.com/in/alexandercomfort?trk=public_post_feed-actor-name" target="_blank" className=''>
                  <FaLinkedinIn size={20} />
                </a>
              </div>
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 text-[#1d3f39] bg-[#88c040]">
                <a href="https://linktr.ee/alexandercomfort?fbclid=IwY2xjawGXHzRleHRuA2FlbQIxMAABHXZcpw-IWCNMDL5ZHdvdoEhPvKHae8LuTVyvOJItmXfR7RKVt7CinYZwkQ_aem_rxzbBEAA7gl_r03ZfQvW9g" target="_blank" className=''>
                  <PiLinktreeLogoBold size={20} />
                </a>
              </div>
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 text-[#1d3f39] bg-[#88c040] ">
              {/* bg-slate-800 */}
                <a href="https://www.instagram.com/cognitherapist/" target="_blank" className=''>
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="my-4 text-white">
            <h4 className="uppercase text-lg lg:text-2xl font-bold">
              open hours
            </h4>
            <ul className="list-none">
              <li className="text-lg my-4 capitalize lg:text-xl">
                mondays - saturday
              </li>
              <li className="text-lg my-4 capitalize lg:text-xl">
                scheduled appointments
              </li>
              <li className="text-lg my-4 capitalize lg:text-xl">
                online bookings
              </li>

            </ul>

          </div>
          {/* links */}
          <div className="my-4 text-white">
            <h4 className="uppercase text-lg lg:text-2xl font-bold">
              quick links
            </h4>
            <ul className="list-none capitalize">
              <li className="text-lg my-4  lg:text-xl">
                <a href="/">home</a>
              </li>
              <li className="text-lg my-4 lg:text-xl">
                <a href="/about">about us</a>
              </li>
              <li className="text-lg my-4 lg:text-xl">
                <a href="/contact">contact us</a>
              </li>
              <li className="text-lg my-4 lg:text-xl">
                <a href="/services">our services</a>
              </li>
              <li className="text-lg my-4 lg:text-xl">
                <a href="/library">library</a>
              </li>
            </ul>

          </div>
          {/* contact */}
          <div className="my-4 text-white">
            <h4 className="uppercase text-lg lg:text-2xl font-bold">
              contact details
            </h4>
            <ul className="list-none ">
              <li className="text-lg my-4 capitalize flex items-center gap-2 lg:text-xl">
                <FaLocationArrow size={20} /><span>port-harcourt, nigeria</span>
              </li>
              <li className="text-lg flex items-center gap-2  my-4 lg:text-xl">
                <IoCall size={20} /><a href="tel:+2348149944531"> +2348149944531</a>
              </li>

            </ul>

          </div>
        </div>


        <hr className="my-4 bg-[#1d3f39]" />
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
          <div className="my-8 md:my-0 lg:my-5 text-center">
            <h5 className=" text-gray-400 text-center">
              &copy; {year} Mental Health Plus and Saner LTD
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;