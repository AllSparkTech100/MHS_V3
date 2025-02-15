import Header from "./Components/Header";
import Pages from "./Pages/Pages";
import Footer from "./Components/Footer";

import { Analytics } from "@vercel/analytics/react"

function App() {
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
