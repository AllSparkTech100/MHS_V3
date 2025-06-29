import { useState, useEffect } from "react";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";



function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuToggle = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    if (isMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMenu])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    {/* bg-[#1d3f39 */}
      <header className={`sticky top-0 z-[9999] bg-white text-black transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-opacity-80 supports-[backdrop-filter]:bg-white/80' : ''}`}>
        <div className="flex gap-5 justify-between h-20 items-center p-4 lg:p-2">

          <img href='/' src="/mhslogo.webp" alt="Logo" className="w-15 h-10 lg:ml-4" />

          <div className="mx-auto text-[#88c040]">
            <nav
              className="hidden md:hidden lg:block sm:block basis-1/2 sm:text-lg text-xl"
              aria-label="main">
              {" "}
              <ul className="flex uppercase font-medium items-center gap-5">
                <li className=" lg:hover:text-[#88c040] lg:hover:transition-all"> <a href="/">Home</a></li>
                <li className=" lg:hover:text-[#88c040] lg:hover:transition-all"><a href="/about">About Us</a></li>
                <li className=" lg:hover:text-[#88c040] lg:hover:transition-all"><a href="/contact">Contact Us</a></li>
                <li className=" lg:hover:text-[#88c040] lg:hover:transition-all"><a href="/services">Our Services</a></li>
                <li className=" lg:hover:text-[#88c040] lg:hover:transition-all"> <a href="/library"> Library</a></li>
              </ul>
            </nav>
          </div>


          <button className="p-3 hidden lg:block rounded-lg  bg-green-500">
            Book a Session
          </button>
          <div className="flex items-center flex-row justify-center">

            <motion.button
              onClick={menuToggle}
              className="text-2xl text-black md:block lg:hidden sm:hidden focus:outline-none"
              animate={{ rotate: isMenu ? 90 : 0, scale: isMenu ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {isMenu ? <IoClose size={28} /> : <IoMenuSharp size={28} />}
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {isMenu && (
            <motion.div initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
              className="sm:hidden md:block lg:hidden min-h-screen fixed w-full text-white fill-transparent bg-emerald-950/85 transition-colors ease-linear duration-100"
              onClick={menuToggle}>
              <motion.div initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30, delay: 1 }}
                className="bg-slate-800 absolute z-10 transition-colors ease-linear duration-300 min-h-screen md:w-1/2 w-80 pt-5"
                onClick={e => e.stopPropagation()}>
                <div className=" text-white p-5">
                  <nav
                    className="uppercase text-xl">
                    {" "}
                    <ul className="text-left flex flex-col items-start gap-5">
                      <li className="md:mt-7"> <a href="/">Home</a></li>
                      <li className="md:mt-7"><a href="/about">About Us</a></li>
                      <li className="md:mt-7"><a href="/contact">Contact Us</a></li>
                      <li className="md:mt-7"><a href="/services">Our Services</a></li>
                      <li className="md:mt-7"> <a href="/library"> Library</a></li>
                    </ul>
                    <button className="mt-3 md:mt-12 text-center text-black bg-white rounded-lg w-full p-3 place-items-center">
                      <a href="http://">Book a Session</a>
                    </button>
                  </nav>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;