import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import BusinessAreas from "./pages/BusinessAreas";
import Production from "./pages/Production";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import AIChatbot from "./components/chat/AIChatbot";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-sans">
        <Navbar />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/business-areas" element={<BusinessAreas />} />
            <Route path="/production" element={<Production />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIChatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;