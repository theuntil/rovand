import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Policies from "./pages/Policies.tsx";

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/policies" element={<Policies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
