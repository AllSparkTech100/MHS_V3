import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Abuja from "../Sliding Imgs/Abuja";
import PHC from "../Sliding Imgs/PHC";
import Akwa from "../Sliding Imgs/Akwa";

const items = [
  { id: "abuja", name: "Abuja Art Therapy", Component: Abuja, thumb: "/Abjt/aj2.webp" },
  { id: "phc", name: "Port Harcourt Art Therapy", Component: PHC, thumb: "/pha/ph2.webp" },
  { id: "akwa", name: "Akwa Ibom Art Therapy", Component: Akwa, thumb: "/akw/ak2.webp" },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function openModal(item) {
    setActive(item);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setActive(null);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => openModal(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openModal(item)}
            aria-label={`Open ${item.name} gallery`}
          >
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72">
              <img
                src={item.thumb}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="w-full p-4 text-white bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm opacity-90">Click to view gallery</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {open && active && (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center pt-20"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} gallery modal`}
        >
          <div className="absolute inset-0 bg-black/60" onClick={closeModal} />

          <div className=" relative z-10 w-full max-w-5xl max-h-[calc(100vh-5rem)] mx-4 overflow-y-auto bg-white rounded-lg shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">{active.name}</h3>
              <button
                onClick={closeModal}
                className="text-gray-700 lg:cursor-pointer focus:outline-none"
                aria-label="Close gallery modal"
              >
                <IoClose size={20} />
              </button>
            </div>

            <div className="p-4">
              <active.Component />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;