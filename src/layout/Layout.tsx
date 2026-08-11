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
        backdrop-blur-md
        border-b border-[#d9c2a8]/40"
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
