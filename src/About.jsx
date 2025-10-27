import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import profile from "./assets/Yvonne.png";

export default function About() {
  const data = [
    { year: 2020, WebDev: 50, IoT: 30, AI: 20 },
    { year: 2021, WebDev: 65, IoT: 40, AI: 30 },
    { year: 2022, WebDev: 75, IoT: 55, AI: 50 },
    { year: 2023, WebDev: 85, IoT: 70, AI: 65 },
    { year: 2024, WebDev: 90, IoT: 80, AI: 75 },
    { year: 2025, WebDev: 95, IoT: 85, AI: 80 },
  ];

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about-modern">
        <div className="about-wrapper">
          <div className="about-photo">
            <img src={profile} alt="Yvonne Miral" />
            <div className="about-stats">
              <div>
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3>20+</h3>
                <p>Projects</p>
              </div>
              <div>
                <h3>10+</h3>
                <p>Clients</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I’m a passionate IT professional with over <strong>5 years of experience</strong> 
              in <strong>software development</strong>, <strong>IoT solutions</strong>, and 
              <strong> database management</strong>. From <strong>microcontroller programming</strong> 
              to <strong>full-stack web apps</strong> and <strong>system deployment</strong>, I thrive 
              on building reliable and creative solutions.
            </p>
            <p>
              Beyond coding, I love blending <strong>engineering with creativity</strong>—whether 
              through <strong>UI design</strong>, <strong>video editing</strong>, or 
              <strong> storytelling</strong>. I believe technology becomes powerful when it’s 
              human-centered and paired with creativity.
            </p>
            <p>
              Outside of work, I explore new music, create digital art, travel, and enjoy gaming. 
              These passions fuel my curiosity, problem-solving mindset, and drive to keep 
              learning and innovating.
            </p>

            <div className="about-tags">
              <span>Software Dev</span>
              <span>IoT</span>
              <span>Database</span>
              <span>Design</span>
              <span>Creativity</span>
              <span>Storytelling</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE STATS */}
      <section className="experience-section">
        <div className="experience-container">
          {/* LEFT COLUMN */}
          <div className="experience-text">
            <span className="section-subtitle">Professional Growth</span>
            <h2 className="section-title">
              My Journey of <span>Experience</span>
            </h2>
            <p>
              Over the years, I’ve gained valuable expertise in 
              <strong> web development</strong>, <strong>IoT solutions</strong>, 
              and <strong>AI workflows</strong>.  
              This chart reflects how my skills have progressed 
              and evolved across these domains.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>

          {/* RIGHT COLUMN */}
          <div className="experience-chart">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="WebDev"
                  stroke="#007bff"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="IoT"
                  stroke="#00c49f"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="AI"
                  stroke="#ff7300"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>


      {/* EDUCATION */}
      <section className="experience">
        <div className="container">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>
                  BS Computer Application – IoT, Mindanao State University - Iligan Institute of Technology
                </h3>
                <span>2020 – 2024</span>
                <p>Magna Cum Laude</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Information Technology, Iligan Computer Institute</h3>
                <span>2018 – 2020</span>
                <p>With Honor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-grid">
        <div className="container">
          <h2>My Values</h2>
          <div className="value-cards">
            <div className="value-card">
              <i className="fa-solid fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>Exploring new technologies and applying them in real-world solutions.</p>
            </div>
            <div className="value-card">
              <i className="fa-solid fa-handshake"></i>
              <h3>Collaboration</h3>
              <p>Working with diverse teams to turn challenges into opportunities.</p>
            </div>
            <div className="value-card">
              <i className="fa-solid fa-paintbrush"></i>
              <h3>Creativity</h3>
              <p>Blending technical expertise with design and storytelling.</p>
            </div>
            <div className="value-card">
              <i className="fa-solid fa-arrows-rotate"></i>
              <h3>Adaptability</h3>
              <p>Thriving in dynamic environments and learning quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND WORK */}
      <section className="beyond-work split">
        <div className="container">
          <div className="split-right">
            <h2>Beyond Work</h2>
            <p>
              When I’m not coding or editing videos, you’ll often find me exploring
              new creative tools, learning about AI trends, or experimenting with
              microcontrollers. Outside of tech, I enjoy capturing stories through
              photography, exploring nature, and finding inspiration in everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="highlights">
        <div className="container">
          <h2>Highlights & Achievements</h2>
          <div className="highlight-cards">
            <div className="highlight-card">
              <i className="fa-solid fa-award"></i>
              <h3>Dean’s Lister</h3>
              <p>
                Recognized for academic excellence during my BS in Information
                Technology at MSU-IIT.
              </p>
            </div>
            <div className="highlight-card">
              <i className="fa-solid fa-laptop-code"></i>
              <h3>Capstone Innovation</h3>
              <p>
                Developed an IoT-driven project that showcased the potential of
                embedded AI in real-world applications.
              </p>
            </div>
            <div className="highlight-card">
              <i className="fa-solid fa-users"></i>
              <h3>Team Leadership</h3>
              <p>
                Successfully led collaborative projects in both academic and
                freelance settings, ensuring timely and high-quality delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Project Technical Specialist I - MSU-IIT ARIS Lab</h3>
                <span>2025 – Present</span>
                <p>
                  Working on full-stack applications, IoT integrations, and AI-assisted
                  solutions, delivering scalable systems for businesses.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Research Assistant - MSU-IIT ARIS Lab</h3>
                <span>2024</span>
                <p>
                  Worked on full-stack applications, IoT integrations, and AI-assisted
                  solutions, delivering scalable systems for businesses.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Video Editor - BFJ Studious (Internship)</h3>
                <span>2021 – 2022</span>
                <p>
                  Created engaging multimedia content for marketing campaigns,
                  social media, and corporate branding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
