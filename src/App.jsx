import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import Blogs from "./pages/Blogs";

import ServiceDetail from "./pages/ServiceDetail";
import BlogDetail from "./pages/BlogDetail";
import StyleGuide from "./pages/StyleGuide";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service/:serviceId" element={<ServiceDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:blogId" element={<BlogDetail />} />
              <Route path="/style-guide" element={<StyleGuide />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <BackToTopButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
