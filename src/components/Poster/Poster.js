import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap"; // For flexible grid layout and modal
import posterImage1 from "./emotion.png";
import posterImage2 from "./suicide.png";
import posterImage3 from "./poster3.png"; // Replace with your image
import posterImage4 from "./poster4.png"; // Replace with your image
import posterImage5 from "./poster5.png"; // Replace with your image
import "./Poster.css";

function Poster() {
  const [show, setShow] = useState(false); // State to manage modal visibility
  const [selectedImage, setSelectedImage] = useState(""); // State to store the selected image

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  return (
    <Container fluid className="poster-section">
      <Row className="justify-content-center">
        <Col md={12} className="text-center mb-4">
          {/* Adding Text Above the Posters */}
          <h1 style={{ color: "#fff" }}>My Posters Gallery</h1>
          <p style={{ color: "#fff", fontSize: "1.2rem" }}>
            Click on any poster to view it in full size.
          </p>
        </Col>

        <Col md={2} className="poster-container">
          <img
            src={posterImage1}
            alt="Poster 1"
            className="poster-image"
            onClick={() => handleShow(posterImage1)} // Trigger modal on click
          />
        </Col>
        <Col md={2} className="poster-container">
          <img
            src={posterImage2}
            alt="Poster 2"
            className="poster-image"
            onClick={() => handleShow(posterImage2)}
          />
        </Col>
        <Col md={2} className="poster-container">
          <img
            src={posterImage3}
            alt="Poster 3"
            className="poster-image"
            onClick={() => handleShow(posterImage3)}
          />
        </Col>
        <Col md={2} className="poster-container">
          <img
            src={posterImage4}
            alt="Poster 4"
            className="poster-image"
            onClick={() => handleShow(posterImage4)}
          />
        </Col>
        <Col md={2} className="poster-container">
          <img
            src={posterImage5}
            alt="Poster 5"
            className="poster-image"
            onClick={() => handleShow(posterImage5)}
          />
        </Col>
      </Row>

      {/* Modal to show the full image */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <img src={selectedImage} alt="Full Poster" className="full-image" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Poster;
