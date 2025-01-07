import React from "react";
import { chats } from "../Constants";
import Container from "react-bootstrap/Container";
import ChatCard from "../Components/ChatCard";

const Chat = () => {
  return (
    <section className="d-flex gap-5 mb-5 flex-lg-row flex-column justify-conten-space-evenly">
      {chats.map((item) => (
        <ChatCard {...item} key={item.icon} />
      ))}
    </section>
  );
};
export default Chat;
