// import "../styles/contact.css"

// export default function Contact(){
//     return(
//         <section id="contact">
//             <div className="contact">
//                 <h1>Let's connect!</h1>
//                 <p>I’m currently open to internships, freelance work, and collaborations.
// Feel free to reach out.</p>

//             <a href="https://www.linkedin.com/in/mrudula-eranki/" target="_blank" className="social-link">
//             <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
//             <span>LinkedIn</span>
//             </a>
           
//             <a href="https://github.com/MrudulaEranki" target="_blank" className="social-link">
//             <img src="/github.png" alt="LinkedIn" className="social-icon" />
//             <span>GitHub</span>
            
//             </a>
            
//             <a href="mailto:elmrudulaa@gmail.com" className="social-link">
//                 <img src="/gmail.png" alt="LinkedIn" className="social-icon" />
//             <span>Mail</span>

//             </a>
            
//             <a href="/public/MrudulaEranki_Resume.pdf" target="_blank" className="social-link">
//             <img src="/view.png" alt="LinkedIn" className="social-icon" />
//             <span>View Resume</span>
//             </a>
            
//             <a href="public/MrudulaEranki_Resume.pdf" className="social-link" download>
//             <img src="/download.png" alt="LinkedIn" className="social-icon" />
//             <span>Download Resume</span>
//             </a>    
//             </div>

            
//         </section>
//     );
// }


import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <h1>Let's connect!</h1>
        <h3>
          I’m currently open to internships and freelance work.
          Feel free to reach out :]
        </h3>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/mrudula-eranki/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/MrudulaEranki"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <img src="/github.png" alt="GitHub" className="social-icon" />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:elmrudulaa@gmail.com"
            className="social-link"
          >
            <img src="/gmail.png" alt="Mail" className="social-icon" />
            <span>Mail</span>
          </a>

          <a
            href="/MrudulaEranki_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <img src="/view.png" alt="View Resume" className="social-icon" />
            <span>View Resume</span>
          </a>

          <a
            href="/MrudulaEranki_Resume.pdf"
            download
            className="social-link"
          >
            <img src="/download.png" alt="Download Resume" className="social-icon" />
            <span>Download</span>
          </a>
        </div>
      </div>
    </section>
  );
}
