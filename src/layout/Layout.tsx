import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../sections/Hero";
import SecuritySection from "../sections/Security";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <header
        className="fixed top-0 left-0 z-50
        w-full
        bg-[#FAF0E5]/90
        backdrop-blur-md"
      >
        <Container>
          <Header />
        </Container>
      </header>
      <main>
        <section className="bg-[#f4dbc16a] pt-15 md:pt-20">
          <Hero />
          <Container>
            <SecuritySection />
          </Container>
        </section>
        <Outlet />
      </main>
      <footer className="bg-[#f4dbc16a]">
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
