"use client"
import React, { useState } from "react";
import Image from "next/image";
import Workplace from "./Workplace";

export default function Home() {

  const [menuOpen, setMenuOPen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOPen(!menuOpen);
  }
  return (
    <>
        <header>
          <a href="#" className="logo-holder">
            <div className="logo">
              <img src="./imgs/logo-white.png" alt="logo" width="100%"/>
            </div>
            <div className="logo-text">Portfolio Website</div>
          </a>
          <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#bento">Projects</a>
              </li>
              <li>
                <a href="mailto:bukunmi.akinyemi.enoch@gmail.com" className="button">Contact Me</a>
              </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </a>
          </nav>
        </header>

        <main>
          <section className="hero container">
            <div className="hero-blue">
              <div>
                <h1><small>Hi! I'm</small>
                  Bukunmi Akinyemi
                </h1>
                <p>
                  A law graduate and a
                  Designer and Developer with proficiency in HTML, CSS, Javascript and React. <span>
                    I'm interested in AI and Machine Learning
                  </span>
                </p>
                <div className="call-to-action">
                  <a href="./BUKUNMI RESUME.pdf" className="button black">
                    View Resume
                  </a>
                  <a href="mailto:bukunmi.akinyemi.enoch@gmail.com" className="button white">
                    Contact Me
                  </a>
                </div>

                <div className="social-links">
                  <a href="https://github.com/Bukunmi2108" target="_blank">
                    <img src="/imgs/github.png" alt="Github"
                    width="48"/>
                  </a>
                  <a href="https://www.linkedin.com/in/akinyemibukunmi/" target="_blank">
                    <img src="/imgs/linkedin.png" alt="Linkedin"
                    width="48"/>
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-yellow">
              <img src="./imgs/hero-image(1).png" alt="Bukunmi" width="100%"/>
            </div>
          </section>

          <section className="logos container">
            <div className="marquee">
              <div className="track">
                <img loading = "lazy" src="./imgs/html.png" alt="HTML" width="128"/>
                <img loading = "lazy" src="./imgs/css.png" alt="CSS" width="128"/>
                <img loading = "lazy" src="./imgs/javascript.png" alt="JAVASCRIPT" width="128"/>
                <img loading = "lazy" src="./imgs/sass.png" alt="SASS" width="128"/>
                <img loading = "lazy" src="./imgs/react.png" alt="REACT" width="128"/>
                <img loading = "lazy" src="./imgs/nextjs.png" alt="NEXTJS" width="128"/>
                <img loading = "lazy" src="./imgs/azure.png" alt="AZURE" width="128"/>
                <img loading = "lazy" src="./imgs/vscode.png" alt="VS CODE" width="128"/>
                <img loading = "lazy" src="./imgs/python.png" alt="PYTHON" width="128"/>
                <img loading = "lazy" src="./imgs/html.png" alt="HTML" width="128"/>
                <img loading = "lazy" src="./imgs/css.png" alt="CSS" width="128"/>
                <img loading = "lazy" src="./imgs/javascript.png" alt="JAVASCRIPT" width="128"/>
                <img loading = "lazy" src="./imgs/sass.png" alt="SASS" width="128"/>
                <img loading = "lazy" src="./imgs/react.png" alt="REACT" width="128"/>
                <img loading = "lazy" src="./imgs/nextjs.png" alt="NEXTJS" width="128"/>
                <img loading = "lazy" src="./imgs/azure.png" alt="AZURE" width="128"/>
                <img loading = "lazy" src="./imgs/vscode.png" alt="VS CODE" width="128"/>
                <img loading = "lazy" src="./imgs/python.png" alt="PYTHON" width="128"/>
              </div>
            </div>
          </section>

          <section id="skills" className="skills container">
            <h2>
              <small>
                About Me
              </small>
              Skills
            </h2>

            <div className="holder-blue">
              <div className="left-column">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>PHP</li>
                  <li>Python</li>
                </ul>
              </div>

              <div className="right-column">
                <h3>A bit about me</h3>
                <p>Hi! I'm Bukunmi Akinyemi, a Law graduate, a web developer with profound knowledge of HTML, CSS and JavaScript, React js and Wordpress. I also have intermediate knowledge of PHP, Python and Artificial Intelligence</p>

                <p>I am also perfecting my skills in frameworks like React js and Next js. <strong>I am open to work with you on any web development project</strong></p>

              </div>
            </div>
          </section>

          {/* <section id="projects" className="work-experience container">
            <h2>
              <small>Recent</small>
              Work Experience
            </h2>
            <div className="jobs">
              <Workplace 
                img= "/imgs/bento-6.jpg"
                title= "Procerum"
                duration= "2020 - 2023"
                description= "This is working"
              />
              <Workplace 
                img= "/imgs/workplace-3.jpg"
                title= "Chamber of Commerce"
                duration= "2020 - 2023"
                description= "Demo"
              />
            </div>
          </section> */}

          <section id="bento" className="bento container">
            <h2>
              <small>
                Previously
              </small>
              Completed Projects
            </h2>
            <div className="bento-grid">
              <a href="#" className="bento-item">
                <img loading="lazy" src="./imgs/binti3.png" alt="Previous developments"/>
              </a>
              <a href="https://just-law.vercel.app/" className="bento-item">
                <img loading="lazy" src="./imgs/binti2.png" alt="Previous developments"/>
              </a>
              <a href="#" className="bento-item">
                <img loading="lazy" src="./imgs/binti5.png" alt="Previous developments"/>
              </a>
              <a href="#" className="bento-item">
                <img loading="lazy" src="./imgs/binti4.png" alt="Previous developments"/>
              </a>
              <a href="https://bukunmi2108.github.io/menu_project/" className="bento-item">
                <img loading="lazy" src="./imgs/binti8.png" alt="Previous developments"/>
              </a>
              <a href="https://innovatelawfirm.vercel.app/" className="bento-item">
                <img loading="lazy" src="./imgs/binti1.png" alt="Previous developments"/>
              </a>
            </div>
          </section>
        </main>
        <footer className="container footer">
          <p>
            Developed by <span>Bukunmi Akinyemi.<span></span></span> Copyright <span className="year">
              2024
            </span>
          </p>
        </footer>
      </>
  );
}
