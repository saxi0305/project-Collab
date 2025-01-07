import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <Container className="d-flex justify-content-between align-items-center flex-lg-row flex-column my-5">
      <article className="mt-5">
        <p className="ms-1 mb-2">Top Business App</p>
        <h1 className="text-primary w-75">The Platform For Better</h1>
        <p className="w-75">Crafted with care & creativity. Brings together everything in one place</p>
        <div className="d-flex gap-3 mt-4">
          <Button variant="danger">Download</Button>
          <Button variant="outline-danger">Check Demo</Button>
        </div>
      </article>
      <img
        src="Animation.svg"
        alt=""
        height="300"
        className="object-fit-contain img-fluid mt-5"
      />
    </Container>
  );
};

export default Hero;
