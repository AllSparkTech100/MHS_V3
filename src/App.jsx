/* eslint-disable react/prop-types */
import Header from "./Components/Header";
import Pages from "./Pages/Pages";
import Footer from "./Components/Footer";
// import Preloader from './Components/Preloader'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"

const Preloader = ({ imageUrl, onLoadComplete }) => {
  const pieces = 9; // Number of pieces (3x3 grid)

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => onLoadComplete();
  }, [imageUrl, onLoadComplete]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-60 h-60 grid grid-cols-3 grid-rows-3">
        {[...Array(pieces)].map((_, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          return (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: (col - 1) * 100,
                y: (row - 1) * 100,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="w-20 h-20 bg-cover"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: `${-col * 100}% ${-row * 100}%`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default function App() {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
      {
        isLoading ? (<Preloader imageUrl="/mhslogo.webp" onLoadComplete={() => setIsLoading(true)} />) :
          (
            <><Header /><Pages /><Footer /><Analytics /></>
          )
      }

    </>
  );
}

//  App;