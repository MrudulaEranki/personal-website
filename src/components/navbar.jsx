import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/navbar.css";

export default function NavBar() {
  return (
    <Navbar className="nav">
      <Container fluid className="navbar d-flex justify-content-between align-items-center">
        
        {/* LEFT: Buttons */}
        <div className="nav-links">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            About Me
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact me
          </button>
        </div>

        {/* RIGHT: Image */}
        <div className="nav-icon">
          <span className="nav-image-wrapper" style={{ marginLeft: "auto" }}>
              <img src="/dino3.png" alt="mrudula" className="iconn" />
          </span>
        </div>

      </Container>
    </Navbar>
  );
}
