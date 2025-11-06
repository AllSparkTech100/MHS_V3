import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import gsap from 'gsap';


function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Carousel slides data
  const heroSlides = [
    {
      image: "/panel.webp",
      heading: (
        <>
          mental health, <br />is preserved wealth !!
        </>
      ),
      // You can add more fields like description if needed
    },
    {
      image: "/calmvol.jpg",
      heading: (
        <>
          Empowering Minds, <br />Transforming Lives.
        </>
      ),
    },
    {
      image: "/calm1.jpg",
      heading: (
        <>
          Support, <br />Educate, Inspire.
        </>
      ),
    },
  ];
  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const slideRefs = useRef([]);

  // Split heading text into character spans for wave animation (run once)
  useEffect(() => {
    slideRefs.current.forEach((slideEl) => {
      if (!slideEl) return;
      const h = slideEl.querySelector('h1');
      if (!h) return;
      if (h.dataset.split === 'true') return; // already processed

      const frag = document.createDocumentFragment();

      // iterate original child nodes so we preserve <br/> and original breaks
      slideEl.querySelectorAll('h1').forEach(() => {}); // noop to satisfy some browsers
      const nodes = Array.from(h.childNodes);
      nodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'BR') {
          frag.appendChild(document.createElement('br'));
          return;
        }
        // text node
        const text = node.nodeValue || (node.textContent || '');
        const chars = Array.from(text);
        chars.forEach((ch) => {
          if (ch === '\n') {
            frag.appendChild(document.createElement('br'));
            return;
          }
          const span = document.createElement('span');
          span.textContent = ch === ' ' ? '\u00A0' : ch; // preserve spaces
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          frag.appendChild(span);
        });
      });

      // replace content while keeping same element
      h.innerHTML = '';
      h.appendChild(frag);
      h.dataset.split = 'true';

      // set initial state for spans
      const spans = h.querySelectorAll('span');
      spans.forEach((s) => {
        s.style.opacity = '0';
        s.style.transform = 'translateY(30px)';
      });
    });
  }, []);

  // Run wave animation when currentSlide changes
  useEffect(() => {
    const slideEl = slideRefs.current[currentSlide];
    if (!slideEl) return;
    const h = slideEl.querySelector('h1');
    if (!h) return;
    const spans = Array.from(h.querySelectorAll('span'));
    if (spans.length === 0) return;

    // Reset all spans on other slides quickly
    slideRefs.current.forEach((sEl, idx) => {
      if (!sEl) return;
      const otherH = sEl.querySelector('h1');
      if (!otherH) return;
      if (idx !== currentSlide) {
        gsap.set(otherH.querySelectorAll('span'), { opacity: 0, y: 0 });
      }
    });

    gsap.killTweensOf(spans);
    // wave-like stagger from center
    gsap.fromTo(
      spans,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'back.out(1.7)',
        stagger: { each: 0.02, from: 'center' },
      }
    );
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  return (
    <>
      <div className="relative h-96 lg:h-screen overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            ref={(el) => (slideRefs.current[idx] = el)}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <div
              className="absolute bg-no-repeat inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/55"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="relative p-5 container md:left-8 lg:left-8 mx-auto my-20 lg:my-56 flex flex-col items-start">
              {/* md:items-start lg:items-start */}
                <h1 className="uppercase text-3xl md:text-5xl lg:text-7xl font-bold text-white">
                  {slide.heading}
                </h1>
                <div className="flex items-start mt-3 gap-5">
                  <button className="bg-[#88c040] rounded-2 px-7 py-3 lg:transition-all inline-block lg:hover:scale-90 ">
                    <a
                      href="https://www.facebook.com/profile.php?id=61556235412055&mibextid=ZbWKwL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-[#1d3f39] uppercase font-semibold "
                    >
                      Join Us
                    </a>
                  </button>
                  <button className="bg-[#88c040] rounded-2 px-7 py-3 lg:transition-all inline-block lg:hover:scale-90 ">
                    <a
                      href="https://l.facebook.com/l.php?u=https%3A%2F%2Flinktr.ee%2Falexandercomfort%3Futm_source%3Dlinktree_profile_share%26ltsid%3Df41c21af-fc50-4521-9a94-8f4f088fcfeb%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1jZoEUfub2UwRBCrNfsAKlruLKWWuNkB99SY6UokFvuyxKFdoDwodGJSk_aem_1z5xpQW77wyTs184hGKEjg&h=AT1GVz_COQdBbxpc5hCN4Fx6AMQdLR0ozt1N8dmn0lFm1AkNbDJOpFD5iYFfY3xX5WzbixvoysVJzjzbm8_IEaoUNCzmVbb1LSjhMaZYQG9vFLUYbKxI4_sowzGs4xkoQv3xPg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-[#1d3f39]  uppercase font-semibold "
                    >
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 z-20 hover:bg-black/70 transition"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 z-20 hover:bg-black/70 transition"
          aria-label="Next Slide"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full border border-white ${idx === currentSlide ? "bg-green-600" : "bg-white/50"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousel;