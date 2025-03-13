import { dir_img } from "../lib/Images";
import { FaSearch, FaRegCircle, FaUserFriends } from "react-icons/fa";
import { BsChatSquareDotsFill } from "react-icons/bs";
import Frequent from '../Components/Frequent';



function About() {
  return (
    <>
      <div className="relative h-80 md:h-[35rem] lg:h-[30rem]">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/akw/ak4.webp')] bg-cover bg-bottom lg:bg-[center_top_-10rem] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55">
          <div className="relative p-5 mx-auto my-28 md:my-56 lg:my-48 ">
            <div className="flex-col justify-center items-center flex text-white gap-8 place-items-center">
              <h1 data-aos="fade-up" className=" uppercase text-center text-2xl md:text-5xl lg:text-7xl font-bold">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="my-20 container mx-auto p-5 text-center">
        <p className="mt-2 mb-7 text-black md:text-center lg:text-center">
          Mental Health Plus and Saner Limited is a registered brand with
          the Nigerian corporate affairs commission with Registration No.:
          <span className="text-blue-700 font-bold italic"> 7137614</span>{" "}
          whose mission is to inspire a widespread shift towards proactive
          mental health practices, equipping individuals with the tools to
          navigate mental health challenges, preventing triggers and
          cultivate a holistic well-being. Through a multifaceted approach
          of webinars, workshops, conferences and personalized sessions
          ignites a spark of hope and resilience on inividuals dealing with
          mental health conditions.
        </p>
      </div>
      {/* Mission and Vision Statement */}
      <section className="flex flex-col lg:flex-row place-items-center  w-full mx-auto h-auto mt-20 justify-evenly-center p-5 gap-4">
        <div data-aos="fade-up" className="rounded-lg border bg-[#02514b] p-9 h-auto lg:h-72 w-full lg:w-1/2">
          <h3 className="capitalize text-2xl font-bold underline text-yellow-500 underline-offset-4">
            our mission
          </h3>
          <p className="mt-4 lg:mt-12 text-white">
            To inspire a widespread shift towards proactive mental health
            practices, fostering healthier and sounder lives for all, equipping
            individuals with the tools to navigate mental health challenges,
            prevent triggers and cultivate a wholistic wellbeing.
          </p>
        </div>
        <div data-aos="fade-up" className="rounded-lg bg-[#02514b] p-9 h-auto lg:h-72 w-full lg:w-1/2">
          <h3 className="capitalize text-2xl font-bold underline text-yellow-500 underline-offset-4">
            Our Vision & Core Values
          </h3>
          <p className="mt-4 lg:mt-5 text-white">
            To create a future where mental health is a priority not an after thought.

            <ul className="list-disc mt-2 leading-loose">
              <li>Client centred care</li>
              <li>Psycho education/mental health education</li>
              <li>Develop, understand and find tools for coping and recieving counselling, therapies and practical assistance.</li>
            </ul>
          </p>
        </div>
      </section>


      {/* information */}
      <div className="container mt-28 mx-auto p-4 h-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
          {/* items */}
          <div data-aos="fade-up" data-aos-duration="400" className=" place-items-center h-full p-4 w-full text-center">
            <FaRegCircle className="my-3" size={35} />
            <div>
              <h4 className="font-semibold  capitalize text-lg">
                Recognize The Need
              </h4>
              <p className="my-5">
                Acknowledge the importance of your mental health. Identifying signs of mental distress and making the courageous decisions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="500" className="place-items-center h-ful p-4 w-full text-center">
            <FaSearch className="my-3" size={35} />
            <div>
              <h4 className="font-semibold capitalize text-lg">
                Select Your Service
              </h4>
              <p className="my-5">
                Explore our comprehensive directory of licensed therapists, each specializing in various areas of mental health to cater to your unique needs.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="600" className=" place-items-center h-full p-4 w-full text-center">
            <FaUserFriends className="my-3" size={35} />
            <div>
              <h4 className="font-semibold  capitalize text-lg">
                Book a session
              </h4>
              <p className="my-5">
                Schedule  appointments with a therapist who resonates with you and engage fully in tailored sessions designed for your personal growth and recovery.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="700" className=" place-items-center h-full p-4 w-full text-center">
            <BsChatSquareDotsFill className="my-3" size={35} />
            <div>
              <h4 className="font-semibold  capitalize text-lg">
                start your sessions
              </h4>
              <p className="my-5">
                Develop a sustainable maintenance plan, and ensure ongoing progress by scheduling follow-up sessions.
                Your journey to mental wellness begins here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description of the CEO */}
      <section className="mt-40">
        <div className="container w-full mx-auto p-4 rounded-lg">
          <div className="text-center my-10 font-bold">
            <h4 data-aos="fade-up" className="uppercase text-xl lg:text-2xl">
              get to know our ceo
            </h4>
          </div>
          <div className="h-auto relative  rounded-2xl flex flex-col lg:flex-row-reverse gap-3 lg:gap-6 w-full py-10 px-4 items-center justify-around ">
            {/* CEO img */}
            <div data-aos="fade-up" className="">
              <div className="flex-1 lg:flex-auto h-72 lg:h-80 lg:max-w-64 overflow-hidden rounded-lg">
                <img
                  src={dir_img}
                  alt="The CEO"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>

          {/* CEO description */}
          <div data-aos="fade-down" className=" mt-8 flex-1 lg:w-full lg:m-0 text-black">
            <div className="text-center">
              <h3 className="font-bold text-lg lg:text-2xl uppercase">
                Alexander comfort
              </h3>
              <div className="italic my-2 text-md lg:text-lg uppercase">
                the girl who stood up for mental health in nigeria
              </div>
            </div>
            <hr className="border-2 rounded-lg border-slate-900" />
            <div className="mt-8 ">
              <p className="mt-4">
                She is a practicing counseling psychologist specializing in
                Clinical and Mental Health Counseling. With a strong
                commitment to advancing mental health awareness and education,
                Alexander has spearheaded various initiatives across Nigeria,
                bringing critical mental health discussions to diverse
                audiences.
              </p>
              <p className="mt-4">
                She parades herself in telling Mental health stories the
                African way. Her mission is clear - it is to inspire a
                widespread shift towards proactive mental health practices,
                fostering healthier and sounder lives for all, equipping
                individuals with the tools to navigate Mental health
                challenges, prevent triggers and cultivate a holistic
                wellbeing.
              </p>
              <p className="mt-4">
                One of her notable achievements includes training over a
                thousand staff members of the Niger Delta Development
                Commission on “The Psychology of Debt.“ This empowering
                discussion explored the profound impact of our relationship
                with money on overall well-being and mental health, providing
                valuable insights into how mindset shapes financial behaviors
                and mental health outcomes.
              </p>
            </div>
          </div>

        </div>
      </section >


      {/* Questions */}
      < div >
        <Frequent />
      </div >
    </>
  );
}

export default About;