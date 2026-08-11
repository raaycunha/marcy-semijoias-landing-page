import Container from "../components/Container";
import About from "../sections/About";
import Collections from "../sections/Collections";
import Cta from "../sections/Cta";

const Home = () => {
  return (
    <>
      <Container>
        <Collections />
      </Container>
      <div className="bg-[#f4dbc16a]">
        <Container>
          <About />
        </Container>
      </div>
      <Cta />
    </>
  );
};

export default Home;
