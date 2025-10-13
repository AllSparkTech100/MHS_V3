import ServiceCard from "../Components/Cards/ServiceCard";

function Services() {

  return (
    <>
      <div className="relative h-80 md:h-[35rem] lg:h-[30rem]">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/serve.jpg')] bg-cover bg-bottom lg:bg-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/65 before:to-black/85">
          <div className="relative p-5 mx-auto my-28 md:my-56 lg:my-48 ">
            <div className="justify-center text-white">
              <h4 className=" uppercase text-center text-2xl md:text-5xl lg:text-7xl font-bold">
                our services
              </h4>

            </div>
          </div>
        </div>
      </div>

      {/* Description] */}
      <div className="container mt-20 mx-auto p-4 h-auto text-center">
        <p className='text-xl text-center'>
          Mental Health Plus & Saner Ltd is a mental health company committed to bridging advocacy/awareness and mental health literacy with professional services aimed at continuously inspiring a widespread shift towards proactive mental health practices, Our services also involve delivering Employee Assistance Programs (EAPs), Counseling & Therapy(individual & group), Psychological Needs Audits, and Training for First Responders, helping individuals, workplaces, and communities access practical, evidence-based, person-centered and culturally relevant mental health solutions.
        </p>
      </div>
      <div className="container mt-20 mx-auto p-4 h-auto">
        <h3 className="uppercase underline font-bold text-lg lg:text-2xl">our services / intervention</h3>
        <div className="my-10">
          <ServiceCard />
        </div>

      </div>

    </>
  )
}

export default Services