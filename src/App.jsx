import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShowcaseProvider } from './context/ShowcaseContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { NotificationToast } from './components/NotificationToast';

// Exactly Five Main Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

// Helper component to scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <ShowcaseProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#F5F5F1] text-[#151515] font-sans antialiased selection:bg-[#D2B779] selection:text-[#103D35]">
          {/* Global Header Navigation */}
          <Header />

          {/* Main Content Area: Exactly 5 Pages */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all redirect to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Global Showcase Inspection Modal & Feedback Toast */}
          <ProductDetailsModal />
          <NotificationToast />
        </div>
      </Router>
    </ShowcaseProvider>
  );
}

export default App;
