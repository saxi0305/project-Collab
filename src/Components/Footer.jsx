import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { List } from "../Constants";
import { Logo } from "../Constants";

const Footer = () => {
  return (
    <section className="bg-light py-4">
      <Container className="mb-5">
        {/* Subscription Section */}
        <Row className="d-flex align-items-center justify-content-between mb-4">
          <Col xs={12} md={6} className="text-center text-md-start">
            <h4 className="fw-bold">For more, Subscribe now</h4>
            <p>Stay Updated And Work Accordingly</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <Form className="d-flex justify-content-center justify-content-md-end align-items-center">
              <Form.Group className="mb-3 me-2" style={{ width: "250px" }}>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Address"
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    padding: "5px 10px",
                    margin: "17px 0px 0px 0px",
                  }}
                />
              </Form.Group>
              <button
                type="submit"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                Subscribe
              </button>
            </Form>
          </Col>
        </Row>

        <hr style={{ border: "1px solid ", margin: "20px 0" }} />

        {/* Footer Links Section */}
        <Row className="d-flex align-items-center">
          <Col xs={12} md={8} className="d-flex flex-wrap gap-4">
            {List.map(({ title, content }, index) => (
              <div key={index} className="d-flex flex-column gap-2">
                <h5>{title}</h5>
                <ul className="list-unstyled">
                  {content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Col>

          {/* Follow Section */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <h5 className="mb-4">FOLLOW</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mt-3">
              {Logo.map((item, idx) => (
                <img
                  key={idx}
                  src={item}
                  alt="Logo"
                  style={{ width: "30px", height: "30px" }}
                />
              ))}
            </div>
          </Col>
        </Row>

        <hr style={{ border: "1px solid", margin: "20px 0" }} />

        {/* Footer Bottom Section */}
        <Row className="text-center">
          <Col>
            <p className="mb-0">
              All Rights Reserved &copy;{" "}
              <span className="fw-bold">Your Company, 2021</span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
