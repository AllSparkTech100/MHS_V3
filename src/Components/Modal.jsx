import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function ModalPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const eventDate = new Date("2025-05-10T10:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            const diff = eventDate - new Date().getTime();
            if (diff <= 0) {
              clearInterval(interval);
              setTimeLeft(0);
            } else {
              setTimeLeft(diff);
            }
          }, 1000);
    return () => clearInterval(interval);
}, [eventDate]);

const formatTime = (ms) => {
    const days = String(Math.floor(ms / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((ms / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((ms / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, '0');
    return `${days} Days : ${hours} Hrs : ${minutes} Min : ${seconds} Sec`;
};
useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
        setIsOpen(true);
    }
}, []);
const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenModal", "true");
};

return (
    isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-white h-auto p-3 rounded-2xl shadow-lg max-w-sm w-full relative"
            >
                <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 text-gray-600 focus:outline-none hover:text-gray-900"
                >
                    <IoClose size={30} />
                </button>
                <img
                    src="/calm.jpg"
                    alt="Sane Conference Flyer"
                    className="rounded-lg h-full object-cover bg-[centered_top] w-full"
                    loading="lazy"
                />
                <hr className="border-black my-5 border " />
                <div className="p-3 text-center">
                    <p className="text-gray-700 mb-4">{formatTime(timeLeft)}</p>
                    <h2 className="text-xl uppercase font-semibold mb-4 "> port-harcourt sane conference 2.0</h2>
                    <button className="mx-auto flex items-center text-center gap-2 bg-green-900 text-white px-4 py-2 rounded-lg font-semibold">
                        <a href="https://forms.gle/NUfgdDNu23USV6FW8" rel="noopener noreferrer" target="_blank">
                            Register Now
                        </a>
                    </button>
                </div>

            </motion.div>
        </div>
    )
);
}