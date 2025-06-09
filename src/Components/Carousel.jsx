// // ...existing code...

// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Add at the top

// function Carousel () {
//   // ...existing code...

//   // Carousel slides data
//   const heroSlides = [
//     {
//       image: "/panel.jpg",
//       heading: (
//         <>
//           mental health, <br />is preserved wealth
//         </>
//       ),
//       // You can add more fields like description if needed
//     },
//     {
//       image: "/panel.jpg",
//       heading: (
//         <>
//           Empowering Minds, <br />Transforming Lives
//         </>
//       ),
//     },
//     {
//       image: "/panel.jpg",
//       heading: (
//         <>
//           Support. <br />Educate. Inspire.
//         </>
//       ),
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
//   };

//   // ...existing code...

//   return (
//     <>
//       {/* Hero Carousel */}
//       <div className="relative h-96 lg:h-screen overflow-hidden">
//         {/* Slides */}
//         {heroSlides.map((slide, idx) => (
//           <div
//             key={idx}
//             className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//               idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
//             }`}
//           >
//             <div
//               className="absolute bg-no-repeat inset-0 bg-cover bg-bottom before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55"
//               style={{ backgroundImage: `url('${slide.image}')` }}
//             >
//               <div className="relative p-5 container mx-auto my-20 lg:my-56 flex flex-col items-start">
//                 <h1 className="uppercase text-3xl md:text-5xl lg:text-7xl font-bold text-white">
//                   {slide.heading}
//                 </h1>
//                 <div className="flex items-center mt-3 gap-5">
//                   <button className="bg-green-600 px-6 py-3 rounded-md lg:transition-all inline-block lg:hover:scale-90 ">
//                     <a
//                       href="https://www.facebook.com/profile.php?id=61556235412055&mibextid=ZbWKwL"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className=" text-white uppercase font-semibold "
//                     >
//                       Join Us
//                     </a>
//                   </button>
//                   <button className="bg-green-600 px-6 py-3 rounded-md lg:transition-all inline-block lg:hover:scale-90 ">
//                     <a
//                       href="https://l.facebook.com/l.php?u=https%3A%2F%2Flinktr.ee%2Falexandercomfort%3Futm_source%3Dlinktree_profile_share%26ltsid%3Df41c21af-fc50-4521-9a94-8f4f088fcfeb%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1jZoEUfub2UwRBCrNfsAKlruLKWWuNkB99SY6UokFvuyxKFdoDwodGJSk_aem_1z5xpQW77wyTs184hGKEjg&h=AT1GVz_COQdBbxpc5hCN4Fx6AMQdLR0ozt1N8dmn0lFm1AkNbDJOpFD5iYFfY3xX5WzbixvoysVJzjzbm8_IEaoUNCzmVbb1LSjhMaZYQG9vFLUYbKxI4_sowzGs4xkoQv3xPg"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className=" text-white uppercase font-semibold "
//                     >
//                       Learn More
//                     </a>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Carousel Controls */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 z-20 hover:bg-black/70 transition"
//           aria-label="Previous Slide"
//         >
//           <FaChevronLeft size={24} />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 z-20 hover:bg-black/70 transition"
//           aria-label="Next Slide"
//         >
//           <FaChevronRight size={24} />
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//           {heroSlides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentSlide(idx)}
//               className={`w-3 h-3 rounded-full border border-white ${
//                 idx === currentSlide ? "bg-green-600" : "bg-white/50"
//               }`}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//       {/* ...rest of your code... */}
//     </>
//   );
// }