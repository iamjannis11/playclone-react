import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./component/navbar/Navbar";
import Hero from "./layouts/hero/Hero";
import Footer from "./component/footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default App;
