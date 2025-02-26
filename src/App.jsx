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
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
      delay: 100,
      offset: 200,
    });
    // AOS.refresh()
  });

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000); // Adjust timing as needed (matches animation duration)

  //   return () => clearTimeout(timeout);
  // }, []);


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