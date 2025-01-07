import React from "react";
import { Container } from "react-bootstrap";

const Bottom = () => {
  return (
    <Container
      className="justify-content-between mt-5 ms-2 pt-5 flex-lg-row flex-column"
      style={{ position: "relative", width: "80%" }}
    >
      <article className="mb-5 position-relative ">
        <div style={{ position: "relative", width: "100%" }}>
          <img
            src="Background.svg"
            width="1300"
            height="500"
            alt="Background"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "36%",
            left: "12%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img src="phone.svg" height={460} alt="Phone" className="" />

          <div style={{ margin: "32px", color: "white", fontWeight: "bold" }}>
            <h1 className="mt-5">
              Start using our app today, enjoy the complete fun
            </h1>
            <img src="app_button.svg" height={30} className="me-4  mt-3" />
            <img src="play_button.svg" height={30} className="me-5 mt-3" />
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Bottom;
