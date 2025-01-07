import React from "react";
import { Container, Button } from "react-bootstrap";

const Corroboration = () => {
  return (
    <section className="d-flex justify-content-around  align-items-center flex-lg-row flex-column mt-5 bg-warning-subtle">
      <article className="mx-5 px-5">
        <h6 className="text-primary">CORROBORATION</h6>
        <h1>Keeping All Elements Together To Present The Project</h1>
        <p className="mt-4">
          While the project is shared between several members, the resources
          need to be in one place to maintain clarity and flexibility among
          developers.
        </p>
        <Button type="button" className="btn btn-danger mt-4">
          Learn More
        </Button>
      </article>
      <img src="Mockup2.svg" alt="Project Mockup" className="mt-4 mt-md-0" />
    </section>
  );
};

export default Corroboration;
