import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Hero from "./Sections/Hero";
import Client from "./Sections/Client";
import Detail from "./Sections/detail";
import Feature from "./Sections/Feature";
import Corroboration from "./Sections/Corroboration";
import Chat from "./Sections/Chat";
import Testimonial from "./Sections/Testimonial";
import Frame from "./Sections/Frame";
import Accordion from "./Sections/Accordion";
import Bottom from "./Sections/Bottom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Client />
        <Detail />
        <Feature />
        <Corroboration />
        <Chat />
        <Testimonial />
        <Frame />
        <Accordion />
        <Bottom />
        <Footer />
      </div>
    </>
  );
}

export default App;
