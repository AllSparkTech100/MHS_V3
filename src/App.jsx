import Header from "./Components/Header";
import Pages from "./Pages/Pages";
import Footer from "./Components/Footer";
// import Preloader from './Components/Preloader'
// import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      delay: 50,
      offset: 200,
    });
    AOS.refresh()
  });


  return (
    <>
      <Header />
      <Pages />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;