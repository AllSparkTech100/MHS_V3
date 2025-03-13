import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Library from "./Library";
import Services from "./Services";

import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/library" element={<Library />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Pages;

