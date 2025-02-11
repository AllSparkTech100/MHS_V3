import Header from "./Components/Header";
import Pages from "./Pages/Pages";
import Footer from "./Components/Footer";
import Register from "./Components/Register";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Header />
      <Register/>
      <Pages />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
