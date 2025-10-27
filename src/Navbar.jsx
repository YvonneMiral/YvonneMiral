// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header>
//       <nav className="navbar">
//         <div className="logo">Yvonne</div>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/skills">Skills</Link></li>
//           <li><Link to="/projects">Projects</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }






import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "./assets/ymlogo.png"; // uploaded logo

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <ScrollLink to="home" smooth={true} duration={600} offset={-80} className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </ScrollLink>

        <ul className="nav-links">
          <li><ScrollLink to="home" smooth duration={600} offset={-80}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth duration={600} offset={-80}>About</ScrollLink></li>
          <li><ScrollLink to="education" smooth duration={600} offset={-80}>Education</ScrollLink></li>
          <li><ScrollLink to="work" smooth duration={600} offset={-80}>Work Experience</ScrollLink></li>
          <li><ScrollLink to="services" smooth duration={600} offset={-80}>Services</ScrollLink></li>
          <li><ScrollLink to="skills" smooth duration={600} offset={-80}>Skills</ScrollLink></li>
          <li><ScrollLink to="projects" smooth duration={600} offset={-80}>Projects</ScrollLink></li>
          <li><ScrollLink to="FAQ" smooth duration={600} offset={-80}>FAQ</ScrollLink></li>
          <li><ScrollLink to="contact" smooth duration={600} offset={-80}>Contact</ScrollLink></li>
        </ul>
      </div>
    </nav>
  );
}
