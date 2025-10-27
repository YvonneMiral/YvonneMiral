// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import Navbar from "./Navbar";
// import Hero from "./Hero";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import Footer from "./Footer";

// export default function App() {
//   return (
//     <div className="app">
//       {/* Navbar */}
//       <Navbar />

//       {/* Routes */}
//       <main>
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }





import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
