import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Frame = () => {
  return (
    <section className="d-flex mb-5 bg-warning-subtle flex-lg-row flex-column">
      <article className="mx-5 px-5">
        <img src="Image.svg" alt="" height="350" />
      </article>
      <article className="mt-5 ms-4 text-primary">
        <h1>Collaborate with the</h1>
        <h1>team free of cost</h1>
        <Button type="button" className="btn btn-danger mt-5 ">
          Try For Free
        </Button>
      </article>
    </section>
  );
};

export default Frame;
