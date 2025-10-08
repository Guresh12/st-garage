import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full top-0 z-50 bg-black/95 backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="ST George's Auto Fit" className="h-12 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-white font-bold text-lg leading-tight">ST GEORGE'S AUTO FIT</h1>
                <p className="text-[#d4af37] text-xs">Performance ✓ Precision ✓ Perfection</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-[#d4af37] transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-[#d4af37] transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-[#d4af37] transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-[#d4af37] transition-colors">Contact</a>
              <a
                href="https://wa.me/254791168742?text=Hello%20ST%20George's%20Auto%20Fit,%20I'd%20like%20to%20book%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d4af37] text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-[#c4a037] transition-all"
              >
                Book Service
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-3">
              <a href="#home" className="block text-white hover:text-[#d4af37] py-2">Home</a>
              <a href="#services" className="block text-white hover:text-[#d4af37] py-2">Services</a>
              <a href="#about" className="block text-white hover:text-[#d4af37] py-2">About</a>
              <a href="#contact" className="block text-white hover:text-[#d4af37] py-2">Contact</a>
              <a
                href="https://wa.me/254791168742?text=Hello%20ST%20George's%20Auto%20Fit,%20I'd%20like%20to%20book%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#d4af37] text-black px-6 py-2.5 rounded-lg font-semibold text-center"
              >
                Book Service
              </a>
            </div>
          )}
        </nav>
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
