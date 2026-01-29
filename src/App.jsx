import React, { useState,useRef,useEffect} from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import Services from "./components/Services.jsx";
import OurWork from "./components/OurWork.jsx";
import Teams from "./components/Teams.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const outlineRef = useRef(null);
  const dotRef = useRef(null);

  //Refs for custom cursor position tracking
  const mouse = useRef({x:0, y:0});
  const position = useRef({x:0, y:0});

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

    };
document.addEventListener("mousemove", handleMouseMove);

    
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.15;
      position.current.y += (mouse.current.y - position.current.y) * 0.15;
      
      // Update outline position

     if(dotRef.current && outlineRef.current){
      dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      outlineRef.current.style.transform = `translate3d(${position.current.x - outlineRef.current.offsetWidth / 2}px, 
      ${position.current.y - outlineRef.current.offsetHeight / 2}px, 0)`;
     }
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);  
  // Custom cursor effect

  return (
    <div className="dark:bg-black ">
      <Navbar theme={theme} setTheme={setTheme} />
       <Hero />
      <main className="px-5">
        <Toaster /> 
        <TrustedBy />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />
      </main>
      {/* Custom cursor ring */}
      <div style={{transition:"transform 0.15s ease"}} ref={outlineRef} className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary pointer-events-none z-50"></div>
      {/* custom dot cursor */}
      <div ref={dotRef} className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-50"></div>
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
