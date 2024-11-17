import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer" style={{ position: "relative" }}>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Pagalavan K S</h3>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="footer-body">
          <ul className="footer-icons" style={{ padding: 0, margin: 0 }}>
            <li
              className="social-icons"
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                display: "flex",
                justifyContent: "flex-end",
                gap: "15px",  // Increased gap for more space between icons
              }}
            >
              <a
                href="https://github.com/PagalavanKS"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={30} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
