import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Detail = () => {
  return (
    <Container className="d-flex align-items-center mt-5 flex-xl-row flex-column">
      <img
        src="Mockup.svg"
        alt=""
        height="600"
        className="object-fit-contain img-fluid"
      />
      <article>
        <h6 className="text-primary">PARTNERSHIP</h6>
        <h1>Build strong partnership &</h1>
        <h1>organizations</h1>
        <p className="w-75">
          Bring all your document under one place and make it easy to share with
          other in no time. That makes the whole process comfortable.
        </p>
        <Button type="button" variant="danger" className="mt-5">
          Learn More
        </Button>
      </article>
    </Container>
  );
};

export default Detail;
