import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
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
      <div className="h-42 p-10 md:p-8 lg:p-10  mt-60 bg-slate-950 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2">
          <div className=" my-4">
            <h2 className="text-white text-lg lg:text-3xl font-bold uppercase">
              mental health <br /> plus &amp; saner limited
            </h2>
            <p className="mt-2 mb-3 text-white text-lg sentence">
              Mental health is preserved wealth.
            </p>
            <div className="flex items-center mt-4 mb-4 gap-5">
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 bg-gray-200 lg:hover:bg-slate-800 lg:hover:text-yellow-500">
                <a href="https://www.facebook.com/profile.php?id=61556235412055&mibextid=ZbWKwL" target="_blank" className=''>
                  <FaFacebook size={20} />
                </a>
              </div>
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 bg-gray-200 lg:hover:bg-slate-800 lg:hover:text-yellow-500">
                <a href="https://ng.linkedin.com/in/alexandercomfort?trk=public_post_feed-actor-name" target="_blank" className=''>
                  <FaLinkedinIn size={20} />
                </a>
              </div>
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 bg-gray-200 lg:hover:bg-slate-800 lg:hover:text-yellow-500">
                <a href="https://linktr.ee/alexandercomfort?fbclid=IwY2xjawGXHzRleHRuA2FlbQIxMAABHXZcpw-IWCNMDL5ZHdvdoEhPvKHae8LuTVyvOJItmXfR7RKVt7CinYZwkQ_aem_rxzbBEAA7gl_r03ZfQvW9g" target="_blank" className=''>
                  <PiLinktreeLogoBold size={20} />
                </a>
              </div>
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 bg-gray-200 lg:hover:bg-slate-800 lg:hover:text-yellow-500">
                <a href="https://www.instagram.com/cognitherapist/" target="_blank" className=''>
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="my-4 text-white">
            <h4 className="uppercase text-lg lg:text-3xl font-bold">
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
          <div>

            
          </div>
         
        </div>


        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
          {/* <div className="flex-1/2 place-items-center text-center mt-10 md:place-items-start lg:place-items-start">
            <h3 className="text-2xl capitalize text-white">
              connect with us on social media
            </h3>
            <div className="flex mt-3 items-center gap-5">
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 bg-gray-200 lg:hover:bg-slate-800 lg:hover:text-yellow-500">
                <a href="https://www.facebook.com/profile.php?id=61556235412055&mibextid=ZbWKwL" target="_blank" className=''>
                  <FaFacebook size={20} />
                </a>
              </div>
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 bg-gray-200 lg:hover:bg-slate-800 lg:hover:text-yellow-500">
                <a href="https://ng.linkedin.com/in/alexandercomfort?trk=public_post_feed-actor-name" target="_blank" className=''>
                  <FaLinkedinIn size={20} />
                </a>
              </div>
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 bg-gray-200 lg:hover:bg-slate-800 lg:hover:text-yellow-500">
                <a href="https://linktr.ee/alexandercomfort?fbclid=IwY2xjawGXHzRleHRuA2FlbQIxMAABHXZcpw-IWCNMDL5ZHdvdoEhPvKHae8LuTVyvOJItmXfR7RKVt7CinYZwkQ_aem_rxzbBEAA7gl_r03ZfQvW9g" target="_blank" className=''>
                  <PiLinktreeLogoBold size={20} />
                </a>
              </div>
              <div className="rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center p-2 md:p-4 lg:p-4 bg-gray-200 lg:hover:bg-slate-800 lg:hover:text-yellow-500">
                <a href="https://www.instagram.com/cognitherapist/" target="_blank" className=''>
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div> */}
          <div className="my-8 md:my-0 lg:my-0 text-center">
            <h5 className=" text-gray-400">
              &copy; {year} Mental Health Plus and Saner LTD
            </h5>
          </div>
        </div>

      </div>
    </>
  );
}

export default Footer;