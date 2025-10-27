// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import profile from "./assets/Yvonne.png";
// import resumePDF from "./assets/YvonneMiral_Resume.pdf";
// import bg from "./assets/bg.png";

// function TypingText({ text = "", speed = 90, cursor = "|" }) {
//   const [display, setDisplay] = useState("");

//   useEffect(() => {
//     let i = 1;
//     let mounted = true;
//     let timer = null;

//     const type = () => {
//       if (!mounted) return;
//       if (i <= text.length) {
//         setDisplay(text.slice(0, i));
//         i++;
//         timer = setTimeout(type, speed);
//       } else {
//         clearTimeout(timer);
//       }
//     };

//     timer = setTimeout(type, speed);

//     return () => {
//       mounted = false;
//       clearTimeout(timer);
//     };
//   }, [text, speed]);

//   return (
//     <span className="highlight" aria-label={text}>
//       {display}
//       <span className="typing-cursor" aria-hidden="true">
//         {cursor}
//       </span>
//     </span>
//   );
// }

// export default function Hero() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       q: "What makes you different from others?",
//       a: "I bring a unique mix of technical expertise and creativity...",
//     },
//     {
//       q: "Do you work well with teams?",
//       a: "Absolutely! I thrive in collaborative environments...",
//     },
//     {
//       q: "Can you adapt to new technologies quickly?",
//       a: "Yes. I actively explore emerging technologies...",
//     },
//   ];

//   return (
//     <>
//       {/* HERO SECTION */}
//       <section
//         className="hero"
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="hero-container">
//           {/* LEFT SIDE */}
//           <div className="hero-left">
//             <p className="eyebrow">WEBSITE • UI/UX • MULTIMEDIA</p>

//             <h1>
//               Hi, I'm <TypingText text="Yvonne Miral" speed={80} cursor={"|"} />
//             </h1>

//             <p className="subtitle">
//               Website and UI/UX Developer & Video Editor with strengths in IoT,
//               AI-assisted workflows, and system implementation. Based in Iligan
//               City, Philippines.
//             </p>

//             <div className="chip-row">
//               <span className="chip">JavaScript/TypeScript</span>
//               <span className="chip">React & .NET</span>
//               <span className="chip">Computer Vision</span>
//               <span className="chip">Video Editing</span>
//             </div>

//             <div className="cta">
//               <Link className="btn btn-primary" to="/projects">
//                 <i className="fa-solid fa-rocket"></i> See Projects
//               </Link>
//               <a
//                 className="btn btn-ghost"
//                 href={resumePDF}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i className="fa-regular fa-file-lines"></i> View Resume
//               </a>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="hero-right">
//             <img src={profile} alt="Yvonne Miral" className="hero-image" />
//           </div>
//         </div>
//       </section>

//       {/* SERVICES SECTION */}
//       <section className="services-section">
//         <div className="container">
//           <span className="section-subtitle">What I Offer</span>
//           <h2 className="section-title">
//             Explore My <span>Services</span>
//           </h2>

//           <div className="service-cards">
//             {[
//               {
//                 icon: "fa-code",
//                 title: "Web Development",
//                 desc: "Responsive and scalable web apps tailored to your needs.",
//               },
//               {
//                 icon: "fa-microchip",
//                 title: "IoT Solutions",
//                 desc: "Smart systems with real-time monitoring and automation.",
//               },
//               {
//                 icon: "fa-video",
//                 title: "Video Editing",
//                 desc: "Engaging multimedia content for brands and campaigns.",
//               },
//               {
//                 icon: "fa-brain",
//                 title: "AI-assisted Workflows",
//                 desc: "Enhancing productivity with cutting-edge AI tools.",
//               },
//             ].map((s, i) => (
//               <div key={i} className="service-card">
//                 <div className="icon-box">
//                   <i className={`fa-solid ${s.icon}`}></i>
//                 </div>
//                 <h3>{s.title}</h3>
//                 <p>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS SECTION */}
//       <section className="projects-preview">
//         <div className="container">
//           <div className="projects-header">
//             <h2>
//               Featured <span>Projects</span>
//             </h2>
//             <p>
//               Some of the projects I've developed, blending technology,
//               creativity, and functionality.
//             </p>
//           </div>

//           <div className="project-cards">
//             {[
//               {
//                 img: "/images/infraspex.jpg",
//                 title: "INFRASPEX (On-going)",
//                 desc: "Infrastructure inspection powered by sensors and computer vision technology.",
//                 tech: ["React", "Node.js", "IoT"],
//                 link: "https://infraspex.com",
//               },
//               {
//                 img: "/images/weather.jpg",
//                 title: "Centralized Weather Prediction System",
//                 desc: "City-wide weather tracking and forecasting platform for real-time insights.",
//                 tech: ["Python", "Flask", "API"],
//                 link: "https://iliganweather.com/",
//               },
//               {
//                 img: "/images/medisync.jpg",
//                 title: "MediSync Health Watch",
//                 desc: "Smart health monitoring wearable app connecting patients and doctors in real-time.",
//                 tech: ["Next.js", "MongoDB", "IoT"],
//                 link: "https://medisync.com",
//               },
//             ].map((p, i) => (
//               <div key={i} className="project-card">
//                 <div className="project-image">
//                   <img src={p.img} alt={p.title} />
//                   <div className="overlay">
//                     <a
//                       href={p.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="overlay-btn"
//                     >
//                       Visit Site →
//                     </a>
//                   </div>
//                 </div>
//                 <div className="project-content">
//                   <h3>{p.title}</h3>
//                   <p>{p.desc}</p>
//                   <div className="tech-tags">
//                     {p.tech.map((t, j) => (
//                       <span key={j}>{t}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="section-cta">
//             <Link className="btn proj_btn" to="/projects">
//               View All Projects
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CAREER OBJECTIVE SECTION */}
//       <section className="about">
//         <div className="about-container no-image">
//           <div className="about-content">
//             <h2>Career Objective</h2>
//             <p>
//               Passionate <strong>Web Developer</strong> with a strong foundation
//               in programming, UI/UX design, and database management. Dedicated
//               to creating responsive, user-focused web applications that combine
//               creativity and functionality.
//             </p>
//             <p>
//               I aim to contribute my expertise in{" "}
//               <strong>front-end and back-end development</strong> to a dynamic
//               organization where innovation, collaboration, and technology drive
//               impactful digital experiences.
//             </p>

//             <div className="about-highlights">
//               <div className="highlight-box">
//                 <i className="fa-solid fa-laptop-code"></i>
//                 <span>Web Development</span>
//               </div>
//               <div className="highlight-box">
//                 <i className="fa-solid fa-palette"></i>
//                 <span>UI/UX Design</span>
//               </div>
//               <div className="highlight-box">
//                 <i className="fa-solid fa-database"></i>
//                 <span>Database Management</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//        {/* EDUCATION */}
//       <section className="experience">
//         <div className="container">
//           <h2>Education</h2>
//           <div className="timeline">
//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-content">
//                 <h3>
//                   BS Computer Application – IoT, Mindanao State University - Iligan Institute of Technology
//                 </h3>
//                 <span>2020 – 2024</span>
//                 <p>Magna Cum Laude</p>
//               </div>
//             </div>

//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-content">
//                 <h3>Information Technology, Iligan Computer Institute</h3>
//                 <span>2018 – 2020</span>
//                 <p>With Honor</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* EXPERIENCE */}
//       <section className="experience">
//         <div className="container">
//           <h2>Experience</h2>
//           <div className="timeline">
//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-content">
//                 <h3>Project Technical Specialist I - MSU-IIT ARIS Lab</h3>
//                 <span>2025 – Present</span>
//                 <p>
//                   Working on full-stack applications, IoT integrations, and AI-assisted
//                   solutions, delivering scalable systems for businesses.
//                 </p>
//               </div>
//             </div>

//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-content">
//                 <h3>Research Assistant - MSU-IIT ARIS Lab</h3>
//                 <span>2024</span>
//                 <p>
//                   Worked on full-stack applications, IoT integrations, and AI-assisted
//                   solutions, delivering scalable systems for businesses.
//                 </p>
//               </div>
//             </div>

//             <div className="timeline-item">
//               <div className="timeline-dot"></div>
//               <div className="timeline-content">
//                 <h3>Video Editor - BFJ Studious (Internship)</h3>
//                 <span>2021 – 2022</span>
//                 <p>
//                   Created engaging multimedia content for marketing campaigns,
//                   social media, and corporate branding.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* HIGHLIGHTS */}
//       <section className="highlights">
//         <div className="container">
//           <h2>Highlights & Achievements</h2>
//           <div className="highlight-cards">
//             <div className="highlight-card">
//               <i className="fa-solid fa-award"></i>
//               <h3>Dean’s Lister</h3>
//               <p>
//                 Recognized for academic excellence during my BS in Information
//                 Technology at MSU-IIT.
//               </p>
//             </div>
//             <div className="highlight-card">
//               <i className="fa-solid fa-laptop-code"></i>
//               <h3>Capstone Innovation</h3>
//               <p>
//                 Developed an IoT-driven project that showcased the potential of
//                 embedded AI in real-world applications.
//               </p>
//             </div>
//             <div className="highlight-card">
//               <i className="fa-solid fa-users"></i>
//               <h3>Team Leadership</h3>
//               <p>
//                 Successfully led collaborative projects in both academic and
//                 freelance settings, ensuring timely and high-quality delivery.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

      



      
//      {/* SKILLS SECTION */}
//       <section className="skills-section">
//         <div className="skills-container">
//           <h2 className="skills-title">My <span>Core Skills</span></h2>
//           <p>I blend creativity and technology to craft seamless digital experiences.</p>

//           <div className="skills-grid">
//             {[
//               { name: "Website Developer", level: 95 },
//               { name: "UI/UX Developer", level: 90 },
//               { name: "Video Editing & Multimedia", level: 89 },
//               { name: "Full Stack Developer", level: 88 },
//             ].map((skill, index) => (
//               <div className="skill-card" key={index}>
//                 <div className="circle" style={{ "--value": skill.level }}>
//                   <svg>
//                     <circle cx="60" cy="60" r="54"></circle>
//                     <circle cx="60" cy="60" r="54"></circle>
//                   </svg>
//                   <div className="percentage">{skill.level}%</div>
//                 </div>
//                 <h3>{skill.name}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>




     


//     {/* FAQ SECTION */}
//       <section className="faq-section">
//         <div className="container">
//           <span className="section-subtitle">Why Choose Me</span>
//           <h2 className="section-title">
//             Frequently Asked <span>Questions</span>
//           </h2>

//           <div className="faq-list">
//             {faqs.map((item, index) => (
//               <div
//                 key={index}
//                 className={`faq-item ${activeIndex === index ? "active" : ""}`}
//               >
//                 <button
//                   className="faq-question"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   {item.q}{" "}
//                   <i
//                     className={`fa-solid fa-chevron-${
//                       activeIndex === index ? "up" : "down"
//                     }`}
//                   ></i>
//                 </button>
//                 {activeIndex === index && (
//                   <div className="faq-answer">
//                     <p>{item.a}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//        {/* GET IN TOUCH SECTION */}
//       <section className="get-in-touch">
//         <div className="container">
//           <span className="section-subtitle">Let’s Work Together</span>
//           <h2 className="section-title">Get in <span>Touch</span></h2>
//           <p className="get-in-touch-text">
//             Have a project in mind or just want to say hi?  
//             I’d love to hear from you—let’s create something amazing together.
//           </p>

//           <div className="get-in-touch-actions">
//             <a
//               href="mailto:yvonne.miral@gmail.com"
//               className="btn btn-primary"
//             >
//               <i className="fa-regular fa-envelope"></i> Send me an Email
//             </a>
//             <Link to="/contact" className="btn btn-ghost">
//               <i className="fa-solid fa-paper-plane"></i> Contact Page
//             </Link>
//           </div>

//           <div className="contacts">
//             <a className="social" href="https://github.com/YvonneMiral"target="_blank"rel="noopener noreferrer">
//               <i className="fa-brands fa-github"></i> GitHub
//             </a>

//             <a className="social"href="https://www.linkedin.com/in/yvonne-miral-98a84817a/"target="_blank"rel="noopener noreferrer">
//               <i className="fa-brands fa-linkedin"></i> LinkedIn
//             </a>

//             <a className="social"href="https://v2.onlinejobs.ph/jobseekers"target="_blank"rel="noopener noreferrer">
//               <i className="fa-solid fa-briefcase"></i> OnlineJobs
//             </a>

//             <a className="social"href="https://www.upwork.com/freelancers/~01f963154e0e51501b"target="_blank"rel="noopener noreferrer">
//               <i className="fa-brands fa-upwork"></i> Upwork
//             </a>

//             <a className="social"href="https://profile.indeed.com/?hl=en_PH&co=PH"target="_blank"rel="noopener noreferrer">
//               <i className="fa-solid fa-id-badge"></i> Indeed
//             </a>
//           </div>
//         </div>
//       </section>  
//     </>
//   );
// }












// Hero.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "./assets/Yvonne.png";
import resumePDF from "./assets/YvonneMiral_Resume.pdf";
import bg from "./assets/bg.png";
import journeyImg from "./assets/Yvonne.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette, faVideo, faBrain } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { faGithub, faLinkedin, faUpwork } from "@fortawesome/free-brands-svg-icons";
import { faIdBadge, faEnvelope, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import infraImg from "./assets/infra.png";
import weatherImg from "./assets/weather.png";



<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>


function TypingText({ text = "", speed = 90, cursor = "|" }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 1;
    let mounted = true;
    let timer = null;

    const type = () => {
      if (!mounted) return;
      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i++;
        timer = setTimeout(type, speed);
      } else {
        clearTimeout(timer);
      }
    };

    timer = setTimeout(type, speed);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [text, speed]);

  return (
    <span className="highlight" aria-label={text}>
      {display}
      <span className="typing-cursor" aria-hidden="true">
        {cursor}
      </span>
    </span>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const faqs = [
    {
      q: "What makes you different from others?",
      a: "I combine creativity and technical expertise, bridging design and development to deliver solutions that are both visually appealing and highly functional. I focus on understanding user needs to create meaningful, impactful experiences.",
    },
    {
      q: "Do you work well with teams?",
      a: "Absolutely! I thrive in collaborative environments, valuing open communication, shared learning, and teamwork to achieve better results efficiently and creatively.",
    },
    {
      q: "Can you adapt to new technologies quickly?",
      a: "Yes. I’m passionate about learning and experimenting with emerging tools and technologies, allowing me to integrate them effectively into projects and workflows.",
    },
  ];
  
const services = [
  { icon: faCode, title: "Web Development", desc: "Responsive and scalable websites that tell your brand’s story." },
  { icon: faPalette, title: "UI/UX Design", desc: "Designing intuitive, human-centered interfaces for great experiences." },
  { icon: faVideo, title: "Video Editing", desc: "Visual storytelling that captivates and communicates." },
  { icon: faBrain, title: "AI-assisted Workflows", desc: "Integrating AI tools to enhance productivity and innovation." },
];

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-container">
          <div className="hero-left">
            <p className="eyebrow">WEBSITE • UI/UX • MULTIMEDIA</p>
            <h1>
              Hi, I'm <TypingText text="Yvonne Miral" speed={80} cursor="|" />
            </h1>
            <p className="subtitle">
              A passionate Website & UI/UX Developer and Video Editor who turns ideas into interactive digital experiences.
              Based in Iligan City, Philippines.
            </p>
            <div className="chip-row">
              <span className="chip">JavaScript/TypeScript</span>
              <span className="chip">React & .NET</span>
              <span className="chip">Computer Vision</span>
              <span className="chip">Video Editing</span>
            </div>
            <div className="cta">
              <ScrollLink
                className="btn btn-primary"
                to="projects" 
                smooth={true}
                duration={500}
                offset={-50} 
              >
                <i className="fa-solid fa-rocket"></i> See Projects
              </ScrollLink>
              <a
                className="btn btn-ghost"
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-regular fa-file-lines"></i> View Resume
              </a>
            </div>
          </div>

          <div className="hero-right">
            <img src={profile} alt="Yvonne Miral" className="hero-image" />
          </div>
        </div>
      </section>

      {/* CAREER OBJECTIVE + JOURNEY WITH IMAGE */}
      <section id="about" className="career-objective">
        <div className="container">
          <div className="career-content">
            {/* LEFT IMAGE */}
            <div className="career-image">
              <img src={journeyImg} alt="My Journey" />
            </div>

            {/* TEXT BELOW IMAGE */}
            <div className="career-text">
              <h2>My Journey in Tech</h2>
              <p>
                Passionate Web Developer with a strong foundation in <strong>programming</strong>, 
                <strong>UI/UX design</strong>, and <strong>database management</strong>. Committed to building 
                responsive, user-focused web applications and delivering creative, efficient solutions. 
                I enjoy creating interactive websites, IoT systems, and <strong>user-friendly interfaces</strong> 
                that combine <strong>design</strong> and engineering.
              </p>
              <p>
                Outside of work, I explore music, digital art, travel, and gaming—fueling my creativity, 
                curiosity, and drive to innovate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="experience-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline-vertical">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>BS Computer Application – IoT</h3>
                <span>Mindanao State University - Iligan Institute of Technology | 2020 – 2024</span>
                <p>Graduated Magna Cum Laude</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Information Technology</h3>
                <span>Iligan Computer Institute | 2018 – 2020</span>
                <p>With Honor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="work" className="work-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="work-grid">
            <div className="work-card">
              <h3>Project Technical Specialist I</h3>
              <span>MSU-IIT ARIS Lab | 2025 – Present</span>
              <p>
                Developed company websites and full-stack applications integrating IoT and AI solutions for industry partners.
              </p>
            </div>

            <div className="work-card">
              <h3>Research Assistant</h3>
              <span>MSU-IIT ARIS Lab | 2024</span>
              <p>
                Collected and processed research data, developed web platforms, and implemented database-driven dashboards.
              </p>
            </div>

            <div className="work-card">
              <h3>Video Editor (Internship)</h3>
              <span>BFJ Studious | 2021 – 2022</span>
              <p>
                Created promotional videos and multimedia assets for marketing and social campaigns.
              </p>
            </div>

            <div className="work-card">
              <h3>Real Estate Marketing Assistant</h3>
              <span>Freelance</span>
              <p>
                Assisted in property marketing campaigns, client engagement, and promotional content creation.
              </p>
            </div>
          </div>
        </div>
      </section>
        



      {/* CORE SKILLS */}
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2 className="skills-title">
            My <span>Core Skills</span>
          </h2>
          <p>I blend creativity and technology to craft seamless digital experiences.</p>

          <div className="skills-grid">
            {[
              { name: "Website Development", level: 95 },
              { name: "UI/UX Design", level: 90 },
              { name: "Video Editing & Multimedia", level: 89 },
              { name: "Full Stack Development", level: 88 },
            ].map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="circle" style={{ "--value": skill.level }}>
                  <svg>
                    <circle cx="60" cy="60" r="54"></circle>
                    <circle cx="60" cy="60" r="54"></circle>
                  </svg>
                  <div className="percentage">{skill.level}%</div>
                </div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="container">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">
            Explore My <span>Services</span>
          </h2>

          <div className="service-cards">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="icon-box">
                  <FontAwesomeIcon icon={s.icon} size="2x" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      

      {/* PROJECTS */}
      <section id="projects" className="projects-preview">
        <div className="container">
          <div className="projects-header">
            <h2>
              Featured <span>Projects</span>
            </h2>
            <p>
              Every project I build tells a story—of challenges solved, people helped, and creativity in motion.
            </p>
          </div>

          <div className="project-cards">
            {[
              {
                img: infraImg,
                title: "INFRASPEX (On-going)",
                desc: "Infrastructure inspection powered by sensors and computer vision technology.",
                tech: ["React", "JSON", "AI", "Phyton"],
                link: "https://infraspex.com"
              },
              {
                img: weatherImg,
                title: "Weather Prediction System",
                desc: "City-wide weather tracking and forecasting for real-time insights.",
                tech: ["Python", "AI", "MySQL"],
                 link: "https://iliganweather.com"
              },
              // {
              //   img: infraImg,
              //   title: "MediSync Health Watch",
              //   desc: "Smart wearable connecting patients and doctors for real-time health monitoring.",
              //   tech: ["Next.js", "MongoDB", "IoT"],
              // },
            ].map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-image">
                  <img src={p.img} alt={p.title} />
                  <div className="overlay">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      Visit Site →
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tech-tags">
                    {p.tech.map((t, j) => (
                      <span key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link className="btn proj_btn" to="/projects">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="FAQ" className="faq-section">
        <div className="container">
          <span className="section-subtitle">Why Choose Me</span>
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.q}{" "}
                  <i
                    className={`fa-solid fa-chevron-${
                      activeIndex === index ? "up" : "down"
                    }`}
                  ></i>
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section-alt">
        <div className="contact-container">
          {/* LEFT SIDE - Message & Buttons */}
          <div className="contact-left">
            <span className="section-subtitle">Let’s Collaborate</span>
            <h2 className="section-title">
              Get in <span>Touch</span>
            </h2>
            <p className="contact-text">
              Have a project in mind or just want to say hi? Let’s create something amazing together.
            </p>
            <div className="contact-buttons">
              <a href="mailto:yvonne.miral@gmail.com" className="btn btn-primary">
                <i className="fa-regular fa-envelope"></i> yvonne.miral@gmail.com
              </a>
              <Link to="/contact" className="btn btn-ghost">
                <i className="fa-solid fa-paper-plane"></i> +63 926 826 4855
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - Social Links */}
          <div className="contact-right">
            <h3>Connect with Me</h3>
            <div className="social-icons">
              <a href="https://github.com/YvonneMiral" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/yvonne-miral-98a84817a/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.upwork.com/freelancers/~01f963154e0e51501b" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faUpwork} size="2x" />
              </a>
              <a href="https://profile.indeed.com/?hl=en_PH&co=PH" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faIdBadge} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
