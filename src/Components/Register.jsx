import { useState, useEffect } from "react";
// import { Gift } from "lucide-react";

export default function Register() {
  const eventDate = new Date("2025-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  const formatTime = (ms) => {
    const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((ms / 1000 / 60) % 60)).padStart(2, '0');
    const hours = String(Math.floor((ms / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div className="fixed top-20 left-0 w-full bg-blue-900 text-white flex items-center justify-between p-3 px-6 shadow-lg">
      <p className="text-lg font-semibold">Winter sale: <span className="font-bold">90% off</span></p>
      <p className="text-xl font-bold">{formatTime(timeLeft)}</p>
      <button className="flex items-center gap-2 bg-cyan-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-500">
        {/* <Gift size={18} /> */}
         View offer
      </button>
    </div>
  );
}
