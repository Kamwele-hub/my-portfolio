import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
