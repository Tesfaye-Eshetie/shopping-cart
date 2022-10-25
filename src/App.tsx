import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/shopping-cart/" element={<Home />} />
          <Route path="/shopping-cart/store" element={<Store />} />
          <Route path="/shopping-cart/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
