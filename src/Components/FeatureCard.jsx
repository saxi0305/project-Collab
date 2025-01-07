import Card from "react-bootstrap/Card";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card style={{ border: "0", width: "400px", marginLeft: "60px" }}>
      <Card.Img
        src={icon}
        height={150}
        className=" mt-3 justify-content-between ms-3"
        style={{ width: "80px" }}
      />

      <Card.Body className="">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="w-75 ">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeatureCard;
