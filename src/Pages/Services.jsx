import ServiceCard from "../Components/Cards/ServiceCard";
import { LuSend } from "react-icons/lu";

function Services() {

  return (
    <>
      <div className="relative h-80 md:h-[35rem] lg:h-[30rem]">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/seren.webp')] bg-cover bg-bottom lg:bg-bottom before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55">
          <div className="relative p-5 mx-auto my-28 md:my-56 lg:my-48 ">
            <div className="justify-center text-white">
              <h4  data-aos="fade-up" className=" uppercase text-center text-2xl md:text-5xl lg:text-7xl font-bold">
                our services
              </h4>

            </div>
          </div>
        </div>
      </div>

      <div className="container mt-20 mx-auto p-4 h-auto">
        <h3  data-aos="fade-up" className="uppercase underline font-bold text-lg lg:text-2xl">our services / intervention</h3>
        <div className="my-10">
          <ServiceCard />
        </div>

        <div  data-aos="fade-down" className="flex items-center justify-center">
          <button type="submit" className="text-center p-4 bg-[#02514b] w-60 flex items-center justify-center gap-4 rounded-lg text-white lg:hover:scale-90 lg:transition-all ">
            <a href="/booking" className='flex items-center justify-center gap-4'>  <LuSend size={25} />Book now</a>
          </button>
        </div>
      </div>

    </>
  )
}

export default Services