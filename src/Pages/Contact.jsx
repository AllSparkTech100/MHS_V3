import ContactCard from "../Components/Cards/ContactCard";

function Contact() {
  return (
    <>
      <div className="relative h-80 md:h-[35rem] lg:h-96">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/seren.webp')] bg-cover bg-bottom lg:bg-bottom before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55">
          <div className="relative p-5 mx-auto my-28 md:my-15 lg:my-36">
            <div className="justify-center text-white">
              <h4 className=" uppercase text-center text-2xl md:text-5xl lg:text-7xl font-bold">
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
