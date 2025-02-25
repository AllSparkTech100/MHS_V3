import ContactCard from "../Components/Cards/ContactCard";

function Contact() {
  return (
    <>
      <div className="relative h-80 md:h-[35rem] lg:h-[30rem]">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/akw/ak2.webp')] bg-cover bg-bottom lg:bg-[center_top_-8rem] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55">
          <div className="relative p-5 mx-auto my-28 md:my-56  lg:my-48">
            <div className="justify-center text-white">
              <h4  data-aos="fade-up" className=" uppercase text-center text-2xl md:text-5xl lg:text-7xl font-bold">
                contact us
              </h4>
             
            </div>
          </div>
        </div>
      </div>
<div>
  
<ContactCard />
</div>
    </>
  );
}

export default Contact;
