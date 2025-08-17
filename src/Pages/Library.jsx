import Resources from "../Components/Resources"


function Library() {
  return (
    <>
      <div className="relative h-80 md:h-[35rem] lg:h-[30rem]">
        <div className="absolute bg-no-repeat inset-0 bg-[url('/seren.jpg')] bg-cover  bg-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/65 before:to-black/85">
          <div className="relative p-5 mx-auto my-20 md:my-56 lg:my-48  ">
            <div className="flex-col justify-center items-center flex gap-8 place-items-center text-white">
              <h4 className=" uppercase text-center text-4xl lg:text-7xl font-bold">
                our resources
              </h4>
              
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40">
        <Resources />
      </div>
     
    </>
  )
}

export default Library