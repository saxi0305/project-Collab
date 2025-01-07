import Card from "react-bootstrap/Card";

const ChatCard = ({ icon, title, description }) => {
  return (
    <Card style={{ border: "0", width: "300px", marginLeft: "90px" }}>
      <Card.Img
        src={icon}
        height={80}
        className=" mt-4 justify-content-between  ms-4 "
        style={{ width: "80px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="w-75 ">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ChatCard;
