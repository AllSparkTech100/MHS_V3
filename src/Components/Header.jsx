import { useState } from "react";
import { IoClose, IoMenuSharp } from "react-icons/io5";


function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const menuToggle = () => {
    setIsMenu(!isMenu);
  };
  return (
    <>
      <header className="sticky top-0 z-10 bg-[#e6e6e6] text-white">
        <div className="flex gap-5 justify-between items-center p-4 lg:p-2">

          <img href='/' src="/mhslogo.webp" alt="Logo" className="w-15 h-10 lg:ml-4" />

          <div className="mx-auto text-black ">
            <nav
              className="hidden sm:block basis-1/2 sm:text-lg text-xl"
              aria-label="main">
              {" "}
              <ul className="flex items-center gap-5">
                <li className=" lg:hover:text-black/50 lg:hover:transition-all"> <a href="/">Home</a></li>
                <li className=" lg:hover:text-black/50 lg:hover:transition-all"><a href="/about">About Us</a></li>
                <li className=" lg:hover:text-black/50 lg:hover:transition-all"><a href="/contact">Contact Us</a></li>
                <li className=" lg:hover:text-black/50 lg:hover:transition-all"><a href="/services">Our Services</a></li>
                <li className=" lg:hover:text-black/50 lg:hover:transition-all"> <a href="/library"> Library</a></li>
              </ul>
            </nav>
          </div>


          <button className="p-3 hidden lg:block rounded-lg  bg-green-500">
            Book a Session
          </button>
          <div className="flex items-center flex-row justify-center">
            <button
              onClick={menuToggle}
              className="text-2xl text-black sm:hidden focus:outline-none"
            >
              {isMenu ? <IoClose size={28} /> : <IoMenuSharp size={28} />}
            </button>
          </div>
        </div>{" "}
        {isMenu && (
          <div className="sm:hidden min-h-screen w-full text-white fill-transparent bg-emerald-950 transition-colors relative ease-linear duration-100">
            <div className="bg-slate-800 absolute z-10 transition-colors ease-linear duration-300 min-h-screen w-80 pt-5">
              <div className="text-white p-5">
                <nav
                  className="uppercase  text-xl">
                  {" "}
                  <ul className="text-left flex flex-col items-start gap-5">
                    <li className=""> <a href="/">Home</a></li>
                    <li className=""><a href="/about">About Us</a></li>
                    <li className=""><a href="/contact">Contact Us</a></li>
                    <li className=""><a href="/services">Our Services</a></li>
                    <li className=""> <a href="/library"> Library</a></li>
                  </ul>
                  <button className="mt-3 text-left text-white bg-[#02514b] rounded-lg w-full p-3 place-items-center">
                    <a href="http://">Book a Session</a>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;