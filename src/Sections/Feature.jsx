import React from "react";
import Container from "react-bootstrap/Container";
import { feature } from "../Constants";
import FeatureCard from "../Components/FeatureCard";
const Feature = () => {
  return (
    <Container className="d-flex gap-5 mb-5 flex-lg-row flex-column">
      {feature.map((item) => (
        <FeatureCard {...item} key={item.icon} />
      ))}
    </Container>
  );
};

export default Feature;
