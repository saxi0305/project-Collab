import React from "react";
import { clientLogos } from "../Constants";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Client = () => {
  return (
    <section className="bg-warning-subtle py-4">
      <Container>
        <Row className="align-items-center justify-content-center g-3">
          {clientLogos.map((logo, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index} className="text-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid"
                style={{ maxHeight: "80px" }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Client;
