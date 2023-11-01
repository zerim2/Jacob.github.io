import Image from 'next/image';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from './components/Contact';

export default function page() {
  return (
  
  <div>
  
  <Navbar />
  <Home />
  <About />
  <Skills />
  <Work />
  <Contact />
  </div>
  )
}

