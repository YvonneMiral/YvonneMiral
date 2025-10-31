import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"; // solid icons
import { faGithub, faLinkedin, faUpwork } from "@fortawesome/free-brands-svg-icons"; // brand icons
import { FaCode, FaPencilRuler, FaVideo } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

import resumePDF from "./assets/YvonneMiral_Resume.pdf";
import journeyImg from "./assets/Yvonne.png";
import infraImg from "./assets/infra.png";
import weatherImg from "./assets/weather.png";
import bg2 from "./assets/bg2.png";
import bg1 from "./assets/bg1.png";
import bg4 from "./assets/bg4.gif";
import bg from "./assets/bg.png";
import profile from "./assets/Yvonne.png"; 
import OnlineJobsLogo from "./assets/OnlineJobsLogo.png";

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

 const OnlineJobsIcon = ({ size = 32 }) => (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/OnlineJobs_logo.png"
      alt="OnlineJobs.ph"
      style={{ width: size, height: size }}
    />
    );

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    {
      icon: <FaCode size={40} color="#0d4564" />,
      title: "Web Development",
      desc: "I create modern, responsive, and high-performing websites that look great on any device. From personal portfolios to full-scale business platforms, I build sites that are fast, secure, and easy to manage helping you connect with your audience and grow your online presence.",
    },
    {
      icon: <FaPencilRuler size={40} color="#0d4564" />,
      title: "UI/UX Design",
      desc: "I design intuitive and visually appealing user interfaces that focus on real user needs. My approach combines creativity and usability ensuring your product is not only beautiful but also delivers a smooth and satisfying experience that keeps users engaged.",
    },
    {
      icon: <FaVideo size={40} color="#0d4564" />,
      title: "Video Editing",
      desc: "I transform raw footage into engaging, story-driven videos. Whether it’s for marketing, social media, or personal projects, I add the right visuals, pacing, and sound design to communicate your message effectively and leave a lasting impression.",
    },
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
      id="home"
      className="neo-hero"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <div className="neo-overlay"></div>

      <div className="neo-container">
        {/* LEFT SIDE */}
        <div className="neo-text">
          <p className="neo-tag">Website • UI/UX • Multimedia</p>
          <h1>
            Hi, I'm <span className="neo-cyan">Yvonne Miral</span>{" "}
          </h1>
          <p className="neo-desc">
            A passionate Website & UI/UX Developer and Video Editor who crafts
            immersive digital experiences blending creativity and code. Based in
            Iligan City, Philippines.
          </p>
          <div className="neo-btns">
            <a href="#projects" className="btn-cyber">
              See Projects
            </a>
            <a
                className="btn-outline"
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
              >
              <i className="fa-regular fa-file-lines"></i> View Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="neo-image">
          <div className="glass-frame">
            <img src={profile} alt="Yvonne Miral" />
          </div>
        </div>
      </div>
    </section>

      <section id="about" className="journey-section" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="journey-wrapper">
          {/* ===== INTRO ===== */}
            <div className="journey-intro">
              <div className="journey-text">
                <h2>My Journey <span>in Tech</span></h2>
                <p>
                  I’m a <strong>Web Developer</strong> passionate about blending <strong>design</strong> and <strong>technology</strong> to craft intuitive, responsive, and user-focused web experiences. Skilled in <strong>programming</strong>, <strong>UI/UX design</strong>, and <strong>database management</strong>, I aim to build creative and efficient solutions.
                </p>
                <p>
                  Outside of work, I enjoy playing the <strong>guitar</strong> and <strong>piano</strong>, <strong>watching movies</strong>, and serving in my <strong>church community</strong> as a <strong>choir member</strong>, <strong>lay minister</strong>, and <strong>altar server</strong>.
                </p>
              </div>
            <div className="journey-photo">
              <img src={journeyImg} alt="My Journey" />
            </div>
          </div>

          {/* ===== TIMELINE ===== */}
          <div id="path" className="timeline-container">
            <h2>My Path <span>So Far</span></h2>
            <div className="timeline-grid">
              {[
                {
                  title: "BS in Computer Applications major in IoT",
                  place: "Mindanao State University - Iligan Institute of Technology | 2020 – 2024",
                  desc: [
                    "Graduated Magna Cum Laude.",
                    "Specialized in IoT Systems and Web Technologies."
                  ],
                },
                {
                  title: "Information Technology",
                  place: "Iligan Computer Institute | 2018 – 2020",
                  desc: [
                    "With Honors.",
                    "Gained strong foundation in programming and design principles."
                  ],
                },
                {
                  title: "Project Technical Specialist I",
                  place: "Mindanao State University - Iligan Institute of Technology | Jan 2025 – Present",
                  desc: [
                    "Maintained official website and internal software systems.",
                    "Provided technical support and performed system maintenance.",
                    "Prepared technical documentation, reports, and presentations."
                  ],
                },
                {
                  title: "Research Assistant",
                  place: "Mindanao State University - Iligan Institute of Technology | Aug 2024 - Dec 2024",
                  desc: [
                    "Developed and maintained research project website.",
                    "Integrated databases for real-time data display.",
                    "Supported research activities and meetings."
                  ],
                },
                {
                  title: "Video Editor (Intern)",
                  place: "BFJ Studious | 2024",
                  desc: [
                    "Edited and produced travel videos for social media.",
                    "Created engaging content to inspire and connect audiences."
                  ],
                },
                {
                  title: "Marketing Assistant",
                  place: "Freelance",
                  desc: [
                    "Managed and monitored social media and listing ads.",
                    "Generated leads and promoted housing options and financing programs."
                  ],
                },
              ].map((item, i) => (
                <div className="timeline-card" key={i}>
                  <h3>{item.title}</h3>
                  <span>{item.place}</span>
                  <ul className="timeline-desc">
                    {item.desc.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>


          {/* ===== SKILLS ===== */}
          <div id="skills" className="skills-section">
            <h2>Core <span> Skills</span></h2> 
            <div className="skills-grid">
              {[
                { name: "Web Development", level: 95 },
                { name: "UI/UX Design", level: 90 },
                { name: "Full Stack Development", level: 88 },
                { name: "Video Editing & Multimedia", level: 85 },
              ].map((skill, i) => (
                <div className="skill-card" key={i}>
                  <div className="skill-info">
                    <p>{skill.name}</p>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== SERVICES ===== */}
      <section id="services" className="modern-showcase-section">
        <div className="modern-header">
          <p className="section-eyebrow">MY SERVICES</p>
          <h2>
            Crafting <span>Digital Excellence</span>
          </h2>
          <p className="section-subtitle">
            I transform visionary ideas into seamless digital experiences through innovation and technology.
          </p>
        </div>

        <div className="modern-services-grid">
          {services.map((s, index) => (
            <div className="modern-card" key={index}>
              <div className="icon-ring">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="modern-projects-section" style={{ backgroundImage: `url(${bg4})` }}>
        <div className="modern-projects-header">
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p>
            Each project I’ve built merges creativity with precision solving real problems through design and code.
          </p>
        </div>

        <div className="modern-projects-grid">
          {[
            {
              img: infraImg,
              title: "INFRASPEX (DOST-Funded Project)",
              desc: "An AI-powered infrastructure management platform using drones and LiDAR technology for crack detection and distress analysis.",
              tech: ["React", "JSON", "Python", "MySQL", "Supabase"],
              link: "https://infraspex.com",
            },
            {
              img: weatherImg,
              title: "Weather Prediction & Monitoring System",
              desc: "A centralized system for flood monitoring, integrating IoT sensors with predictive AI analytics.",
              tech: ["Python", "AI", "MySQL", "PHP"],
              link: "https://iliganweather.com",
            },
              ].map((p, i) => (
                <div key={i} className="modern-project-card">
                  <div className="project-image">
                    <img src={p.img} alt={p.title} />
                    <div className="image-overlay">
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="visit-btn">
                        Visit Site →
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tech-stack">
                      {p.tech.map((t, j) => (
                        <span key={j}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
    </section>

    {/* ===== FAQ ===== */}
    <section id="FAQ" className="modern-faq-section">
      <div className="faq-wrapper">
        <div className="faq-header">
          <p className="section-eyebrow">Why Choose Me</p>
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
        </div>

        <div className="faq-grid">
          {faqs.map((item, index) => (
            <div key={index} className={`faq-card ${activeIndex === index ? "open" : ""}`}>
              <button className="faq-toggle" onClick={() => toggleFAQ(index)}>
                <span>{item.q}</span>
                <i className={`fa-solid fa-chevron-${activeIndex === index ? "up" : "down"}`}></i>
              </button>
              <div className="faq-body">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ===== CONTACT ===== */}
    <section id="contact" className="contact-section-modern"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
      <div className="contact-overlay"></div>
        <div className="contact-container">
          {/* LEFT SIDE - Message & Buttons */}
          <div className="contact-left">
            <span className="contact-subtitle">Let’s Collaborate</span>
            <h2>
              Get in <span>Touch</span>
            </h2>
            <p className="contact-text">
              Have a project in mind or just want to say hi? Let’s create something amazing together.
            </p>
            <div className="contact-buttons">
              <a href="mailto:yvonne.miral@gmail.com" className="btn btn-primary">
                <i className="fa-regular fa-envelope"></i> yvonne.miral@gmail.com
              </a>
              <Link to="/contact" className="btn btn-secondary">
                <i className="fa-solid fa-phone"></i> +63 926 826 4855
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
            <a href="https://www.onlinejobs.ph/jobseekers/info/2102218" target="_blank" rel="noopener noreferrer">
              <img src={OnlineJobsLogo} alt="OnlineJobs.ph" style={{ width: 32, height: 32 }} />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section  className="footer">
      © 2025 Yvonne Miral. All rights reserved.
    </section>
    </>
  );
}
