import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "path", label: "Education & Experience" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "FAQ", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`neo-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <h1 className="nav-title">
            <ScrollLink to="home" smooth duration={600} offset={-80}>
              Y<span>M</span>
            </ScrollLink>
          </h1>


          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <ScrollLink
                  to={link.id}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={closeMenu}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="menu-btn" onClick={toggleMenu}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Close Button Inside */}
        <button className="close-btn" onClick={closeMenu}>
          <X size={28} />
        </button>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                smooth
                duration={600}
                offset={-80}
                onClick={closeMenu}
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}
