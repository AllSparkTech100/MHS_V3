import { useState, useEffect } from "react";
// import { Gift } from "lucide-react";

export default function Register() {
  const eventDate = new Date("2025-05-10T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
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

  return (
    <div className='hidden lg:block 
     '>
      <div className="fixed top-17  w-full bg-slate-900 text-white flex items-center gap-4 justify-between p-3 px-6 shadow-lg">
        <p className="text-lg uppercase font-semibold">ph sane conference <span className="font-bold">2.0</span></p>
        <p className="text-xl font-bold">{formatTime(timeLeft)}</p>
        <button className="flex items-center gap-2 bg-cyan-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-500">
          <a href="http://" target="_blank" rel="noopener noreferrer">

            Register Now
          </a>
        </button>
      </div>
    </div>
  );
}
