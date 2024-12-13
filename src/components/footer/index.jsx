import { Link } from "react-router-dom";
import { Linkedin, Github } from "react-bootstrap-icons";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h5>Host</h5>
        <p>Superhosts</p>
        <p>Lakefront</p>
        <p>Beachfront</p>
        <p>Mansions</p>
      </div>
      <div>
        <h5>Hosting</h5>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
      <div>
        <h5>Social Media</h5>
        <p>
          <a
            href="https://www.linkedin.com/in/roccocaco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="me-2" /> LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://github.com/roccocaco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="me-2" /> Github
          </a>
        </p>
      </div>
    </div>
  );
}

