import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hostel Managment"
              description="A comprehensive solution designed to streamline hostel operations, including room allocation, resident records, and fee tracking. This system enhances efficiency, reduces administrative workload, and ensures seamless management of daily hostel activities."
              ghLink="https://github.com/PagalavanKS/Hostel-Management-System"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Generative AI intership"
              description="The Generative AI Internship offers hands-on experience in developing cutting-edge AI models for creative applications. Interns will explore technologies like deep learning, natural language processing, and generative design to create innovative solutions."
              ghLink="https://github.com/PagalavanKS/Generative_AI-intership"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Contact Manager"
              description="The Contact Manager is a user-friendly application designed to organize and manage personal and professional contacts efficiently. It allows users to store, search, and update contact information seamlessly while ensuring data security. With intuitive features, it simplifies staying connected and managing relationships."
              ghLink="https://github.com/PagalavanKS/Contact_Manager_v2"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
