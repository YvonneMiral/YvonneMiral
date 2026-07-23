import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faUpwork } from "@fortawesome/free-brands-svg-icons";
import {
  Code2,
  PenTool,
  Video,
  Mail,
  Phone,
  FileText,
  Plus,
  Minus,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

import resumePDF from "./assets/YvonneMiral_Resume.pdf";
import heroBg from "./assets/bg2.png";
import sectionBg from "./assets/bg1.png";
import contactBg from "./assets/bg.png";
import journeyImg from "./assets/Yvonne.png";
import infraImg from "./assets/infra.png";
import weatherImg from "./assets/weather.png";
import profile from "./assets/Yvonne.png";
import OnlineJobsLogo from "./assets/OnlineJobsLogo.png";
import thesis from "./assets/Thesis.pdf";
import thesisimg from "./assets/Thesis.png";

function RotatingText({ words, typeSpeed = 65, deleteSpeed = 35, pause = 1500 }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timer;

    if (!deleting && display.length < current.length) {
      timer = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typeSpeed);
    } else if (!deleting && display.length === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      timer = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), deleteSpeed);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [display, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="rotating-text">
      {display}
      <span className="rotating-cursor" aria-hidden="true"></span>
    </span>
  );
}

export default function Hero() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

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
      a: "Yes. I'm passionate about learning and experimenting with emerging tools and technologies, allowing me to integrate them effectively into projects and workflows.",
    },
  ];

  const services = [
    {
      icon: <Code2 size={26} />,
      title: "Web Development",
      desc: "I build modern, responsive, high-performing websites — from personal portfolios to full-scale platforms — that are fast, secure, and easy to manage.",
    },
    {
      icon: <PenTool size={26} />,
      title: "UI/UX Design",
      desc: "I design intuitive, visually appealing interfaces grounded in real user needs, balancing creativity with usability so every product feels effortless to use.",
    },
    {
      icon: <Video size={26} />,
      title: "Video Editing",
      desc: "I turn raw footage into engaging, story-driven videos, pairing the right visuals, pacing, and sound design to leave a lasting impression.",
    },
  ];

  const experienceItems = [
    {
      title: "Virtual Assistant",
      place: "Lotus Tickets",
      date: "January 2026 – Present",
      desc: [
        "Handled sales, order processing, and customer support.",
        "Collaborated with cross-functional teams to achieve business goals.",
      ],
    },
    {
      title: "Software Developer",
      place: "Infraspex Inc",
      date: "January 2026 – June 2026",
      desc: [
        "Developed and maintained web applications and company websites.",
        "Built custom software solutions for internal operations and client needs.",
        "Enhanced system performance through updates, maintenance, and bug fixes.",
      ],
    },
    {
      title: "Project Technical Specialist I",
      place: "Mindanao State University - Iligan Institute of Technology",
      date: "January 2025 – December 2025",
      desc: [
        "Maintained the organization's official website and internal software systems.",
        "Provided technical support and performed system maintenance.",
        "Prepared technical documentation, reports, and presentations.",
      ],
    },
    {
      title: "Research Assistant",
      place: "Mindanao State University - Iligan Institute of Technology",
      date: "August 2024 – December 2024",
      desc: [
        "Developed and maintained a research project website.",
        "Integrated database data for real-time website display.",
        "Participated in meetings and supported research activities.",
      ],
    },
    {
      title: "Video Editor (Internship)",
      place: "BFJ Studious",
      date: "2021 – 2022",
      desc: [
        "Edited travel content for Instagram, TikTok, Facebook, and YouTube.",
        "Created engaging videos showcasing travel adventures.",
      ],
    },
    {
      title: "Real Estate Marketing Assistant",
      place: "Freelance",
      date: "",
      desc: [
        "Created and posted ads across social media and listing platforms.",
        "Generated leads and supported affordable housing and financing programs.",
      ],
    },
  ];

  const educationItems = [
    {
      title: "BS in Computer Applications, major in IoT",
      place: "Mindanao State University - Iligan Institute of Technology",
      date: "2020 – July 2024",
      desc: ["Graduated Magna Cum Laude.", "Specialized in IoT systems and web technologies."],
    },
    {
      title: "Information Technology",
      place: "Iligan Computer Institute",
      date: "2018 – 2020",
      desc: ["Graduated with High Honor.", "Built a foundation in programming and design principles."],
    },
  ];

  const heroSkills = [
    "React.js",
    "JavaScript",
    "Python",
    "MySQL",
    "UI/UX Design",
    "Full-Stack Web Development",
    "Git & GitHub",
    "Video Editing",
  ];

  const skillGroups = [
    {
      title: "Programming & Web",
      items: ["React.js", "JavaScript", "Python", "Full-Stack Web Development"],
    },
    {
      title: "Database & Cloud",
      items: ["MySQL", "SQL", "Cloud Databases"],
    },
    {
      title: "Hosting & Version Control",
      items: ["Vercel", "Render", "Hostinger", "Git", "GitHub"],
    },
    {
      title: "Design & Support",
      items: [
        "UI/UX Design",
        "System Maintenance & Technical Support",
        "Technical Documentation",
        "Video Editing",
        "Digital Marketing & Social Media Management",
      ],
    },
  ];

  const projects = [
    {
      img: infraImg,
      title: "Infraspex (DOST-Funded Project)",
      desc: "An AI-powered infrastructure management platform using drones and LiDAR technology for crack detection and distress analysis.",
      tech: ["React", "Python", "MySQL", "Supabase"],
      link: "https://infraspex.com",
    },
    {
      img: weatherImg,
      title: "Weather Prediction & Monitoring System (DOST-Funded Project)",
      desc: "A centralized system for flood monitoring, integrating IoT sensors with predictive AI analytics for flood-prone cities.",
      tech: ["Python", "AI", "MySQL", "PHP"],
      link: "https://iliganweather.com",
    },
    {
      img: thesisimg,
      title: "Smart Drainage Waste Management System (Undergraduate Thesis)",
      desc: "An IoT-based Smart Drainage Waste Management System built to improve waste collection efficiency and support sustainable urban development.",
      tech: ["IoT", "Microcontroller", "Sensors"],
      link: thesis,
      isPDF: true,
    },
    {
      title: "Object Detection (Artificial Intelligence System)",
      desc: "Trained an image processing model using YOLOv8 and Edge Impulse to detect and classify individuals through real-time object detection.",
      tech: ["YOLOv8", "Edge Impulse", "Python"],
    },
    {
      title: "Medisync (Start-Up)",
      desc: "A healthcare startup integrating medical smartwatches to monitor patients' health in real time, enabling doctor consultations and remote health data access.",
      tech: ["React", "Healthcare", "IoT"],
    },
    {
      title: "Sumobot Competition (Robotics)",
      desc: "Designed and built a sumo robot using microcontrollers, ultrasonic, and IR sensors — placed 4th out of 8 teams.",
      tech: ["Robotics", "Microcontroller", "Sensors"],
    },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="hero-inner">
          <div className="hero-photo-badge">
            <img src={profile} alt="Yvonne Miral" />
          </div>
          <div className="hero-ticker" aria-hidden="true">
            <div className="hero-ticker-track">
              {[...heroSkills, ...heroSkills].map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
          <h1>
            Hi, I'm <span className="grad-text">Yvonne Miral</span>
          </h1>
          <p className="hero-desc">
            Software Developer focused on creating efficient web applications, custom software,
            and innovative digital solutions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-solid">
              See Projects <ArrowUpRight size={18} />
            </a>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <FileText size={18} /> View Resume
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about" style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-frame">
              <img src={journeyImg} alt="Yvonne Miral" />
            </div>
            <div className="about-badge">
              <span className="status-dot" aria-hidden="true"></span>
              <span>Open to Work</span>
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">About Me</p>
            <h2>
              My Journey <span className="grad-text">in Tech</span>
            </h2>
            <p>
              <strong>Software Developer</strong> with professional experience in software
              development, web application development, technical support, and digital
              solutions. <strong>Skilled in developing and maintaining websites, building custom
              software, and delivering reliable technology solutions </strong>. Adaptable,
              detail-oriented, and committed to creating high-quality solutions in fast-paced
              environments.
            </p>
            <p>
              Outside of work, I enjoy playing the <strong>guitar</strong> and{" "}
              <strong>piano</strong>, watching movies, and <strong>serving in my church community</strong> as a
              choir member, lay minister, and altar server.
            </p>
            <div className="about-facts">
              {[
                "Full-Stack Web Development",
                "IoT & Embedded Systems",
                "UI/UX Design",
                "Video Editing & Multimedia",
              ].map((f, i) => (
                <span className="fact-pill" key={i}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section id="path" className="timeline" style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className="section-head">
          <p className="eyebrow">Education & Experience</p>
          <h2>
            My Path <span className="grad-text">So Far</span>
          </h2>
        </div>

        <div className="timeline-columns">
          <div className="timeline-column">
            <h3 className="timeline-column-title">
              <Briefcase size={18} /> Experience
            </h3>
            <div className="timeline-track">
              {experienceItems.map((item, i) => (
                <div className="timeline-row" key={i}>
                  <div className="timeline-marker">
                    <Briefcase size={16} />
                  </div>
                  <div className="timeline-content">
                    {item.date && <span className="timeline-date">{item.date}</span>}
                    <h3>{item.title}</h3>
                    <span className="timeline-place">{item.place}</span>
                    <ul>
                      {item.desc.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-column">
            <h3 className="timeline-column-title">
              <GraduationCap size={18} /> Education
            </h3>
            <div className="timeline-track">
              {educationItems.map((item, i) => (
                <div className="timeline-row" key={i}>
                  <div className="timeline-marker">
                    <GraduationCap size={16} />
                  </div>
                  <div className="timeline-content">
                    {item.date && <span className="timeline-date">{item.date}</span>}
                    <h3>{item.title}</h3>
                    <span className="timeline-place">{item.place}</span>
                    <ul>
                      {item.desc.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="skills" style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className="section-head">
          <p className="eyebrow">What I Work With</p>
          <h2>
            Core <span className="grad-text">Skills</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-group" key={i}>
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.items.map((item, j) => (
                  <span key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="services" style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className="section-head">
          <p className="eyebrow">My Services</p>
          <h2>
            Crafting <span className="grad-text">Digital Excellence</span>
          </h2>
          <p className="section-subtitle">
            I transform visionary ideas into seamless digital experiences through innovation and
            technology.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, index) => (
            <div className="service-card" key={index}>
              <span className="service-index">0{index + 1}</span>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="projects" style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className="section-head">
          <p className="eyebrow">Featured Work</p>
          <h2>
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Each project I've built merges creativity with precision — solving real problems
            through design and code.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-media">
                {p.img ? (
                  <img src={p.img} alt={p.title} />
                ) : (
                  <div className="project-placeholder">
                    <Code2 size={44} />
                  </div>
                )}
                {p.link && (
                  <div className="project-link-overlay">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-visit">
                      {p.isPDF ? "Read Article" : "Visit Site"} <ArrowUpRight size={16} />
                    </a>
                  </div>
                )}
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tech">
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
      <section id="FAQ" className="faq" style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className="section-head">
          <p className="eyebrow">Why Choose Me</p>
          <h2>
            Frequently Asked <span className="grad-text">Questions</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={index} className={`faq-item ${openFaq === index ? "open" : ""}`}>
              <button className="faq-q" onClick={() => toggleFaq(index)}>
                <span>{item.q}</span>
                {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact" style={{ backgroundImage: `url(${contactBg})` }}>
        <div className="contact-inner">
          <div className="contact-left">
            <p className="eyebrow">Let's Collaborate</p>
            <h2>
              Get in <span className="grad-text">Touch</span>
            </h2>
            <p>Have a project in mind or just want to say hi? Let's create something amazing together.</p>
            <div className="contact-actions">
              <a href="mailto:yvonne.miral@gmail.com" className="btn btn-solid">
                <Mail size={18} /> yvonne.miral@gmail.com
              </a>
              <a href="tel:+639268264855" className="btn btn-ghost">
                <Phone size={18} /> +63 926 826 4855
              </a>
            </div>
          </div>

          <div className="contact-right">
            <h3>Connect with Me</h3>
            <div className="social-row">
              <a href="https://github.com/YvonneMiral" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/yvonne-miral-98a84817a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01f963154e0e51501b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faUpwork} size="lg" />
              </a>
              <a href="https://profile.indeed.com/?hl=en_PH&co=PH" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faIdBadge} size="lg" />
              </a>
              <a
                href="https://www.onlinejobs.ph/jobseekers/info/2102218"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={OnlineJobsLogo} alt="OnlineJobs.ph" style={{ width: 22, height: 22 }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">© 2024 Yvonne Miral. All rights reserved.</section>
    </>
  );
}
