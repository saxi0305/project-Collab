import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import { Data } from "../Constants";

const FAQ = () => (
  <Container className="my-5 pt-5 flex-lg-row">
    <article>
      <h1 className="text-center mb-5">Frequently Asked Questions</h1>
    </article>
    <Accordion>
      {Data.map(({ key, question, answer }) => (
        <Accordion.Item eventKey={key} key={key}>
          <Accordion.Header>{question}</Accordion.Header>
          <Accordion.Body>{answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  </Container>
);

export default FAQ;
