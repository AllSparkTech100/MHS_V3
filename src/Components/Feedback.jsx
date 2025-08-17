
import { useEffect, useState, useRef } from "react";


const Feeds = [
  {
    name: "Family Therapy Client",
    testify:
      "Our family dynamic has improved so much since working with . They helped us resolve long-standing conflicts and improve our communication.",
  },
  {
    name: "Parent of a teen therapy client",
    testify:
      "My teenage daughter was initially resistant to therapy, but Mental Health Plus and Saner LTD. built a trusting bond with her. She’s now more open and emotionally resilient.",
  },
  {
    name: "Counselling Client",
    testify:
      "Before counseling, I was overwhelmed by stress. Thanks to Mental Health Plus and Saner LTD., I’ve learned coping mechanisms that allow me to thrive, even in challenging times.",
  },
  {
    name: "Individual Therapy Client",
    testify:
      "I’ve been to many therapists before, but Alexander Comfort is the first to truly connect with me. Their insight and care have helped me heal from past trauma.",
  },
  {
    name: "Group Therapy Participant",
    testify:
      "The group therapy sessions were a turning point for me. Hearing others' experiences and sharing my own helped me feel less alone in my struggles.",
  },
  {
    name: "Career Counselling Client",
    testify:
      "I came to Mental Health Plus and Saner LTD. feeling completely lost in my career. Now, I have a clear vision of my goals and the courage to pursue them.",
  },
  {
    name: "Parent of a Child Therapy Client",
    testify:
      "My child loves going to therapy sessions with Mental Health Plus and Saner LTD.. Their patience and creative methods have helped us manage his tantrums and build his confidence",
  },
  {
    name: "Couples Therapy Client",
    testify:
      "After our sessions, I’ve been able to reconnect with my spouse on a deeper level. We now communicate better and truly understand each other’s needs",
  },
  {
    name: "Client Struggling with Anxiety",
    testify:
      "Working with Mental Health Plus and Saner LTD. changed my life. I finally feel heard and understood, and I’ve gained tools to manage my anxiety effectively.",
  },
];

function Feedback() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const intervalRef = useRef();

  // Responsive perPage
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // (Autoplay removed)

  const next = () => setCurrent((prev) => (prev + 1) % Feeds.length);
  const prev = () => setCurrent((prev) => (prev - 1 + Feeds.length) % Feeds.length);


  // Get visible slides centered around the current (focused) card
  const getVisible = () => {
    let slides = [];
    let half = Math.floor(perPage / 2);
    for (let i = -half; i <= half; i++) {
      // For perPage=2, show current and next; for perPage=3, show prev, current, next
      let idx = (current + i + Feeds.length) % Feeds.length;
      slides.push({ ...Feeds[idx], _carouselIndex: idx, _pos: i });
    }
    return slides;
  };

  return (
    <section
      className="relative w-full min-h-[420px] flex items-center justify-center overflow-visible py-8 bg-transparent"
      aria-label="Testimonials Carousel"
    >
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 shadow-lg rounded-full p-2 text-2xl"
        aria-label="Previous testimonial"
        tabIndex={0}
      >
        &#8592;
      </button>
      <div className="flex gap-6 items-center justify-center w-full max-w-6xl mx-auto">
        {getVisible().map((item, i) => {
          // Center card is always at index Math.floor(perPage/2)
          const centerIdx = Math.floor(perPage / 2);
          const isCenter = i === centerIdx;
          return (
            <article
              key={item._carouselIndex}
              className={`w-80 max-w-full min-h-[220px] bg-white rounded-3xl flex flex-col items-center justify-center border-2 border-[#88c040] px-6 py-8 transition-all duration-500
                ${isCenter ? 'scale-105 shadow-2xl z-20 border-[#02514b] ring-4 ring-[#88c040]/30' : 'scale-95 opacity-80 z-10'}
              `}
              style={{
                color: "#02514b",
                boxShadow: isCenter
                  ? "0 12px 40px 0 rgba(31, 63, 57, 0.30)"
                  : "0 4px 16px 0 rgba(31, 63, 57, 0.10)",
                minHeight: 'auto',
                transform: isCenter ? 'scale(1.07)' : 'scale(0.95)',
                transition: 'all 0.4s cubic-bezier(.4,2,.6,1)',
              }}
              tabIndex={isCenter ? 0 : -1}
              aria-label={`Testimonial from ${item.name}`}
              role="listitem"
            >
              <div className="text-6xl font-bold text-[#88c040] mb-2">&ldquo;</div>
              <p className="text-base text-center mb-4 whitespace-pre-line break-words">{item.testify}</p>
              <div className="text-6xl font-bold text-[#88c040] mb-2 self-end">&rdquo;</div>
              <h5 className="text-lg font-semibold italic text-center">{item.name}</h5>
            </article>
          );
        })}
      </div>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 shadow-lg rounded-full p-2 text-2xl"
        aria-label="Next testimonial"
        tabIndex={0}
      >
        &#8594;
      </button>
      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {Feeds.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`w-3 h-3 rounded-full border border-[#88c040] ${idx === current ? 'bg-[#88c040]' : 'bg-white/60'}`}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  );
}

export default Feedback;