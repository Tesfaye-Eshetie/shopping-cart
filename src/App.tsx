import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/shopping-cart/" element={<Home />} />
          <Route path="/shopping-cart/store" element={<Store />} />
          <Route path="/shopping-cart/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
