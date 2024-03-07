import NavBar from "./components/NavBar";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
