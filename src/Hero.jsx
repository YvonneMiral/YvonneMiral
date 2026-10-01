import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faUpwork } from "@fortawesome/free-brands-svg-icons";
import {
  Code2,
  BrainCircuit,
  Cpu,
  LayoutDashboard,
  ServerCog,
  Clapperboard,
  BadgeCheck,
  Layers,
  Database,
  Cloud,
  Wrench,
  PenTool,
  Users,
  CalendarDays,
  MapPin,
  Award,
  Mic,
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
import journeyImg from "./assets/profile.jpg";
import infraImg from "./assets/infra.png";
import weatherImg from "./assets/weather.png";
import profile from "./assets/Yvonne.png";
import OnlineJobsLogo from "./assets/OnlineJobsLogo.png";
import thesis from "./assets/Thesis.pdf";
import thesisimg from "./assets/Thesis.png";
import placeholderGif from "./assets/projects/placeholder.gif";

// Temporary GIFs — replace each one with the real project GIF once available, e.g.
// import bridgeInspectionGif from "./assets/projects/bridge-inspection.gif";
const bridgeInspectionGif = placeholderGif;
const warehouseManagementGif = placeholderGif;
const warehouseMonitoringGif = placeholderGif;
const hrisGif = placeholderGif;
const studentManagementGif = placeholderGif;
const objectDetectionGif = placeholderGif;
const sumobotGif = placeholderGif;

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

  const serviceStats = [
    { value: "2+", label: "Years of Professional Experience" },
    { value: "10+", label: "Systems & Projects Built" },
    { value: "2", label: "DOST-Funded Projects" },
  ];

  const aboutHighlights = [
    {
      icon: <BadgeCheck size={18} />,
      title: "2 DOST-Funded Projects",
      desc: "Developer on government-funded research for infrastructure and flood monitoring.",
    },
    {
      icon: <Code2 size={18} />,
      title: "10+ Systems Built",
      desc: "AI inspection, IoT monitoring, HR, warehouse, and school management platforms.",
    },
    {
      icon: <Layers size={18} />,
      title: "Full-Stack Toolkit",
      desc: "React.js, Vue.js, Node.js, PHP, Python, and MySQL — front end to database.",
    },
    {
      icon: <Cpu size={18} />,
      title: "IoT & AI Background",
      desc: "Degree in Computer Application, major in IoT, with hands-on AI and robotics work.",
    },
    {
      icon: <Mic size={18} />,
      title: "Speaker at iSCENE 2025",
      desc: "Represented Infraspex as a speaker at the International Smart City Exposition and Networking Engagement in Cauayan, Isabela, a gathering of innovators and public officials.",
    },
    {
      icon: <Users size={18} />,
      title: "Team & Client Ready",
      desc: "Worked with research teams, tech companies, and customers in support roles.",
    },
  ];

  const services = [
    {
      icon: <Code2 size={26} />,
      title: "Custom Software & Web Applications",
      desc: "End-to-end, full-stack systems built around how your business actually runs — from clean, intuitive UI to secure databases and back-end logic that scales.",
      proof: "Built HR, warehouse, and student management systems",
      tags: ["React.js", "Vue.js", "Node.js", "PHP", "MySQL"],
    },
    {
      icon: <BrainCircuit size={26} />,
      title: "AI & Computer Vision Solutions",
      desc: "Turn images and video into decisions. I integrate AI models that detect, classify, and map what matters — automating work that used to take hours of manual inspection.",
      proof: "AI damage detection for infrastructure & AI bag detection for warehouses",
      tags: ["YOLOv8", "Edge Impulse", "Python", "Object Detection"],
    },
    {
      icon: <Cpu size={26} />,
      title: "IoT & Real-Time Monitoring",
      desc: "Connect sensors, stations, and devices to a single live platform with automated alerts — so problems are caught early, not after the damage is done.",
      proof: "City-wide weather & water-level monitoring for flood-prone Iligan",
      tags: ["Sensors", "Microcontrollers", "Real-Time Data", "Alerts"],
    },
    {
      icon: <LayoutDashboard size={26} />,
      title: "Dashboards, Analytics & Reporting",
      desc: "Make your data work for you with monitoring dashboards, GPS mapping, analytics, and automated report generation that give teams clear, instant visibility.",
      proof: "Inspection dashboards, inventory analytics & automated reports",
      tags: ["Data Visualization", "Analytics", "GPS Mapping", "Reports"],
    },
    {
      icon: <ServerCog size={26} />,
      title: "Deployment, Maintenance & Tech Support",
      desc: "Reliable systems long after launch — deployment, performance optimization, bug fixes, troubleshooting, and clear technical documentation your team can rely on.",
      proof: "Maintained official websites & internal systems at MSU-IIT and Infraspex",
      tags: ["Vercel", "Render", "Hostinger", "Git", "Documentation"],
    },
    {
      icon: <Clapperboard size={26} />,
      title: "Video Editing & Digital Content",
      desc: "Scroll-stopping, story-driven videos and social content that connect with audiences and grow your brand across every platform.",
      proof: "Edited travel content for Instagram, TikTok, Facebook & YouTube",
      tags: ["Video Editing", "Social Media", "Digital Marketing"],
    },
  ];

  const experienceItems = [
    {
      title: "Software Developer",
      place: "Infraspex Inc",
      date: "January 2026 – Present",
      desc: [
        "Engineered custom software solutions for internal operations and client requirements.",
        "Developed, maintained, and optimized web-based systems and the company website.",
        "Improved system performance, reliability, and functionality through enhancements and bug fixes.",
      ],
    },
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
      title: "Project Technical Specialist I",
      place: "Mindanao State University - Iligan Institute of Technology",
      date: "January 2025 – December 2025",
      desc: [
        "Developed and optimized the organization's official website and internal systems.",
        "Enhanced software functionality and performance through continuous improvements.",
        "Provided technical support, system maintenance, and troubleshooting.",
        "Produced technical documentation, reports, and presentations.",
      ],
    },
    {
      title: "Research Assistant",
      place: "Mindanao State University - Iligan Institute of Technology",
      date: "August 2024 – December 2024",
      desc: [
        "Developed and maintained a research project system with real-time data integration.",
        "Integrated database systems to enable dynamic website data display.",
        "Supported project development through technical coordination and research activities.",
      ],
    },
    {
      title: "Video Editor (Internship)",
      place: "BFJ Studious",
      date: "2021 – 2022",
      desc: [
        "Edited travel content for Instagram, TikTok, Facebook, and YouTube.",
        "Created engaging videos showcasing travel adventures.",
        "Produced content that inspired and connected with global audiences.",
      ],
    },
  ];

  const educationItems = [
    {
      title: "BS in Computer Applications, major in IoT",
      place: "Mindanao State University - Iligan Institute of Technology",
      date: "2020 – July 2024",
      honor: "Magna Cum Laude",
      desc: ["Specialized in IoT systems and web technologies."],
    },
    {
      title: "Information Technology",
      place: "Iligan Computer Institute",
      date: "2018 – 2020",
      honor: "With High Honor",
      desc: ["Built a foundation in programming and design principles."],
    },
  ];

  const heroSkills = [
    "React.js",
    "Vue.js",
    "Node.js",
    "JavaScript",
    "Python",
    "PHP",
    "MySQL",
    "UI/UX Design",
    "Full-Stack Web Development",
    "Git & GitHub",
    "Video Editing",
  ];

  const skillGroups = [
    {
      icon: <Code2 size={22} />,
      title: "Programming",
      items: ["JavaScript", "Python", "PHP", "C", "C++"],
    },
    {
      icon: <Layers size={22} />,
      title: "Frameworks & Libraries",
      items: ["React.js", "Vue.js", "Node.js", "Vite"],
    },
    {
      icon: <Database size={22} />,
      title: "Database Management",
      items: ["MySQL", "SQL", "Cloud Databases"],
    },
    {
      icon: <Cloud size={22} />,
      title: "Hosting & Deployment",
      items: ["Vercel", "Render", "Hostinger"],
    },
    {
      icon: <Wrench size={22} />,
      title: "Tools & Technologies",
      items: ["TIBCO", "Git", "GitHub", "Word", "Excel", "PowerPoint", "ClickUp"],
    },
    {
      icon: <PenTool size={22} />,
      title: "Development & Design",
      items: [
        "Full-Stack Web Development",
        "UI/UX Design",
        "System Maintenance & Technical Support",
        "Technical Documentation",
        "Video Editing",
        "Digital Marketing & Social Media Management",
      ],
    },
    {
      icon: <Users size={22} />,
      title: "Additional Skills",
      items: [
        "Problem Solving",
        "Analytical Thinking",
        "Team Collaboration",
        "Communication",
        "Project Coordination",
        "Adaptability",
        "Time Management",
        "Attention to Detail",
        "Customer Service",
        "Fast Learner",
      ],
    },
  ];

  const projects = [
    {
      img: infraImg,
      title: "Infraspex",
      badge: "DOST-Funded Project",
      desc: "Developed a drone and LiDAR-based infrastructure inspection system enhanced with AI for high-precision data collection, structural assessment, and infrastructure safety monitoring.",
      features: [
        "Drone-LiDAR Integration",
        "AI-Powered Inspection",
        "Infrastructure Assessment",
        "Data Visualization",
        "Inspection Monitoring",
      ],
      tech: ["React", "Python", "MySQL", "Supabase"],
      link: "https://infraspex.com",
    },
    {
      img: bridgeInspectionGif,
      title: "Bridge, Road, and Infrastructure Inspection System",
      desc: "Developed a centralized inspection platform for managing infrastructure inspections, damage monitoring, and report generation. Integrates AI-powered damage detection, damage classification, GPS-based damage mapping, and automated reporting to support efficient infrastructure assessment.",
      features: [
        "AI-Powered Detection",
        "Damage Classification",
        "GPS Coordinates",
        "Inspection Management",
        "Monitoring Dashboard",
        "Report Generation",
      ],
    },
    {
      img: warehouseManagementGif,
      title: "Smart Warehouse Management System",
      desc: "Developed a warehouse management system for monitoring sack inventory and streamlining receiving, dispatch, and return processes. Implements FIFO inventory management, analytics, and AI-powered bag detection to improve inventory accuracy and operational efficiency.",
      features: [
        "Sack Inventory Tracking",
        "FIFO Management",
        "AI-Powered Bag Detection",
        "Dispatch & Returns",
        "Inventory Analytics",
        "QR Code Tracking",
      ],
    },
    {
      img: warehouseMonitoringGif,
      title: "Smart Warehouse Monitoring & Analytics",
      desc: "Developed a continuous warehouse monitoring platform integrating sensor data and recurring inspections to detect environmental and infestation risks. Provides real-time sensor monitoring, automated alerts, and analytics to support proactive warehouse management.",
      features: [
        "Sensor Monitoring",
        "Infestation Detection",
        "Automated Alerts",
        "Inspection Tracking",
        "Real-Time Analytics",
        "Risk Monitoring",
      ],
    },
    {
      img: weatherImg,
      title: "Weather Prediction & Monitoring System",
      badge: "DOST-Funded Project",
      desc: "Developed a centralized platform that aggregates weather and water-level data from multiple monitoring stations across Iligan City for real-time environmental monitoring and flood preparedness.",
      features: [
        "Real-Time Monitoring",
        "Weather Data",
        "Water-Level Monitoring",
        "Multi-Station Integration",
        "Flood Monitoring",
      ],
      tech: ["Python", "AI", "MySQL", "PHP"],
      link: "https://iliganweather.com",
    },
    {
      img: hrisGif,
      title: "Human Resource Information System",
      desc: "Developed a centralized HR management system for managing employee records, payroll, attendance, leave, government contributions, and 201 employee files. Includes an employee portal for accessing personal information and HR-related services.",
      features: [
        "Employee Management",
        "Payroll",
        "Attendance & Leave Tracking",
        "Government Contributions",
        "201 Files",
        "Employee Portal",
        "HR Dashboard",
      ],
    },
    {
      img: studentManagementGif,
      title: "School Student Management System",
      desc: "Developed a secure student management platform for real-time attendance and transportation monitoring. Features include student time-in/time-out tracking, parent access to attendance records, administrative management, and school bus location monitoring for improved student safety and visibility.",
      features: [
        "Real-Time Attendance Tracking",
        "Parent Portal",
        "Student Records",
        "School Bus GPS Monitoring",
        "Administrative Dashboard",
      ],
    },
    {
      img: thesisimg,
      title: "Smart Drainage Waste Management System",
      badge: "Undergraduate Thesis",
      desc: "Developed an IoT-based smart drainage system designed to monitor waste accumulation, improve waste collection efficiency, and support sustainable urban waste management.",
      features: [
        "IoT Monitoring",
        "Waste Detection",
        "Automated Notifications",
        "Sensor Integration",
        "Data Monitoring",
      ],
      tech: ["IoT", "Microcontroller", "Sensors"],
      link: thesis,
      isPDF: true,
    },
    {
      img: objectDetectionGif,
      title: "Object Detection",
      badge: "College Project – AI System",
      desc: "Developed and trained a real-time object detection model using YOLOv8 and Edge Impulse to identify and classify individuals from image and video data.",
      features: [
        "YOLOv8",
        "Edge Impulse",
        "Computer Vision",
        "Image Processing",
        "Real-Time Object Detection",
      ],
    },
    {
      img: sumobotGif,
      title: "Sumobot Competition",
      badge: "College Project – Robotics",
      desc: "Designed and built an autonomous sumo robot using microcontrollers, ultrasonic sensors, and IR sensors for object detection and navigation, achieving 4th place among 8 competing teams.",
      features: [
        "Microcontrollers",
        "Ultrasonic Sensors",
        "IR Sensors",
        "Robotics",
        "Autonomous Navigation",
      ],
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
          <div className="service-stats hero-highlights">
            {serviceStats.map((s, i) => (
              <div className="service-stat" key={i}>
                <span className="service-stat-value grad-text">{s.value}</span>
                <span className="service-stat-label">{s.label}</span>
              </div>
            ))}
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
            <div className="about-highlights">
              {aboutHighlights.map((h, i) => (
                <div className="about-highlight" key={i}>
                  <div className="about-highlight-icon">{h.icon}</div>
                  <div>
                    <strong>{h.title}</strong>
                    <span>{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-facts">
              {[
                "Full-Stack Web Development",
                "IoT & Embedded Systems",
                "UI/UX Design"              ].map((f, i) => (
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
                    {item.date && (
                      <span className="timeline-date">
                        <CalendarDays size={13} /> {item.date}
                      </span>
                    )}
                    <h3>{item.title}</h3>
                    <span className="timeline-place">
                      <MapPin size={14} /> {item.place}
                    </span>
                    {item.honor && (
                      <div className="service-proof timeline-honor">
                        <Award size={16} />
                        <span>{item.honor}</span>
                      </div>
                    )}
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
                    {item.date && (
                      <span className="timeline-date">
                        <CalendarDays size={13} /> {item.date}
                      </span>
                    )}
                    <h3>{item.title}</h3>
                    <span className="timeline-place">
                      <MapPin size={14} /> {item.place}
                    </span>
                    {item.honor && (
                      <div className="service-proof timeline-honor">
                        <Award size={16} />
                        <span>{item.honor}</span>
                      </div>
                    )}
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
              <div className="service-card-top">
                <div className="service-icon">{group.icon}</div>
                <span className="service-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
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
            Solutions That <span className="grad-text">Deliver Results</span>
          </h2>
          <p className="section-subtitle">
            From AI-powered inspection platforms to real-time IoT monitoring, I build software that
            solves real problems — proven on government-funded research and live business systems.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-top">
                <div className="service-icon">{s.icon}</div>
                <span className="service-index">0{index + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-proof">
                <BadgeCheck size={16} />
                <span>{s.proof}</span>
              </div>
              <div className="service-tags">
                {s.tags.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
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
                {p.badge && <span className="project-badge">{p.badge}</span>}
                {p.link && (
                  <div className="project-link-overlay">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-visit">
                      {p.isPDF ? "Read Article" : "Visit Site"} <ArrowUpRight size={16} />
                    </a>
                  </div>
                )}
              </div>
              <div className="project-body">
                <span className="service-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {p.features && (
                  <div className="project-features">
                    <span className="project-features-label">Key Features</span>
                    <ul>
                      {p.features.map((f, j) => (
                        <li key={j}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {p.tech && (
                  <div className="project-tech">
                    {p.tech.map((t, j) => (
                      <span key={j}>{t}</span>
                    ))}
                  </div>
                )}
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
                <span className="faq-q-text">
                  <span className="faq-index">0{index + 1}</span>
                  {item.q}
                </span>
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
            <div className="service-proof contact-status">
              <span className="status-dot" aria-hidden="true"></span>
              <span>Available for full-time roles, freelance projects, and collaborations</span>
            </div>
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
                <img src={OnlineJobsLogo} alt="OnlineJobs.ph" className="social-img" style={{ width: 22, height: 22 }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">© {new Date().getFullYear()} Yvonne Miral. All rights reserved.</section>
    </>
  );
}
